import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex space-x-8">
          <span className="text-white font-bold text-xl">{t('Student Platform')}</span>
          <Link to="/" className="text-white hover:text-accent transition">{t('Home')}</Link>
          <a href="https://learn-style-ai-quiz.lovable.app/" className="text-white hover:text-accent transition">{t('Learning Test')}</a>
          <Link to="/group-management" className="text-white hover:text-accent transition">{t('Group Management')}</Link>
          <a href="https://audiospeak-multiverse-translate.lovable.app/" className="text-white hover:text-accent transition">{t('Learning Video')}</a>
        </div>
        <div>
          <select
            onChange={e => changeLanguage(e.target.value)}
            className="rounded px-2 py-1 bg-secondary text-white focus:outline-none"
            value={i18n.language}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="gu">ગુજરાતી</option>
            <option value="mr">मराठी</option>
            <option value="te">తెలుగు</option>
            <option value="ur">اردو</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 