import { Linkedin, Github, Mail, Phone } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin className="text-xl" />,
      href: "https://linkedin.com/in/sivakumar-godugu",
      label: "LinkedIn"
    },
    {
      icon: <Github className="text-xl" />,
      href: "https://github.com/sivakumar7875",
      label: "GitHub"
    },
    {
      icon: <Mail className="text-xl" />,
      href: "mailto:gsivakumar7875@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone className="text-xl" />,
      href: "tel:6300257875",
      label: "Phone"
    }
  ];

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Sivakumar Godugu</h3>
          <p className="text-gray-400 mb-6">AI Engineer & Data Professional</p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Sivakumar Godugu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
