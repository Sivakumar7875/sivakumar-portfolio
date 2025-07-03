import { Bot, Search, Table, CreditCard, ArrowRightLeft, Users, CheckCircle, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const aiProjects = [
    {
      title: "NexaAI – All-in-One AI Assistant",
      description: "Versatile AI assistant integrating chat, video summarization, and image generation capabilities in a unified Streamlit interface.",
      icon: <Bot className="text-4xl text-white" />,
      gradient: "from-primary to-accent",
      technologies: ["Python", "Streamlit", "Gemini API", "Stable Diffusion"],
      github: "#",
      demo: "#"
    },
    {
      title: "Agentic RAG Chatbot",
      description: "Advanced RAG chatbot using GPT-4o and LangChain for context-aware document processing and query answering.",
      icon: <Search className="text-4xl text-white" />,
      gradient: "from-green-500 to-blue-500",
      technologies: ["Python", "OpenAI GPT-4o", "LangChain", "ChromaDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Chain Agents",
      description: "Intelligent AI agent with dynamic query routing to Arxiv, Wikipedia, and web sources using LangGraph.",
      icon: <Table className="text-4xl text-white" />,
      gradient: "from-purple-500 to-pink-500",
      technologies: ["Python", "LangGraph", "Groq LLM", "Tavily"],
      github: "#",
      demo: "#"
    }
  ];

  const dwhProjects = [
    {
      title: "Aux Credit & Promotion Process",
      client: "AT&T",
      description: "Spearheaded modernization of credit and promotional processes for mobile devices, developing scalable datasets and self-service reporting capabilities.",
      icon: <CreditCard className="text-orange-600" />,
      bgColor: "bg-orange-100",
      technologies: ["Snowflake", "Python", "ADLS Gen2", "SharePoint"]
    },
    {
      title: "Teradata to Snowflake Migration",
      client: "AT&T",
      description: "Led end-to-end migration of 500 tables from Teradata to Snowflake with 95% success rate, optimizing data flow and system performance.",
      icon: <ArrowRightLeft className="text-red-600" />,
      bgColor: "bg-red-100",
      technologies: ["Teradata", "Snowflake", "Data Migration"]
    },
    {
      title: "CIMCDR",
      client: "AT&T",
      description: "Customer Information Management project involving data standardization and matching mechanisms for unique enterprise addresses and customer keys.",
      icon: <Users className="text-yellow-600" />,
      bgColor: "bg-yellow-100",
      technologies: ["IBM DataStage", "Oracle DB", "Data Matching"]
    },
    {
      title: "Data Warehouse Testing",
      client: "Multiple Projects",
      description: "Led ETL and database testing for large-scale data warehouse projects, ensuring data accuracy and performance with automated test workflows.",
      icon: <CheckCircle className="text-teal-600" />,
      bgColor: "bg-teal-100",
      technologies: ["ETL Testing", "SQL", "Test Automation"]
    }
  ];

  const getTechColor = (index: number) => {
    const colors = [
      "bg-blue-100 text-blue-800",
      "bg-green-100 text-green-800",
      "bg-purple-100 text-purple-800",
      "bg-orange-100 text-orange-800",
      "bg-red-100 text-red-800",
      "bg-yellow-100 text-yellow-800"
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Featured Projects</h2>
          
          {/* AI Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Generative AI Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow animate-fade-in">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    {project.icon}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-secondary mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded text-xs ${getTechColor(techIndex)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="link" 
                        className="text-primary hover:text-blue-700 text-sm p-0 h-auto"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} className="mr-1" /> View Code
                      </Button>
                      <Button 
                        variant="link" 
                        className="text-primary hover:text-blue-700 text-sm p-0 h-auto"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-1" /> Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DWH/BI Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Data Warehousing & BI Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {dwhProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center`}>
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-secondary">{project.title}</h4>
                      <p className="text-gray-600 text-sm">Client: {project.client}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded text-xs ${getTechColor(techIndex)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
