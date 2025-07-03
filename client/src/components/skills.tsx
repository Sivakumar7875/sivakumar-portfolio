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
      skills: ["Generative AI", "LLMs", "NLP", "Deep Learning", "RAG", "Vector Databases"],
      color: "green"
    },
    {
      icon: <Layers className="text-2xl text-primary" />,
      title: "Frameworks & Libraries",
      skills: ["LangChain", "LangGraph", "Streamlit", "FastAPI", "Flask"],
      color: "purple"
    },
    {
      icon: <Cloud className="text-2xl text-primary" />,
      title: "Cloud & Infrastructure",
      skills: ["Microsoft Azure", "Linux", "Docker", "Git"],
      color: "orange"
    },
    {
      icon: <Database className="text-2xl text-primary" />,
      title: "Databases",
      skills: ["MySQL", "Snowflake", "Oracle", "Vertica", "Teradata"],
      color: "red"
    },
    {
      icon: <ArrowRightLeft className="text-2xl text-primary" />,
      title: "ETL & Data Tools",
      skills: ["Informatica", "IBM DataStage", "Infoworks", "JIRA"],
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
    <section id="skills" className="py-20 bg-gray-50">
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
