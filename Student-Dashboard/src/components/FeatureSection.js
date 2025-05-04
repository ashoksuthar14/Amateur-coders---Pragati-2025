import { useTranslation } from 'react-i18next';
import { AcademicCapIcon, UsersIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const features = [
  {
    titleKey: 'Learning Test',
    descKey: 'Take interactive tests to boost your knowledge.',
    icon: AcademicCapIcon,
    iconColor: 'text-primary',
    link: 'https://learn-style-ai-quiz.lovable.app/',
    external: true,
  },
  {
    titleKey: 'Group Management',
    descKey: 'Organize and manage your study groups easily.',
    icon: UsersIcon,
    iconColor: 'text-primary',
    link: '/group-management',
    external: false,
  },
  {
    titleKey: 'Learning Video',
    descKey: 'Watch educational videos for deeper understanding.',
    icon: VideoCameraIcon,
    iconColor: 'text-primary',
    link: 'https://audiospeak-multiverse-translate.lovable.app/',
    external: true,
  },
];

const FeatureSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
      {features.map(({ titleKey, descKey, icon: Icon, iconColor, link, external }, idx) => (
        external ? (
          <a
            key={titleKey}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl shadow-2xl bg-white p-10 flex flex-col items-center text-center border border-secondary hover:shadow-primary/30 hover:bg-secondary/60 transition-transform transform hover:-translate-y-2 cursor-pointer group"
          >
            <Icon className={`h-16 w-16 mb-6 ${iconColor} group-hover:text-accent transition`} />
            <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition">{t(titleKey)}</h3>
            <p className="text-gray-700 opacity-90">{t(descKey)}</p>
          </a>
        ) : (
          <Link
            key={titleKey}
            to={link}
            className="rounded-3xl shadow-2xl bg-white p-10 flex flex-col items-center text-center border border-secondary hover:shadow-primary/30 hover:bg-secondary/60 transition-transform transform hover:-translate-y-2 cursor-pointer group"
          >
            <Icon className={`h-16 w-16 mb-6 ${iconColor} group-hover:text-accent transition`} />
            <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition">{t(titleKey)}</h3>
            <p className="text-gray-700 opacity-90">{t(descKey)}</p>
          </Link>
        )
      ))}
    </section>
  );
};

export default FeatureSection; 