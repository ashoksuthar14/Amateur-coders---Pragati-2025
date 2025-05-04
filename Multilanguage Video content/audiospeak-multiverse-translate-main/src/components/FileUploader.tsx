
import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload, X, File, FileAudio, FileVideo } from 'lucide-react';
import { toast } from 'sonner';
import { isValidMediaFile, formatFileSize } from '@/utils/mediaUtils';

interface FileUploaderProps {
  onFileSelected: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!isValidMediaFile(file)) {
      toast.error('Invalid file type. Please upload an audio or video file.');
      return;
    }
    
    if (file.size > 50 * 1024 * 1024) {
      toast.error('File size exceeds 50MB limit.');
      return;
    }
    
    setSelectedFile(file);
    simulateUploadProgress();
    onFileSelected(file);
  };

  const simulateUploadProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          toast.success('File uploaded successfully!');
          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getFileIcon = () => {
    if (!selectedFile) return <File size={48} />;
    
    if (selectedFile.type.includes('audio')) {
      return <FileAudio size={48} className="text-translator-primary" />;
    } else if (selectedFile.type.includes('video')) {
      return <FileVideo size={48} className="text-translator-primary" />;
    }
    
    return <File size={48} className="text-translator-primary" />;
  };

  return (
    <div className="w-full">
      <div
        className={`file-drop-area ${isDragging ? 'drag-active' : ''} ${
          selectedFile ? 'border-translator-primary' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="audio/*,video/*"
          onChange={handleFileInputChange}
        />

        {!selectedFile ? (
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm font-medium">
              Drag and drop your audio or video file here
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Supports MP3, WAV, MP4, WEBM files up to 50MB
            </p>
            <Button
              onClick={handleBrowseClick}
              variant="outline"
              className="mt-4 bg-gradient-to-r from-translator-primary to-translator-secondary text-white hover:opacity-90 transition-opacity"
            >
              Browse Files
            </Button>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getFileIcon()}
                <div>
                  <p className="font-medium text-sm truncate max-w-[200px]">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(selectedFile.size)}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSelectedFile}
                className="h-8 w-8 p-0"
              >
                <X size={16} />
              </Button>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
