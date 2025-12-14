import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Enrollment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get('course') || 'Course';
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExperienceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError('');

    try {
      // Initialize EmailJS with public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // Send email to admin inbox
      const adminEmailParams = {
        to_email: import.meta.env.VITE_ENROLLMENT_EMAIL,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        course: courseName,
        experience: formData.experience,
        message: `New enrollment submission:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nExperience: ${formData.experience}\nCourse: ${courseName}`,
        reply_to: formData.email,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        adminEmailParams
      );

      // Send confirmation email to user
      const userEmailParams = {
        to_email: formData.email,
        full_name: formData.fullName,
        course: courseName,
        user_name: formData.fullName,
        course_name: courseName,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID,
        userEmailParams
      );

      alert(`Successfully enrolled in ${courseName}! Confirmation email sent to ${formData.email}`);
      navigate('/');
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError('Failed to send enrollment. Please try again or contact support.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-slate-800">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Courses
            </button>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Enrollment Form</h1>
            <p className="text-gray-400 mt-2">Complete your enrollment for {courseName}</p>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Course Information */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400">Enrolling in:</p>
                <p className="text-xl font-semibold text-white mt-1">{courseName}</p>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-200 text-base">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder-gray-500 py-3"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200 text-base">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder-gray-500 py-3"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-200 text-base">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder-gray-500 py-3"
                />
              </div>

              {/* Experience Level */}
              <div className="space-y-2">
                <Label htmlFor="experience" className="text-gray-200 text-base">
                  Experience Level <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.experience} onValueChange={handleExperienceChange}>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white py-3">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="beginner" className="text-white">Beginner</SelectItem>
                    <SelectItem value="intermediate" className="text-white">Intermediate</SelectItem>
                    <SelectItem value="advanced" className="text-white">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                  <p className="text-sm text-red-200">{submitError}</p>
                </div>
              )}

              {/* Form Actions */}
              <div className="flex gap-3 justify-end pt-6 border-t border-slate-800">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/')}
                  className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 px-6 py-3"
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!formData.fullName || !formData.email || !formData.phone || !formData.experience || isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isLoading ? 'Sending...' : 'Complete Enrollment'}
                </Button>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-blue-900/20 border border-blue-800/50 rounded-lg">
            <p className="text-sm text-blue-200">
              <span className="font-semibold">Note:</span> After successful enrollment, you'll receive a confirmation email with your course details and access instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
