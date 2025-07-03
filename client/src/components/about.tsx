import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-secondary mb-4">Professional Summary</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Results-driven AI enthusiast and Data Professional with 3.7 years of experience in Generative AI development and DWH/BI testing. Built and deployed AI applications using GPT-4o, LangChain and Streamlit, focusing on RAG workflows, intelligent agents, and multi-modal interfaces.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Previously worked as a DWH/BI Test Engineer for 2.7 years, validating ETL pipelines, data integration, and BI systems using tools like Oracle, Snowflake, Vertica, Informatica, and IBM DataStage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Known for delivering scalable, automation-driven solutions that bridge data integrity with modern AI capabilities.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-semibold text-secondary mb-6">Career Progression</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-secondary">AI Enthusiast</h4>
                    <p className="text-gray-600 text-sm">1 year - Current</p>
                    <p className="text-gray-600 text-sm">Generative AI Development</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-secondary">DWH/BI Test Engineer</h4>
                    <p className="text-gray-600 text-sm">2.7 years</p>
                    <p className="text-gray-600 text-sm">Data Warehousing & Testing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
