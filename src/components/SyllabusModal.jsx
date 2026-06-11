import { useEffect, useState } from "react";
import { X, CheckCircle } from "lucide-react";

function SyllabusModal({ isOpen, onClose, courseTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    education: "",
    profile: "",
    graduationYear: "",
    language: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        education: "",
        profile: "",
        graduationYear: "",
        language: ""
      });
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow digits only
    setFormData((prev) => ({
      ...prev,
      phone: value
    }));
    if (errors.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email ID is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!formData.education) {
      newErrors.education = "Educational qualification is required";
    }

    if (!formData.profile) {
      newErrors.profile = "Current profile is required";
    }

    if (!formData.graduationYear) {
      newErrors.graduationYear = "Year of graduation is required";
    }

    if (!formData.language) {
      newErrors.language = "Speaking language is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const triggerDownload = () => {
    const syllabusContent = `===========================================================
JAWA EDTECH - COURSE SYLLABUS
===========================================================
Course: ${courseTitle || "Professional Career Program"}
Generated for: ${formData.name}
Email: ${formData.email}
Phone: ${formData.countryCode} ${formData.phone}
Language Preference: ${formData.language}
===========================================================

MODULE 1: INDUSTRY OVERVIEW & ESSENTIALS (Weeks 1-4)
-----------------------------------------------------------
• Introduction to core paradigms, tools, and workflows
• Industry standard practices and setting up development tools
• Fundamentals of target domain systems and foundations
• Practical assignments & base evaluations

MODULE 2: CORE CURRICULUM & DEPTH (Weeks 5-12)
-----------------------------------------------------------
• Hands-on modules with 5+ major projects
• In-depth analysis of intermediate structures and advanced patterns
• Code quality assessments, optimization, and structure design
• Weekly mentor-guided labs and feedback reviews

MODULE 3: INTEGRATIONS & REAL-WORLD APPLICATIONS (Weeks 13-18)
-----------------------------------------------------------
• Live API integrations and third-party tools
• High-performance testing and test-driven optimization
• Collaborative team capstone project under mentor advice
• Deployment pipelines, automation, and hosting strategies

MODULE 4: PLACEMENT GUIDANCE & PREPARATION (Weeks 19-24)
-----------------------------------------------------------
• Profile and Resume building workshops
• Mock interview drills (technical & behavioral round previews)
• Exclusive job referral pool with 500+ corporate hiring partners
• Placement portal credentials & direct application guidance

Thank you for choosing Jawa EdTech.
For details, visit http://localhost:5173/ or contact us at support@jawaedtech.com
`;

    const blob = new Blob([syllabusContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const cleanCourseName = (courseTitle || "Course").replace(/[^a-zA-Z0-9]/g, "_");
    link.download = `${cleanCourseName}_Syllabus.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      triggerDownload();
      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="relative flex flex-col w-full max-w-[480px] bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#005c45] text-white">
          <h2 className="text-xl font-extrabold tracking-wide">Download Syllabus</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle className="text-guvi-green mb-4 animate-bounce" size={64} />
              <h3 className="text-2xl font-extrabold text-[#005c45] mb-2">Thank you!</h3>
              <p className="text-gray-700 font-medium">
                Your syllabus for <span className="font-bold text-black">{courseTitle}</span> is downloading...
              </p>
              <p className="text-xs text-gray-500 mt-4">This window will close automatically.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="syllabus-name" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Name*
                </label>
                <input
                  id="syllabus-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] ${
                    errors.name ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="syllabus-email" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Email ID*
                </label>
                <input
                  id="syllabus-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] ${
                    errors.email ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="syllabus-phone" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Phone Number*
                </label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="h-10 px-3 border border-gray-300 rounded-md bg-gray-50 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] cursor-pointer appearance-none pr-8"
                    >
                      <option value="+91">IN +91</option>
                      <option value="+1">US +1</option>
                      <option value="+44">UK +44</option>
                      <option value="+971">AE +971</option>
                      <option value="+65">SG +65</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <input
                    id="syllabus-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`flex-1 h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] ${
                      errors.phone ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter phone number"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.phone}</p>}
              </div>

              {/* Educational Qualification */}
              <div>
                <label htmlFor="syllabus-education" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Educational Qualification*
                </label>
                <div className="relative">
                  <select
                    id="syllabus-education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className={`w-full h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${
                      formData.education === "" ? "text-gray-400" : "text-black font-semibold"
                    } ${errors.education ? "border-red-500 focus:ring-red-200" : "border-gray-300"}`}
                  >
                    <option value="" disabled>
                      Education Qualification
                    </option>
                    <option value="10th/12th Pass">10th/12th Pass</option>
                    <option value="Diploma / ITI">Diploma / ITI</option>
                    <option value="Under Graduate (Engineering)">Under Graduate (Engineering)</option>
                    <option value="Under Graduate (Arts/Science/Commerce)">Under Graduate (Arts/Science/Commerce)</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="PhD / Research Scholar">PhD / Research Scholar</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.education && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.education}</p>}
              </div>

              {/* Current Profile */}
              <div>
                <label htmlFor="syllabus-profile" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Current Profile*
                </label>
                <div className="relative">
                  <select
                    id="syllabus-profile"
                    name="profile"
                    value={formData.profile}
                    onChange={handleChange}
                    className={`w-full h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${
                      formData.profile === "" ? "text-gray-400" : "text-black font-semibold"
                    } ${errors.profile ? "border-red-500 focus:ring-red-200" : "border-gray-300"}`}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="College Student (Final Year)">College Student (Final Year)</option>
                    <option value="College Student (1st/2nd/3rd Year)">College Student (1st/2nd/3rd Year)</option>
                    <option value="Working Professional (IT)">Working Professional (IT)</option>
                    <option value="Working Professional (Non-IT)">Working Professional (Non-IT)</option>
                    <option value="Job Seeker / Unemployed">Job Seeker / Unemployed</option>
                    <option value="Freelancer / Self-employed">Freelancer / Self-employed</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.profile && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.profile}</p>}
              </div>

              {/* Year of Graduation */}
              <div>
                <label htmlFor="syllabus-graduation" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Year of Graduation*
                </label>
                <div className="relative">
                  <select
                    id="syllabus-graduation"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className={`w-full h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${
                      formData.graduationYear === "" ? "text-gray-400" : "text-black font-semibold"
                    } ${errors.graduationYear ? "border-red-500 focus:ring-red-200" : "border-gray-300"}`}
                  >
                    <option value="" disabled>
                      Year of Graduation
                    </option>
                    {Array.from({ length: 15 }, (_, i) => {
                      const year = 2029 - i;
                      return (
                        <option key={year} value={year.toString()}>
                          {year}
                        </option>
                      );
                    })}
                    <option value="Before 2015">Before 2015</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.graduationYear && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.graduationYear}</p>}
              </div>

              {/* Speaking Language */}
              <div>
                <label htmlFor="syllabus-language" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Speaking Language*
                </label>
                <div className="relative">
                  <select
                    id="syllabus-language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className={`w-full h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${
                      formData.language === "" ? "text-gray-400" : "text-black font-semibold"
                    } ${errors.language ? "border-red-500 focus:ring-red-200" : "border-gray-300"}`}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Tamil">Tamil</option>
                    <option value="English">English</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.language && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.language}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-12 bg-guvi-green hover:bg-[#12c443] active:bg-[#0fa336] text-white font-extrabold text-[16px] rounded-md transition duration-200 shadow-md mt-6 flex items-center justify-center cursor-pointer"
              >
                Download Syllabus
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default SyllabusModal;
