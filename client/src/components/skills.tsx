import { Code, Bot, Layers, Cloud, Database, ArrowRightLeft } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="text-2xl text-primary" />,
      title: "Programming Languages",
      skills: ["Python", "SQL"],
      color: "blue"
    },
    {
      icon: <Bot className="text-2xl text-primary" />,
      title: "AI/ML & Data Science",
      skills: ["Generative AI", "Agentic AI Systems", "Large Language Models (LLMs)", "Prompt Engineering", "Fine-tuning", "NLP", "Deep Learning", "Regression Models", "Data Mining", "Data Analysis", "Retrieval-Augmented Generation (RAG)", "Vector Databases (Chroma)"],
      color: "green"
    },
    {
      icon: <Layers className="text-2xl text-primary" />,
      title: "Frameworks & Libraries",
      skills: ["PyTorch", "TensorFlow", "Transformers", "Hugging Face", "LangChain", "LangChain Agents", "LangGraph", "Microsoft Autogen", "Pandas", "NumPy"],
      color: "purple"
    },
    {
      icon: <Cpu className="text-2xl text-primary" />,
      title: "Generative AI Technologies & Tools",
      skills: ["OpenAI", "Google Gemini", "Groq"],
      color: "violet"
    },
    {
      icon: <Database className="text-2xl text-primary" />,
      title: "Data Engineering & Reporting",
      skills: ["ETL Process Automation", "Data Warehousing", "Data Integration", "Data Quality Assurance", "Data Cleaning", "Microsoft Excel"],
      color: "green"
    },
    {
      icon: <Server className="text-2xl text-primary" />,
      title: "Databases",
      skills: ["MySQL", "Snowflake", "Oracle", "Vertica", "Teradata"],
      color: "blue"
    },
    {
      icon: <Cloud className="text-2xl text-primary" />,
      title: "Cloud & DevOps",
      skills: ["Microsoft Azure", "Docker", "Linux", "Git", "Github"],
      color: "orange"
    },
    {
      icon: <Code2 className="text-2xl text-primary" />,
      title: "Application Development",
      skills: ["Streamlit", "Flask", "FastAPI"],
      color: "rose"
    },
    {
      icon: <ClipboardList className="text-2xl text-primary" />,
      title: "Workflow & Project Management",
      skills: ["Agile Methodologies", "JIRA", "Tivoli Workload Scheduler (TWS)"],
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      purple: "bg-purple-100 text-purple-800",
      orange: "bg-orange-100 text-orange-800",
      red: "bg-red-100 text-red-800",
      yellow: "bg-yellow-100 text-yellow-800"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="skills" className="py-20 bg-gray-50/60 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-secondary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
