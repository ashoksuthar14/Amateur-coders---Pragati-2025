import { useTranslation } from 'react-i18next';

const images = [
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1600&q=80',
];

const HeroSection = ({ onStart }) => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Scrolling background images */}
      <div className="absolute inset-0 w-full h-full flex z-0 animate-scroll-x">
        {images.concat(images).map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Learning"
            className="w-full h-full object-cover object-center flex-shrink-0"
            style={{ minWidth: '100vw' }}
          />
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-meta-gradient opacity-80 z-10" />
      {/* Card */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-xl px-6">
        <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-center drop-shadow-lg">
            {t('Welcome to the Student Learning Platform')}
          </h1>
          <button
            onClick={onStart}
            className="mt-4 px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-accent transition text-lg"
          >
            {t("Let's Start")}
          </button>
        </div>
      </div>
      {/* Animation style */}
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-300vw); }
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 