import React, { useState, useEffect } from 'react';
import FileUploader from '@/components/FileUploader';
import TranscriptionPanel from '@/components/TranscriptionPanel';
import TranslationPanel from '@/components/TranslationPanel';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fileToBase64 } from '@/utils/mediaUtils';
import { transcribeAudio, translateText } from '@/services/apiService';
import { Globe, Headphones } from 'lucide-react';

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [transcribedText, setTranscribedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('hi'); // Default to Hindi
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  
  useEffect(() => {
    if (selectedFile) {
      // Process the file when selected
      handleFileSelected(selectedFile);
    }
  }, [selectedFile]);
  
  useEffect(() => {
    // When transcription changes or language changes, translate
    if (transcribedText && selectedLanguage) {
      handleTranslation();
    }
  }, [transcribedText, selectedLanguage]);
  
  const handleFileSelected = async (file: File) => {
    try {
      // Create object URL for audio playback
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      
      // Start transcription
      await handleTranscription(file);
    } catch (error) {
      console.error('Error processing file:', error);
    }
  };
  
  const handleTranscription = async (file: File) => {
    try {
      setIsTranscribing(true);
      // Convert file to base64
      const base64 = await fileToBase64(file);
      
      // Call API to transcribe audio
      const result = await transcribeAudio({ audioUrl: base64 });
      setTranscribedText(result.text);
    } catch (error) {
      console.error('Error during transcription:', error);
    } finally {
      setIsTranscribing(false);
    }
  };
  
  const handleTranslation = async () => {
    try {
      if (!transcribedText) return;
      
      setIsTranslating(true);
      // Call API to translate text
      const result = await translateText({
        text: transcribedText,
        targetLanguage: selectedLanguage
      });
      
      setTranslatedText(result.translatedText);
    } catch (error) {
      console.error('Error during translation:', error);
    } finally {
      setIsTranslating(false);
    }
  };
  
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };
  
  const handleRefreshTranslation = () => {
    handleTranslation();
  };

  return (
    <div className="min-h-screen flex flex-col pb-10">
      {/* Header */}
      <header className="bg-gradient-to-r from-translator-primary to-translator-secondary text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Headphones size={32} />
              <div>
                <h1 className="text-2xl font-bold">Content Converter</h1>
                <p className="text-sm opacity-90">Translate Media Across Languages</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Globe size={20} />
              <span className="text-sm font-medium">Powered by Gemini 2.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-5xl mx-auto">
          <Card className="p-6 mb-8 bg-gradient-radial from-translator-light to-white">
            <h2 className="text-2xl font-bold mb-2 text-gradient">
              Transform Your Media Across Indian Languages
            </h2>
            <p className="text-gray-600 mb-6">
              Upload your audio or video file and get instant transcription and translation in multiple Indian languages.
            </p>
            
            <FileUploader onFileSelected={setSelectedFile} />
          </Card>

          {/* Results Section */}
          {(selectedFile || transcribedText) && (
            <div className="mt-8 space-y-8">
              <Tabs defaultValue="dual" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="dual">Side by Side</TabsTrigger>
                  <TabsTrigger value="original">Original</TabsTrigger>
                  <TabsTrigger value="translated">Translated</TabsTrigger>
                </TabsList>
                
                <TabsContent value="dual" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TranscriptionPanel
                      transcribedText={transcribedText}
                      audioUrl={audioUrl}
                      isLoading={isTranscribing}
                    />
                    <TranslationPanel
                      translatedText={translatedText}
                      isLoading={isTranslating}
                      onLanguageChange={handleLanguageChange}
                      onRefreshTranslation={handleRefreshTranslation}
                      selectedLanguage={selectedLanguage}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="original" className="mt-4">
                  <TranscriptionPanel
                    transcribedText={transcribedText}
                    audioUrl={audioUrl}
                    isLoading={isTranscribing}
                  />
                </TabsContent>
                
                <TabsContent value="translated" className="mt-4">
                  <TranslationPanel
                    translatedText={translatedText}
                    isLoading={isTranslating}
                    onLanguageChange={handleLanguageChange}
                    onRefreshTranslation={handleRefreshTranslation}
                    selectedLanguage={selectedLanguage}
                  />
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Content Converter • Powered by Gemini 2.0 Flash
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
