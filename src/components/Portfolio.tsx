
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CodeRain from './CodeRain';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Ticaret Platformu",
      category: "Web Geliştirme",
      description: "React ve Node.js ile geliştirilen kapsamlı bir e-ticaret çözümü.",
      image: "/placeholder.svg",
      details: {
        client: "XYZ Şirketi",
        year: "2023",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        link: "https://example.com/ecommerce",
        longDescription: "Bu proje, müşterilerin ürünleri kolayca bulabilmesi, sepete ekleyebilmesi ve satın alabilmesi için tasarlanmış modern bir e-ticaret platformudur. Admin paneli, stok yönetimi, sipariş takibi ve ödeme işlemleri gibi kapsamlı özellikler içermektedir. Performans optimizasyonu ve responsive tasarım ile mobil cihazlarla da uyumludur."
      }
    },
    {
      id: 2,
      title: "Mobil Bankacılık Uygulaması",
      category: "Mobil Uygulama",
      description: "React Native ile geliştirilen güvenli mobil bankacılık uygulaması.",
      image: "/placeholder.svg",
      details: {
        client: "ABC Bankası",
        year: "2022",
        technologies: ["React Native", "Redux", "Firebase", "Jest"],
        link: "https://example.com/banking",
        longDescription: "Bu mobil bankacılık uygulaması, kullanıcıların hesaplarını güvenli bir şekilde yönetmelerini, para transferi yapmalarını ve fatura ödemelerini gerçekleştirmelerini sağlayan kapsamlı bir çözümdür. Biyometrik kimlik doğrulama, şifreli veri saklama ve gerçek zamanlı bildirimler gibi güvenlik özellikleri içerir."
      }
    },
    {
      id: 3,
      title: "Kurumsal Web Sitesi",
      category: "UI/UX Tasarım",
      description: "Büyük bir finans şirketi için modern kurumsal web sitesi.",
      image: "/placeholder.svg",
      details: {
        client: "Global Finans",
        year: "2023",
        technologies: ["Next.js", "Tailwind CSS", "Figma", "Framer Motion"],
        link: "https://example.com/corporate",
        longDescription: "Bu kurumsal web sitesi projesi, finans şirketinin profesyonel imajını yansıtan, kullanıcı dostu ve modern bir tasarıma sahiptir. SEO optimizasyonu, hızlı sayfa yükleme süreleri ve etkileyici animasyonlar içerir. İçerik yönetim sistemi sayesinde müşteri kolayca içerik güncellemesi yapabilmektedir."
      }
    },
  ];

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-50 z-0">
        <CodeRain />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">Portfolyo</h2>
        
        <p className="text-center text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Geliştirdiğim bazı projeler. Her bir proje, farklı becerilerimi ve teknik yeteneklerimi
          göstermektedir.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewDetails={() => openProjectDetails(project)}
            />
          ))}
        </div>
      </div>

      <ProjectDetailsDialog 
        project={selectedProject} 
        open={selectedProject !== null} 
        onOpenChange={() => setSelectedProject(null)} 
      />
    </section>
  );
};

interface ProjectDetails {
  client: string;
  year: string;
  technologies: string[];
  link: string;
  longDescription: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  details: ProjectDetails;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-800 hover:border-gray-700 bg-card hover:shadow-lg transition-all">
      <div className="h-40 sm:h-48 bg-gray-900 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader className="pb-2 p-4 sm:p-6 sm:pb-2">
        <span className="text-xs text-green-500 font-medium">{project.category}</span>
        <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 pt-0">
        <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
      </CardContent>
      
      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button 
          onClick={onViewDetails}
          variant="ghost"
          className="text-green-500 font-medium flex items-center hover:text-white hover:bg-green-500/10 text-sm sm:text-base"
        >
          Detayları Gör
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

interface ProjectDetailsDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDetailsDialog = ({ project, open, onOpenChange }: ProjectDetailsDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px] bg-secondary border-gray-700 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-white">{project.title}</DialogTitle>
          <DialogDescription className="text-green-500">{project.category}</DialogDescription>
        </DialogHeader>

        <div className="h-48 sm:h-60 bg-gray-900 mb-4 sm:mb-6 overflow-hidden rounded-md">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <p className="text-gray-300 text-sm sm:text-base">{project.details.longDescription}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="text-sm font-semibold text-green-500">Müşteri</h4>
              <p className="text-gray-300 text-sm sm:text-base">{project.details.client}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-green-500">Yıl</h4>
              <p className="text-gray-300 text-sm sm:text-base">{project.details.year}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-green-500 mb-2">Teknolojiler</h4>
            <div className="flex flex-wrap gap-2">
              {project.details.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs bg-gray-800 text-gray-300 py-1 px-2 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-4">
            <a 
              href={project.details.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 hover:underline flex items-center text-sm sm:text-base"
            >
              Projeyi Görüntüle
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Portfolio;
