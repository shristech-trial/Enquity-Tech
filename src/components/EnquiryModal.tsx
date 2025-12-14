import { useState, useEffect } from "react";
import { X } from "lucide-react";

type EnquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function EnquiryModal({ open, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    mode: "",
    message: "",
  });

  if (!open) return null;

  const submitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919112029611"; // 🔴 REPLACE WITH YOUR NUMBER

    const text = `
📌 *New Course Enquiry*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}

📚 *Course:* ${formData.course}
🖥️ *Preferred Mode:* ${formData.mode}

📝 *Message:*
${formData.message || "N/A"}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg bg-slate-900 text-white rounded-xl p-8 border border-slate-800 transform scale-90 opacity-0 animate-modalOpen">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-2">Enquiry Form</h2>
        <p className="text-gray-400 mb-6">
          Get course details, fees & batch info
        </p>

        <form onSubmit={submitEnquiry} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
          />

          {/* Course */}
          <select
            required
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
          >
            <option value="">Select Course</option>
            <option>AWS Cloud Computing</option>
            <option>Salesforce CRM</option>
            <option>Power BI</option>
            <option>Data Analytics</option>
            <option>.NET Full Stack</option>
            <option>Python with Data Science</option>
            <option>Java Full Stack</option>
          </select>

          {/* Mode */}
          <select
            required
            value={formData.mode}
            onChange={(e) =>
              setFormData({ ...formData, mode: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
          >
            <option value="">Preferred Mode</option>
            <option>Online</option>
            <option>Offline</option>
          </select>

          {/* Message */}
          <textarea
            placeholder="Message (optional)"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>

      <style>{`
        @keyframes modalOpen {
          0% { opacity: 0; transform: scale(0.50); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-modalOpen {
          animation: modalOpen 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
