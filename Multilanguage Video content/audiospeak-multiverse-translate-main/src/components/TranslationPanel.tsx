import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress'; 
import { 
  Copy, 
  Check, 
  Clock, 
  Download,
  RefreshCw,
  Volume2,
  Languages
} from 'lucide-react';
import { toast } from 'sonner';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getLanguagesList } from '@/utils/mediaUtils';

interface TranslationPanelProps {
  translatedText: string;
  isLoading: boolean;
  onLanguageChange: (language: string) => void;
  onRefreshTranslation: () => void;
  selectedLanguage: string;
}

const TranslationPanel: React.FC<TranslationPanelProps> = ({
  translatedText,
  isLoading,
  onLanguageChange,
  onRefreshTranslation,
  selectedLanguage
}) => {
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const languages = getLanguagesList();

  // Update progress bar when loading - with accelerated timing
  React.useEffect(() => {
    if (isLoading) {
      // Reset progress when translation starts
      setProgress(0);
      
      // Accelerated progress simulation - 3x faster than before
      const interval = setInterval(() => {
        setProgress(prev => {
          // Keep progress at 95% until translation is complete
          // Changed from 90% to 95% for faster perceived completion
          if (prev >= 95) {
            return 95;
          }
          // Increased step size from 10 to 25 for faster progress
          return prev + 25;
        });
      }, 100); // Decreased interval from 300ms to 100ms
      
      return () => {
        clearInterval(interval);
        // Set to 100% when translation is complete
        setProgress(100);
      };
    }
  }, [isLoading]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadTranslation = () => {
    const element = document.createElement('a');
    const file = new Blob([translatedText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    
    // Find the language name from the code
    const language = languages.find(lang => lang.code === selectedLanguage)?.name || selectedLanguage;
    
    element.download = `translation-${language}-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Translation downloaded successfully');
  };

  const speakTranslation = () => {
    if ('speechSynthesis' in window) {
      // Find language that matches or is close to the selected language
      const speech = new SpeechSynthesisUtterance(translatedText);
      speech.lang = selectedLanguage;
      window.speechSynthesis.speak(speech);
      toast.success('Playing translation audio');
    } else {
      toast.error('Text-to-speech not supported in your browser');
    }
  };

  const initiateTranslation = () => {
    const langName = languages.find(lang => lang.code === selectedLanguage)?.name || selectedLanguage;
    toast.info(`Fast translating to ${langName}`, { duration: 2000 });
    onRefreshTranslation();
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Translated Content</CardTitle>
        <div className="flex items-center space-x-2">
          <Select 
            value={selectedLanguage} 
            onValueChange={onLanguageChange}
            disabled={isLoading}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language.code} value={language.code}>
                  {language.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Badge variant="outline" className="bg-translator-light text-translator-dark">
            {isLoading ? (
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>Fast Translating</span>
              </div>
            ) : translatedText ? (
              'Translated'
            ) : (
              'Ready'
            )}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <div className="w-full mb-2">
              <div className="flex justify-between mb-1 text-sm">
                <span>Fast translation in progress...</span>
                <span>{Math.min(progress, 100)}%</span>
              </div>
              <Progress value={progress} className="w-full h-2" />
            </div>
            <div className="audio-wave">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="h-8"></span>
              ))}
            </div>
            <p className="text-sm text-gray-500">Fast translating to {languages.find(lang => lang.code === selectedLanguage)?.name}</p>
          </div>
        ) : (
          <>
            <Textarea
              value={translatedText}
              readOnly
              className="min-h-[200px] resize-none"
              placeholder="Your translation will appear here..."
            />
            
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                {!isLoading && (
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-translator-primary hover:bg-translator-secondary"
                    onClick={initiateTranslation}
                    disabled={isLoading}
                  >
                    <Languages size={16} className="mr-2" />
                    Fast Translate
                  </Button>
                )}
                
                {translatedText && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={speakTranslation}
                    disabled={!translatedText}
                  >
                    <Volume2 size={16} className="mr-2" />
                    Speak
                  </Button>
                )}
              </div>
              
              {translatedText && (
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={downloadTranslation}
                  >
                    <Download size={16} className="mr-2" />
                    Download
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={copyToClipboard}
                  >
                    {copied ? (
                      <>
                        <Check size={16} className="mr-2" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TranslationPanel;
