
// Utility functions for media handling

/**
 * Convert a file to base64 encoding
 * @param file The file to convert
 * @returns A promise that resolves to the base64 string
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result as string;
      resolve(base64);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

/**
 * Get a list of Indian languages for translation
 * @returns Array of language objects with code and name
 */
export const getLanguagesList = () => [
  { code: 'hi', name: 'Hindi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'te', name: 'Telugu' },
  { code: 'ta', name: 'Tamil' },
  { code: 'mr', name: 'Marathi' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'or', name: 'Odia' },
  { code: 'as', name: 'Assamese' },
  { code: 'ks', name: 'Kashmiri' },
  { code: 'sd', name: 'Sindhi' },
  { code: 'ur', name: 'Urdu' },
  { code: 'sa', name: 'Sanskrit' }
];

/**
 * Check if a file is an audio or video file
 * @param file The file to check
 * @returns Boolean indicating if file is audio/video
 */
export const isAudioOrVideoFile = (file: File): boolean => {
  const validTypes = [
    'audio/mpeg',
    'audio/mp3',
    'audio/wav',
    'audio/ogg',
    'audio/webm',
    'video/mp4',
    'video/webm',
    'video/quicktime',
    'video/x-msvideo'
  ];
  return validTypes.includes(file.type);
};

/**
 * Check if a file is a valid media file for the application
 * @param file The file to validate
 * @returns Boolean indicating if the file is valid
 */
export const isValidMediaFile = (file: File): boolean => {
  return isAudioOrVideoFile(file);
};

/**
 * Format file size to human-readable format
 * @param bytes Size in bytes
 * @returns Formatted string (e.g., "1.5 MB")
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};
