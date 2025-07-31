import { CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Generative AI Engineer",
      company: "Amdocs Development Centre, Pune, India",
      duration: "Jul 2024 – Present",
      color: "primary",
      achievements: [
        "Built AI-powered applications using GPT-4o, Gemini, LangChain, and Streamlit",
        "Engineered workflows supporting document-based RAG search, image generation, and YouTube summarization",
        "Designed agent routing systems for knowledge retrieval via web, Arxiv, and Wikipedia",
        "Deployed real-world solutions with multi-modal capabilities, modular architecture, and secure API key management",
        "Focused on building scalable, user-friendly, and production-ready Gen AI apps"
      ]
    },
    {
      title: "DWH/BI Test Engineer",
      company: "Amdocs Development Centre, Pune, India",
      duration: "Oct 2021 – June 2024",
      color: "accent",
      achievements: [
        "Validated ETL workflows and BI reporting systems in telecom domain for global client AT&T",
        "Performed end-to-end testing of data ingestion, transformation, and warehouse integration",
        "Created test cases and SQL queries to verify data accuracy across Snowflake, Oracle, and DataStage systems",
        "Led QA activities for multiple releases including regression, functional, and UAT testing",
        "Automated test workflows to reduce manual validation efforts and increase test coverage",
        "Collaborated with business analysts, developers, and project managers in Agile environments"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in">
                <div className="absolute left-0 top-0 w-1 h-full bg-primary"></div>
                <div className="ml-8 bg-gray-50 p-8 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-secondary">{exp.title}</h3>
                      <p className="text-lg text-gray-600">{exp.company}</p>
                    </div>
                    <div className={`${exp.color === 'primary' ? 'bg-primary' : 'bg-accent'} text-white px-4 py-2 rounded-full text-sm font-medium inline-block mt-2 md:mt-0`}>
                      {exp.duration}
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <CheckCircle className={`${exp.color === 'primary' ? 'text-primary' : 'text-accent'} mt-1 flex-shrink-0`} size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
