
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Clock, Play, Pause } from 'lucide-react';
import { toast } from 'sonner';

interface TranscriptionPanelProps {
  transcribedText: string;
  audioUrl: string | null;
  isLoading: boolean;
}

const TranscriptionPanel: React.FC<TranscriptionPanelProps> = ({
  transcribedText,
  audioUrl,
  isLoading
}) => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcribedText);
    setCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Original Content</CardTitle>
        <Badge variant="outline" className="bg-translator-light text-translator-dark">
          {isLoading ? (
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>Processing</span>
            </div>
          ) : transcribedText ? (
            'Transcribed'
          ) : (
            'Awaiting Audio'
          )}
        </Badge>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <div className="audio-wave">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="h-8"></span>
              ))}
            </div>
            <p className="text-sm text-gray-500">Transcribing your content...</p>
          </div>
        ) : (
          <>
            <Textarea
              value={transcribedText}
              readOnly
              className="min-h-[200px] resize-none"
              placeholder="Your transcription will appear here..."
            />
            
            <div className="flex justify-between items-center mt-4">
              <div>
                {audioUrl && (
                  <>
                    <audio 
                      ref={audioRef} 
                      src={audioUrl} 
                      onEnded={handleAudioEnded}
                      className="hidden" 
                    />
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={togglePlayPause}
                      disabled={!audioUrl}
                      className="mr-2"
                    >
                      {isPlaying ? (
                        <>
                          <Pause size={16} className="mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play size={16} className="mr-2" />
                          Play
                        </>
                      )}
                    </Button>
                  </>
                )}
              </div>
              
              {transcribedText && (
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
                      Copy Text
                    </>
                  )}
                </Button>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TranscriptionPanel;
