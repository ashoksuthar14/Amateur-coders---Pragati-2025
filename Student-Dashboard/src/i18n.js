import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Student Platform': 'Student Platform',
      'Learning Test': 'Learning Test',
      'Group Management': 'Group Management',
      'Learning Video': 'Learning Video',
      'Welcome to the Student Learning Platform': 'Welcome to the Student Learning Platform',
      "Let's Start": "Let's Start",
      'Take interactive tests to boost your knowledge.': 'Take interactive tests to boost your knowledge.',
      'Organize and manage your study groups easily.': 'Organize and manage your study groups easily.',
      'Watch educational videos for deeper understanding.': 'Watch educational videos for deeper understanding.',
    },
  },
  es: {
    translation: {
      'Student Platform': 'Plataforma Estudiantil',
      'Learning Test': 'Prueba de Aprendizaje',
      'Group Management': 'Gestión de Grupos',
      'Learning Video': 'Video de Aprendizaje',
      'Welcome to the Student Learning Platform': 'Bienvenido a la Plataforma Estudiantil',
      "Let's Start": "Comenzar",
      'Take interactive tests to boost your knowledge.': 'Realiza pruebas interactivas para mejorar tu conocimiento.',
      'Organize and manage your study groups easily.': 'Organiza y gestiona tus grupos de estudio fácilmente.',
      'Watch educational videos for deeper understanding.': 'Mira videos educativos para una comprensión más profunda.',
    },
  },
  hi: {
    translation: {
      'Student Platform': 'छात्र मंच',
      'Learning Test': 'परीक्षण',
      'Group Management': 'समूह प्रबंधन',
      'Learning Video': 'शिक्षण वीडियो',
      'Welcome to the Student Learning Platform': 'छात्र मंच में आपका स्वागत है',
      "Let's Start": "शुरू करें",
      'Take interactive tests to boost your knowledge.': 'अपने ज्ञान को बढ़ाने के लिए इंटरैक्टिव परीक्षण लें।',
      'Organize and manage your study groups easily.': 'अपने अध्ययन समूहों को आसानी से व्यवस्थित और प्रबंधित करें।',
      'Watch educational videos for deeper understanding.': 'गहरी समझ के लिए शैक्षिक वीडियो देखें।',
    },
  },
  gu: {
    translation: {
      'Student Platform': 'વિદ્યાર્થી પ્લેટફોર્મ',
      'Learning Test': 'અભ્યાસ પરીક્ષા',
      'Group Management': 'ગ્રુપ મેનેજમેન્ટ',
      'Learning Video': 'અભ્યાસ વિડિઓ',
      'Welcome to the Student Learning Platform': 'વિદ્યાર્થી પ્લેટફોર્મમાં આપનું સ્વાગત છે',
      "Let's Start": "શરૂ કરો",
      'Take interactive tests to boost your knowledge.': 'તમારા જ્ઞાનને વધારવા માટે ઇન્ટરએક્ટિવ પરીક્ષાઓ આપો.',
      'Organize and manage your study groups easily.': 'તમારા અભ્યાસ જૂથોને સરળતાથી વ્યવસ્થિત કરો અને મેનેજ કરો.',
      'Watch educational videos for deeper understanding.': 'વધુ સમજ માટે શૈક્ષણિક વિડિઓઝ જુઓ.',
    },
  },
  mr: {
    translation: {
      'Student Platform': 'विद्यार्थी मंच',
      'Learning Test': 'अभ्यास चाचणी',
      'Group Management': 'गट व्यवस्थापन',
      'Learning Video': 'शैक्षणिक व्हिडिओ',
      'Welcome to the Student Learning Platform': 'विद्यार्थी मंचावर स्वागत आहे',
      "Let's Start": "सुरू करा",
      'Take interactive tests to boost your knowledge.': 'तुमच्या ज्ञानात वाढ करण्यासाठी इंटरॅक्टिव्ह चाचण्या द्या.',
      'Organize and manage your study groups easily.': 'तुमचे अभ्यास गट सहजपणे व्यवस्थापित करा.',
      'Watch educational videos for deeper understanding.': 'अधिक समजण्यासाठी शैक्षणिक व्हिडिओ पहा.',
    },
  },
  te: {
    translation: {
      'Student Platform': 'విద్యార్థి వేదిక',
      'Learning Test': 'పరీక్ష',
      'Group Management': 'గ్రూప్ నిర్వహణ',
      'Learning Video': 'విద్య వీడియో',
      'Welcome to the Student Learning Platform': 'విద్యార్థి వేదికకు స్వాగతం',
      "Let's Start": "ప్రారంభించండి",
      'Take interactive tests to boost your knowledge.': 'మీ జ్ఞానాన్ని పెంచడానికి ఇంటరాక్టివ్ పరీక్షలు ఇవ్వండి.',
      'Organize and manage your study groups easily.': 'మీ అధ్యయన గ్రూపులను సులభంగా నిర్వహించండి.',
      'Watch educational videos for deeper understanding.': 'మరింత అవగాహన కోసం విద్య వీడియోలను చూడండి.',
    },
  },
  ur: {
    translation: {
      'Student Platform': 'طلبہ پلیٹ فارم',
      'Learning Test': 'سیکھنے کا امتحان',
      'Group Management': 'گروپ مینجمنٹ',
      'Learning Video': 'سیکھنے کی ویڈیو',
      'Welcome to the Student Learning Platform': 'طلبہ پلیٹ فارم میں خوش آمدید',
      "Let's Start": "شروع کریں",
      'Take interactive tests to boost your knowledge.': 'اپنی معلومات بڑھانے کے لیے انٹرایکٹو ٹیسٹ دیں۔',
      'Organize and manage your study groups easily.': 'اپنے مطالعہ کے گروپس کو آسانی سے منظم کریں۔',
      'Watch educational videos for deeper understanding.': 'مزید سمجھ کے لیے تعلیمی ویڈیوز دیکھیں۔',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 