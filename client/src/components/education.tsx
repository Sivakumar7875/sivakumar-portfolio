import { GraduationCap, Trophy } from "lucide-react";

export default function Education() {
  return (
    <section className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Education & Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gray-50 p-8 rounded-lg animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-2xl text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">Bachelor of Technology</h3>
                  <p className="text-gray-600">Computer Science and Engineering</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">Sir CV Raman Institute of Technology and Science</p>
                <p className="text-gray-600">Tadipatri, Andhra Pradesh</p>
                <p className="text-gray-600">Graduated: 2021</p>
              </div>
            </div>

            {/* Extracurricular */}
            <div className="bg-gray-50 p-8 rounded-lg animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
                  <Trophy className="text-2xl text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">Extracurricular Activities</h3>
                  <p className="text-gray-600">Sports & Team Leadership</p>
                </div>
              </div>
              <p className="text-gray-700">
                Actively participated in internal corporate sports events and contributed to team success by winning multiple contests, demonstrating teamwork, leadership, and competitive spirit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
