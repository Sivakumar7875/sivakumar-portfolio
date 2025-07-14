import { User, Phone, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50/70 to-blue-50/70 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Professional Avatar */}
          <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
            <User className="text-6xl text-white" size={96} />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
            Sivakumar Godugu
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            AI Enthusiast & Data Professional
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Bridging the gap between traditional data warehousing and cutting-edge AI solutions with 3.7 years of experience in Generative AI development and DWH/BI testing.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="tel:6300257875" 
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Phone size={16} />
              <span>6300257875</span>
            </a>
            <a 
              href="mailto:gsivakumar7875@gmail.com" 
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span>gsivakumar7875@gmail.com</span>
            </a>
            <a 
              href="https://github.com/sivakumar7875" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/sivakumar-godugu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Sivakumar_Godugu_Resume.pdf';
                link.click();
              }}
              className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
