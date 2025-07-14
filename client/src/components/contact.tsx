import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Phone, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactForm) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-white" />,
      label: "Phone",
      value: "6300257875",
      href: "tel:6300257875"
    },
    {
      icon: <Mail className="text-white" />,
      label: "Email",
      value: "gsivakumar7875@gmail.com",
      href: "mailto:gsivakumar7875@gmail.com"
    },
    {
      icon: <Linkedin className="text-white" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/sivakumar-godugu"
    },
    {
      icon: <Github className="text-white" />,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/sivakumar7875"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50/60 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-6">
                  I'm always interested in discussing new opportunities, collaborations, or innovative projects in AI and data science.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">{item.label}</p>
                      <p className="text-secondary font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-in">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4} 
                            placeholder="Tell me about your project or opportunity..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
