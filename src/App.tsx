import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Placement from "./pages/Placement";
import Enrollment from "./pages/Enrollment";
import CourseDetails from "./pages/CourseDetails";
import CoursesPage from "./pages/CoursesPage";
import EnquiryModal from "./components/EnquiryModal";
import useFirstVisit from "./hooks/useFirstVisit";
import FloatingEnquiry from "./components/FloatingEnquiry";
import WhatsAppFloating from "./components/WhatsAppFloating";

const queryClient = new QueryClient();

const App = () => {
  const { show, close } = useFirstVisit();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* First-time Enquiry Modal */}
          <EnquiryModal open={show} onClose={close} />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:courseTitle" element={<CourseDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      <FloatingEnquiry />
      <WhatsAppFloating />
    </QueryClientProvider>
  );
};

export default App;
