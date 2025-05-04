
# 🎓 EduGen – AI-Powered Personalized Learning Recommendation System

**EduGen** is an AI-driven personalized recommendation system designed to enhance user learning experiences by intelligently suggesting courses tailored to individual needs. Built using Retrieval-Augmented Generation (RAG) and adaptive feedback mechanisms, EduGen improves over time by learning from user behavior and interaction.

> 👨‍💻 Developed by: Om Shankar Thakur

---

## 🌟 Features

- 🔍 **Retrieval-Augmented Generation (RAG)** for contextual and accurate course recommendations
- 💡 **Cold Start Handling** – Suggests relevant content even for new users
- 🔄 **Feedback Loop Integration** – Continuously improves recommendations over time
- 📈 **Data-Driven Insights** – Accuracy improves with user interaction
- 🧠 **Semantic Matching** – Understands learner's context, preferences, and interests



---


## 🛠️ Tech Stack

- 🐍 Python 3.8+
- 🧠 RAG (Retrieval-Augmented Generation)
- 📈 Matplotlib, Pandas, Numpy (for analysis & visualization)
- 🧪 scikit-learn (for similarity measures)
- 🌐 HTML (Frontend UI)
- 📦 Flask (Backend server, optional)




---

## ⚙️ Installation & Setup

### 1. Clone the Repository

    ```bash
    git clone https://github.com/Om-Shankar-Thakur/EduGen-AI-Recommendation-System.git
    cd EduGen-AI-Recommendation-System

### 2. Install Required Dependencies

    '''bash
    pip install -r requirements.txt

### 3. Start the Web Interface

    '''bash
    cd FuturLearn_main
    python -m http.server 8000
    
### Visit http://localhost:8000 in your browser

### 4. Run the Recommendation Model

    '''bash
    cd FuturLearn_main/RAG
    python recommendation.py
    
## 📊 Model Performance
The personalised_recommendation_system_plots.py script visually compares EduGen’s accuracy with traditional recommendation systems. It highlights:

📉 Error Reduction after feedback loop integration

🎯 Over 20% increase in recommendation relevance

📊 Dynamic improvement with every user interaction


🔒 License
This project is licensed under the MIT License – feel free to use, adapt, and extend it for educational or personal projects.

🙋‍♂️ Author
Om Shankar Thakur
