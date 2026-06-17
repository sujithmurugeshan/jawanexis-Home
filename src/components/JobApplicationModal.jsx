import { useState } from "react";
import { X } from "lucide-react";
import { API_BASE_URL } from "../config";

function JobApplicationModal({ isOpen, onClose, jobTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    graduationYear: "",
    language: ""
  });
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) {
      setErrorMessage("Please upload your resume.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const data = new FormData();
      data.append("jobTitle", jobTitle);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("education", formData.education);
      data.append("graduationYear", formData.graduationYear);
      data.append("language", formData.language);
      data.append("resume", resume);

      const res = await fetch(`${API_BASE_URL}/api/jobs/apply`, {
        method: "POST",
        body: data,
      });

      const responseData = await res.json();
      if (!res.ok) throw new Error(responseData.detail || "Failed to submit application");

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-[20px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors z-10"
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        {status === "success" ? (
          <div className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-[#19d950]/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#19d950]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-guvi-ink mb-2">Thank You for Applying!</h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              Your application for <strong className="text-black">{jobTitle}</strong> has been received successfully. We will review your profile and get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="w-full btn-glossy-green h-12 rounded-xl text-[15px] font-extrabold shadow-lg"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="max-h-[90vh] overflow-y-auto overflow-x-hidden p-6 sm:p-8 custom-scrollbar">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-guvi-ink leading-tight">
                Apply for <br/> <span className="text-guvi-green">{jobTitle}</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-guvi-ink mb-1.5">Name*</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-guvi-line focus:border-guvi-green focus:ring-1 focus:ring-guvi-green outline-none transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-guvi-ink mb-1.5">Email ID*</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-guvi-line focus:border-guvi-green focus:ring-1 focus:ring-guvi-green outline-none transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-guvi-ink mb-1.5">Phone Number*</label>
                <div className="flex gap-2">
                  <select className="h-12 px-3 rounded-xl border border-guvi-line bg-slate-50 font-bold text-guvi-ink outline-none cursor-pointer">
                    <option>IN +91</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 h-12 px-4 rounded-xl border border-guvi-line focus:border-guvi-green focus:ring-1 focus:ring-guvi-green outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-guvi-ink mb-1.5">Education</label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-guvi-line focus:border-guvi-green focus:ring-1 focus:ring-guvi-green outline-none transition-all text-slate-700 font-medium bg-white"
                  >
                    <option value="" disabled>Select</option>
                    <option value="B.E/B.Tech">B.E/B.Tech</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="BCA">BCA</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-guvi-ink mb-1.5">Grad Year</label>
                  <select
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-guvi-line focus:border-guvi-green focus:ring-1 focus:ring-guvi-green outline-none transition-all text-slate-700 font-medium bg-white"
                  >
                    <option value="" disabled>Select</option>
                    {[2020, 2021, 2022, 2023, 2024, 2025, 2026].map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-guvi-ink mb-1.5">Resume* (PDF only)</label>
                <div className="relative border-2 border-dashed border-guvi-line rounded-xl px-4 py-4 text-center hover:bg-slate-50 transition-colors">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {resume ? (
                    <div className="text-sm font-bold text-guvi-green truncate">{resume.name}</div>
                  ) : (
                    <div className="text-sm font-medium text-slate-500">
                      Click to upload or drag and drop
                    </div>
                  )}
                </div>
              </div>

              {errorMessage && (
                <div className="text-red-500 text-sm font-medium text-center bg-red-50 py-2 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full btn-glossy-green h-12 rounded-xl text-[15px] font-extrabold shadow-lg disabled:opacity-70 mt-2"
              >
                {status === "submitting" ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobApplicationModal;
