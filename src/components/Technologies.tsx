
import { Card } from "@/components/ui/card";
import CodeRain from './CodeRain';

const Technologies = () => {
  const techCategories = [
    {
      id: 1,
      title: "Frontend",
      techs: [
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Figma", icon: "devicon-figma-plain colored" },
      ]
    },
    {
      id: 2,
      title: "Backend",
      techs: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "C#", icon: "devicon-csharp-plain colored" },
        { name: "ASP.NET", icon: "devicon-dot-net-plain colored" },
        { name: "Entity Framework", icon: "devicon-dotnetcore-plain colored" },
      ]
    },
    {
      id: 3,
      title: "Araçlar & Veritabanı",
      techs: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "Visual Studio", icon: "devicon-visualstudio-plain colored" },
        { name: "SQL", icon: "devicon-mysql-plain colored" },
        { name: "MSSQL", icon: "devicon-microsoftsqlserver-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      ]
    },
  ];

  return (
    <section id="technologies" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-50 z-0">
        <CodeRain />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">Teknolojiler</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {techCategories.map((category) => (
            <Card key={category.id} className="p-4 sm:p-6 border border-gray-800 bg-card hover:border-green-500 transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white text-center">{category.title}</h3>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 justify-items-center">
                {category.techs.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center text-center">
                    <div className="tech-icon mb-2 hover:scale-110 transition-transform">
                      <i className={`${tech.icon} text-2xl sm:text-3xl lg:text-4xl`}></i>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-gray-400 text-sm sm:text-base max-w-4xl mx-auto">
            Ayrıca MySQL, PostgreSQL ve MSSQL gibi veritabanı sistemleri ve 
            siber güvenlik alanında penetrasyon testi konularında da deneyime sahibim.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
