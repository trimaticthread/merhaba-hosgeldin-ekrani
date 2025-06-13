
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Instagram, Mail } from 'lucide-react';
import CodeRain from './CodeRain';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_email', // Replace with your EmailJS service ID
        'template_contact', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'toprakgulec34@gmail.com',
          reply_to: formData.email
        },
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      );
      
      // Show success toast
      toast({
        title: "Mesajınız gönderildi",
        description: "En kısa sürede size geri dönüş yapılacaktır.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Hata",
        description: "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-50 z-0">
        <CodeRain />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">İletişim</h2>
        
        <p className="text-center text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Projeleriniz için benimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağım.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl font-bold mb-4 sm:mb-6 text-white">İletişim Bilgileri</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <ContactInfo 
                icon={<Mail className="h-4 w-4 sm:h-5 sm:w-5" />} 
                title="Email"
                content="iletisim@sinagulec.com"
              />
              
              <ContactInfo 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                } 
                title="Telefon"
                content="+90 555 123 4567"
              />
              
              <ContactInfo 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                } 
                title="Konum"
                content="İstanbul, Türkiye"
              />
              
              <ContactInfo 
                icon={<Instagram className="h-4 w-4 sm:h-5 sm:w-5" />}
                title="Instagram"
                content="@sinatoprakgulec"
                isLink={true}
                link="https://instagram.com/sinatoprakgulec"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <Card className="p-4 sm:p-6 border border-gray-800 bg-card">
              <h3 className="text-xl font-bold mb-4 sm:mb-6 text-white">Mesaj Gönder</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Adınız</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adınız"
                      required
                      className="bg-secondary border-gray-700 text-white text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Adresiniz</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Adresiniz"
                      required
                      className="bg-secondary border-gray-700 text-white text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Konu</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Konu"
                      required
                      className="bg-secondary border-gray-700 text-white text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mesajınız</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mesajınız"
                      rows={4}
                      required
                      className="bg-secondary border-gray-700 text-white text-sm sm:text-base"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  isLink?: boolean;
  link?: string;
}

const ContactInfo = ({ icon, title, content, isLink = false, link }: ContactInfoProps) => {
  const contentElement = isLink && link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors text-sm sm:text-base">
      {content}
    </a>
  ) : (
    <p className="text-gray-400 text-sm sm:text-base">{content}</p>
  );
  
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
        {icon}
      </div>
      <div className="ml-3">
        <h4 className="text-base sm:text-lg font-medium text-white">{title}</h4>
        {contentElement}
      </div>
    </div>
  );
};

export default Contact;
