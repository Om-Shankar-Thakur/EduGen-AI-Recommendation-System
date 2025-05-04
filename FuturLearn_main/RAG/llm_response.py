import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_MODEL = os.getenv("GROQ_MODEL")


def query_groq(prompt):
    url = "https://api.groq.com/openai/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": GROQ_MODEL,
        "messages": [
            {"role": "system", "content": "You are an expert education advisor."},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.7
    }

    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    return response.json()["choices"][0]["message"]["content"]


def generate_learning_path(courses, area_of_interest, career_goal, user_scores):
    # Construct readable output for recommended courses
    course_list = "\n".join(
        [f"{idx+1}. {course['course_name']}: {course['description']}" for idx,
            course in enumerate(courses)]
    )

    # Create prompt for LLM
    prompt = (
        "You are an AI education advisor specialized in designing personalized learning paths.\n\n"
        f"Student Profile:\n"
        f"- Area of Interest: {area_of_interest}\n"
        f"- Career Goal: {career_goal}\n"
        f"- Test Scores: {user_scores}\n\n"
        "Recommended Courses:\n"
        f"{course_list}\n\n"
        "Instructions:\n"
        "1. Analyze the student's area of interest, career goal, and test scores.\n"
        "   - The area of interest and career goal should guide the selection and order of the courses.\n"
        "   - The test scores should help you gauge the student's current level of knowledge and adjust the difficulty of the courses accordingly.\n"
        "2. Arrange the recommended courses into a logical order (beginner to advanced), based on the student's profile.\n"
        "3. For each course, mention:\n"
        "   - Why it is important for the career goal.\n"
        "   - Estimated time commitment (weeks or months).\n"
        "   - Key skills or topics covered.\n"
        "4. Suggest any prerequisites if needed before starting a course, considering the student's test scores.\n"
        "5. Provide a high-level 6-month or 1-year roadmap for the student, tailored to their profile.\n\n"
        "Format the output clearly using bullet points or numbered lists.\n"
        "End with motivational advice for the student, encouraging them to stay focused and consistent throughout their learning journey.\n"

    )

    # Query Groq's LLM
    learning_path = query_groq(prompt)

    return learning_path
