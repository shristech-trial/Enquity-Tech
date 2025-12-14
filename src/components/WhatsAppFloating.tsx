import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/919112029611" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300"
    >
      <img src="../assets/WhatsappIcon" className="w-8 h-8" />
    </a>
  );
}
