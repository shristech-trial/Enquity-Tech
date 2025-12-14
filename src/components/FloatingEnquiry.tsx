import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

export default function FloatingEnquiry() {
  const [open, setOpen] = useState(false);
useEffect(() => {
  const stored = localStorage.getItem("enquiryShown");
  const expiry = 1000 * 60 * 1; 

  if (stored) {
    const { time } = JSON.parse(stored);
    if (Date.now() - time > expiry) {
      setOpen(true);
      localStorage.setItem("enquiryShown", JSON.stringify({ time: Date.now() }));
    }
  } else {
    setOpen(true);
    localStorage.setItem("enquiryShown", JSON.stringify({ time: Date.now() }));
  }
}, []);


  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition"
        title="Enquiry"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Enquiry Modal */}
      <EnquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
