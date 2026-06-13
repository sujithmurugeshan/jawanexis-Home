import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FloatingChatButton from "../components/FloatingChatButton.jsx";
import { API_BASE_URL } from "../config";

// Custom SVG component representing the green triangle dots in the background
function DecorativeTriangles({ className }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      className={`text-[#19d950] ${className}`}
      aria-hidden="true"
    >
      <polygon points="12,18 17,26 7,26" fill="currentColor" />
      <polygon points="34,12 39,20 29,20" fill="currentColor" />
      <polygon points="56,22 61,30 51,30" fill="currentColor" />
      <polygon points="22,42 27,50 17,50" fill="currentColor" />
      <polygon points="45,48 50,56 40,56" fill="currentColor" />
      <polygon points="68,36 73,44 63,44" fill="currentColor" />
      <polygon points="18,72 23,80 13,80" fill="currentColor" />
      <polygon points="39,66 44,74 34,74" fill="currentColor" />
      <polygon points="62,78 67,86 57,86" fill="currentColor" />
      <polygon points="84,62 89,70 79,70" fill="currentColor" />
      <polygon points="96,38 101,46 91,46" fill="currentColor" />
      <polygon points="102,14 107,22 97,22" fill="currentColor" />
      <polygon points="80,24 85,32 75,32" fill="currentColor" />
      <polygon points="100,70 105,78 95,78" fill="currentColor" />
    </svg>
  );
}

function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow digits only
    setFormData((prev) => ({ ...prev, phone: value }));
    if (errors[phone]) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail id is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setLoading(true);

    if (validateForm()) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.detail || "Failed to send message");
        }

        setIsSubmitted(true);
        // Reset form after a brief period
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
          });
        }, 5000);
      } catch (err) {
        setServerError(err.message);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col text-guvi-ink relative overflow-hidden">
      {/* Decorative background elements */}
      <DecorativeTriangles className="absolute top-10 left-10 opacity-30 pointer-events-none hidden md:block" />
      <DecorativeTriangles className="absolute bottom-20 left-6 opacity-30 pointer-events-none hidden md:block" />

      <Header />

      <main className="flex-grow shell max-w-[1140px] px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Contact Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-[36px] md:text-[44px] font-extrabold text-[#0f172a] leading-tight">
                Contact Us
              </h1>
              <p className="mt-4 text-[16px] md:text-[17px] font-medium leading-relaxed text-guvi-muted">
                Let us know your queries, feedbacks and enquiries. We are here to support you 24/7.
              </p>
            </div>

            <div className="border-t border-gray-200 my-6" />

            <div className="space-y-8">
              {/* Phone item */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#005c45]">
                  <Phone size={22} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[14px] font-bold text-gray-400">Give us a call</span>
                  <a
                    href="tel:+919790631286"
                    className="block mt-1 text-[18px] font-extrabold text-[#0f172a] hover:text-guvi-green transition-colors"
                  >
                    +91 9790631286
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200" />

              {/* Email item */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#005c45]">
                  <Mail size={22} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[14px] font-bold text-gray-400">Write to us</span>
                  <a
                    href="mailto:hr@jawaedtech.com"
                    className="block mt-1 text-[18px] font-extrabold text-[#0f172a] hover:text-guvi-green transition-colors"
                  >
                    hr@jawaedtech.com
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200" />

              {/* Location item */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#005c45]">
                  <MapPin size={22} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[14px] font-bold text-gray-400">Visit us @</span>
                  <p className="mt-1 text-[16px] font-extrabold text-[#0f172a] leading-snug">
                    Jawa Incubation Centre
                  </p>
                  <p className="mt-1 text-[15px] font-medium text-slate-500 leading-relaxed max-w-[420px]">
                    No: 54 Bharathi Park 7th Cross, Near ICICI Bank, Saibaba Colony, Coimbatore, Tamil Nadu 641043, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl shadow-[0_12px_45px_rgba(0,0,0,0.06)] p-8 border border-slate-100 relative overflow-hidden">
            {/* Triangular dots vector graphic in top-right */}
            <DecorativeTriangles className="absolute -top-6 -right-6 opacity-35 scale-75 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-[#0f172a]">
                Say <span className="text-[#00a852]">Hello !</span>
              </h2>
              <p className="text-sm text-gray-500 mt-1 font-semibold">
                Feel free to stop by and say hi !
              </p>

              {serverError && <div className="mt-4 p-3 bg-red-50 text-red-600 font-semibold rounded-md border border-red-200 text-sm">{serverError}</div>}

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="text-[#00a852] mb-4 animate-bounce" size={60} />
                  <h3 className="text-2xl font-extrabold text-[#005c45] mb-2">Message Sent!</h3>
                  <p className="text-gray-700 font-medium max-w-[280px]">
                    Thank you for contacting us. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-bold text-gray-600 mb-1">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-guvi-green ${
                        errors.name ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Enter your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-bold text-gray-600 mb-1">
                      E-mail id *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-guvi-green ${
                        errors.email ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.email}</p>}
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-bold text-gray-600 mb-1">
                      Contact Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`w-full px-3.5 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-guvi-green ${
                        errors.phone ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.phone}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-bold text-gray-600 mb-1">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-guvi-green ${
                        errors.subject ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Enter the subject"
                    />
                    {errors.subject && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-bold text-gray-600 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-guvi-green resize-none ${
                        errors.message ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Enter your message"
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.message}</p>}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 btn-glossy-green font-extrabold text-[16px] rounded-lg mt-6 flex items-center justify-center cursor-pointer disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingChatButton />
    </div>
  );
}

export default ContactPage;
