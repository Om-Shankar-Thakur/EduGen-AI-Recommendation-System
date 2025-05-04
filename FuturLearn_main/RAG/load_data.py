import json
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance
from sentence_transformers import SentenceTransformer

# Configurations
COLLECTION_NAME = "new_courses_collection"
COURSES_JSON = "courses.json"

# Initialize Qdrant client with your provided credentials
client = QdrantClient(
    url="https://965c148d-55d1-4b79-91a1-e266db3906de.us-east4-0.gcp.cloud.qdrant.io:6333",
    api_key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.fT6jcR5LZH6guC3wcpCosuBcuQ28ZQxt28TGA6KC0nE"
)

# Load the embedding model
embedder = SentenceTransformer('all-MiniLM-L6-v2')


def load_courses(json_path):
    with open(json_path, "r", encoding="utf-8") as file:
        return json.load(file)


def create_collection_if_not_exists(collection_name):
    if not client.collection_exists(collection_name):
        client.create_collection(
            collection_name=collection_name,
            vectors_config=VectorParams(size=384, distance=Distance.COSINE)
        )
        print(f"Collection '{collection_name}' created successfully.")
    else:
        print(f"Collection '{collection_name}' already exists.")


def insert_courses(courses):
    payloads = []
    vectors = []
    ids = []

    for idx, course in enumerate(courses):
        text_to_embed = f"{course['course_name']} - {course['description']}"
        vector = embedder.encode(text_to_embed).tolist()

        payload = {key: value for key, value in course.items()}

        payloads.append(payload)
        vectors.append(vector)
        ids.append(idx)

    client.upsert(
        collection_name=COLLECTION_NAME,
        points=[
            {
                "id": id_,
                "vector": vector_,
                "payload": payload_
            }
            for id_, vector_, payload_ in zip(ids, vectors, payloads)
        ]
    )

    print(
        f"Inserted {len(courses)} courses into '{COLLECTION_NAME}' collection.")


if __name__ == "__main__":
    courses = load_courses(COURSES_JSON)
    create_collection_if_not_exists(COLLECTION_NAME)
    insert_courses(courses)
    print("All courses have been inserted successfully.")
