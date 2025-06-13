
import { Card } from "@/components/ui/card";
import CodeRain from './CodeRain';

const Experience = () => {
  const experiences = [{
    id: 1,
    period: "2021 - Şu Anda",
    title: "Kıdemli Frontend Geliştirici",
    company: "XYZ Teknoloji",
    description: "Web uygulamaları geliştirme, performans optimizasyonu, ekip liderliği ve mentorluk yapma.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  }, {
    id: 2,
    period: "2019 - 2021",
    title: "Frontend Geliştirici",
    company: "ABC Yazılım",
    description: "Kullanıcı arayüzleri tasarlama ve geliştirme, REST API entegrasyonları.",
    technologies: ["React", "JavaScript", "CSS", "HTML"]
  }];
  
  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-50 z-0">
        <CodeRain />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">İş Deneyimi</h2>
        
        <div className="relative">
          {/* Timeline Stem - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-500"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} isRight={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface Experience {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const TimelineItem = ({
  experience,
  isRight
}: {
  experience: Experience;
  isRight: boolean;
}) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center">
      {/* Timeline Point - Hidden on mobile */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-green-500"></div>
      
      {/* Content Card */}
      <div className={`w-full lg:w-5/12 ${isRight ? 'lg:mr-auto' : 'lg:ml-auto lg:order-1'}`}>
        <Card className="p-4 sm:p-6 border border-green-500 hover:shadow-lg transition-shadow hover:shadow-green-500/30 animate-fade-in">
          <div className="flex items-center mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm text-white font-medium bg-green-500 py-1 px-2 sm:px-3 rounded-full">
              {experience.period}
            </span>
          </div>
          
          <h3 className="text-lg sm:text-xl font-bold mb-1">{experience.title}</h3>
          <p className="mb-3 text-green-300 text-sm sm:text-base">{experience.company}</p>
          
          <p className="mb-4 text-zinc-300 text-sm sm:text-base">{experience.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map(tech => (
              <span key={tech} className="text-xs bg-gray-100 text-gray-600 py-1 px-2 rounded hover:bg-green-500 hover:text-white transition-colors duration-300">
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
