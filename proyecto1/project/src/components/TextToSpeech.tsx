import { useState } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';

interface TextToSpeechProps {
  title: string;
  subtitle: string;
  content: string;
}

export default function TextToSpeech({ title, subtitle, content }: TextToSpeechProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = () => {
    if (!isPlaying) {
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = `${title}. ${subtitle}. ${content}`;
      utterance.lang = 'es-ES';
      utterance.onend = () => setIsPlaying(false);
      speechSynthesis.speak(utterance);
      setIsPlaying(true);
    } else {
      speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={speak}
        className="absolute right-0 top-0 p-2 text-blue-600 hover:text-blue-800"
        aria-label={isPlaying ? "Detener lectura" : "Comenzar lectura"}
      >
        {isPlaying ? <FaStop size={24} /> : <FaPlay size={24} />}
      </button>
      <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
      <h2 className="text-xl font-semibold text-center mb-4">{subtitle}</h2>
    </div>
  );
}