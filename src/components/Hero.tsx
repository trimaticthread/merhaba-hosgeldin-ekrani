import { useEffect, useState } from 'react';
import { Shield, ShieldCheck, ShieldAlert, ShieldX, ShieldPlus, Monitor, Zap, Lock } from 'lucide-react';
import CodeRain from './CodeRain';
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Yazılım Geliştirici & Siber Güvenlik Çözümleri';
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    const resetTimeout = setTimeout(() => {
      setDisplayText('');
      setCurrentIndex(0);
    }, 3000);
    return () => clearTimeout(resetTimeout);
  }, [currentIndex]);
  return <section id="home" className="relative overflow-hidden min-h-screen flex items-center bg-black text-white px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-60 z-0">
        <CodeRain />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* TEXT SIDE */}
          <div className="text-center lg:text-left">
            <h1 className="font-bold mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Sina Toprak </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-500">Güleç</span>
            </h1>
            <h2 className="text-lg sm:text-xl min-h-[2rem] sm:min-h-[2.5rem] mb-4 sm:mb-6 md:text-2xl">
              {displayText}
              <span className="inline-block w-1 animate-pulse bg-green-500 ml-1">&nbsp;</span>
            </h2>
            <p className="mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-gray-300 text-sm sm:text-base">
              Modern teknolojiler kullanarak web ve mobil uygulamalar geliştiriyorum.
              Kullanıcı odaklı ve estetik arayüzler tasarlamak konusunda uzmanım.
            </p>
            
            {/* Services Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col space-y-3 sm:space-y-4 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Web geliştirme</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base text-left">Entegrasyon ve Otomasyon Sistemleri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Siber Güvenlik Çözümleri</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#" className="px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors text-center">
                CV İndir
              </a>
              <a href="#portfolio" className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition-colors text-center">
                Projelerim
              </a>
            </div>
          </div>
          
          {/* Floating Shield Icons - Hidden on mobile for cleaner look */}
          <div className="hidden lg:block relative">
            <div className="absolute top-1/4 right-10 opacity-20 animate-pulse">
              <Shield size={48} className="text-green-500" />
            </div>
            <div className="absolute bottom-1/4 left-10 opacity-20 animate-pulse">
              <ShieldCheck size={36} className="text-green-500" />
            </div>
            <div className="absolute top-1/2 right-1/3 opacity-20 animate-pulse">
              <ShieldAlert size={24} className="text-green-500" />
            </div>
            <div className="absolute top-1/3 right-1/4 opacity-30 animate-pulse">
              <ShieldX size={50} className="text-green-500" />
            </div>
            <div className="absolute top-2/3 right-1/5 opacity-20 animate-pulse">
              <ShieldPlus size={32} className="text-green-500" />
            </div>
            <div className="absolute top-1/2 left-1/4 opacity-20 animate-pulse">
              <Shield size={24} className="text-green-500" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 opacity-25 animate-pulse">
              <ShieldCheck size={40} className="text-green-500" />
            </div>
            <div className="absolute top-1/4 left-1/3 opacity-15 animate-pulse">
              <ShieldAlert size={28} className="text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;