import os
from qdrant_client import QdrantClient
from qdrant_client.models import SearchParams, Filter, FieldCondition, MatchValue
import numpy as np
import sys
from FuturLearn_main.RAG.llm_response import generate_learning_path

# Qdrant setup
qdrant_client = QdrantClient(
    url="https://965c148d-55d1-4b79-91a1-e266db3906de.us-east4-0.gcp.cloud.qdrant.io:6333",
    api_key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.fT6jcR5LZH6guC3wcpCosuBcuQ28ZQxt28TGA6KC0nE",
)

collection_name = "new_courses_collection"


def get_recommendations(user_scores, area_of_interest, career_goal):
    vector_dim = 384
    if len(user_scores) != vector_dim:
        padded_scores = np.zeros(vector_dim, dtype=np.float32)
        padded_scores[:len(user_scores)] = user_scores
    else:
        padded_scores = np.array(user_scores, dtype=np.float32)

    # Debugging: Print first few scores
    print(f"Padded scores: {padded_scores[:10]}...")

    # Add payload filters for area of interest and career goal
    payload_filter = Filter(
        must=[
            FieldCondition(key="area_of_interest",
                           match=MatchValue(value=area_of_interest)),
            FieldCondition(key="career_goal",
                           match=MatchValue(value=career_goal)),
        ]
    )

    print(
        f"Search filters: area_of_interest={area_of_interest}, career_goal={career_goal}")

    # Perform search in the Qdrant collection
    response = qdrant_client.search(
        collection_name=collection_name,
        query_vector=padded_scores.tolist(),
        limit=5,  # Limit to top 5 results
        search_params=SearchParams(hnsw_ef=128, exact=False),
        query_filter=payload_filter
    )

    if not response:
        print("No results found.")
        return [], "No learning path could be generated based on the current input."

    print(f"Found {len(response)} results. Extracting course details...")

    recommendations = [
        {
            "course_name": hit.payload.get("course_name", "N/A"),
            "description": hit.payload.get("description", "No description available")
        }
        for hit in response
    ]

    # Call the LLM generation from llm-response.py here

    path = generate_learning_path(
        recommendations, area_of_interest, career_goal, user_scores)

    # Return the recommended courses and the learning path
    return recommendations, path


# Test the new logic
if __name__ == "__main__":
    # Sample test data
    # Simulate user scores (384-dimensional vector)
    example_scores = np.random.rand(384).tolist()
    area = "Data Science"  # Example area of interest
    goal = "Data Scientist"  # Example career goal

    # Get course recommendations and learning path based on the input
    recs, path = get_recommendations(example_scores, area, goal)

    if recs:
        print("\n🔹 Recommended Courses:\n")
        for i, rec in enumerate(recs, 1):
            print(f"{i}. {rec['course_name']}: {rec['description']}")

        print("\n🧭 Personalized Learning Path:\n")
        print(path)
    else:
        print("No recommendations found based on the input.")
