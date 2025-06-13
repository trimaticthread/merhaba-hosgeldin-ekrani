
import { Card } from "@/components/ui/card";
import { ShieldCheck } from 'lucide-react';
import CodeRain from './CodeRain';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative" >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-50 z-0">
        <CodeRain />
      </div>  
      <div className="container mx-auto relative z-10">
        
        <h2 className="section-title">Hakkımda</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Merhaba, Ben Sina Toprak Güleç!</h3>
            <div className="space-y-4 text-sm sm:text-base">
              <p className="text-gray-300">
                12 yaşından beri teknolojik cihazlarla ilgilenen ve kurcalayan bir üniversite öğrencisiyim. Şu anda 
                Yönetim Bilişim Sistemleri (İngilizce) bölümünde öğrenim görüyorum. Lise hayatımdan beri yazılım ve 
                siber güvenlik konularına ilgi duyuyorum. Bu konuda kendimi geliştirmek için sürekli çıkan teknolojileri
                takip ediyor ve yeni projeler üretmeye çalışıyorum. Kendimi sürekli olarak geliştirmemin dışında 
                aktif sosyal çevresi olan ve sporla ilgilenen bir üniversite öğrencisiyim
              </p>
              <p className="text-gray-300">
                React, TypeScript ve Node.js gibi modern teknolojilerle çalışmayı seviyorum.
                Aynı zamanda siber güvenlik alanında çözümler geliştirmek ve güvenlik açıklarını tespit etmek
                konularında da deneyim sahibiyim.
              </p>
              <p className="text-gray-300">
                Boş zamanlarımda yeni teknolojileri takip etmeyi, fotoğraf çekmeyi ve seyahat
                etmeyi seviyorum.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <StatCard title="1+" description="Yıllık Deneyim" />
            <StatCard title="5+" description="Tamamlanan Proje" />
            <StatCard title="5+" description="Mutlu Müşteri" />
            <StatCard title="5+" description="Teknoloji" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="p-4 sm:p-6 text-center flex flex-col items-center justify-center border border-gray-800 bg-card hover:border-gray-700 transition-all">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 mb-2">{title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm">{description}</p>
    </Card>
  );
};

export default About;
