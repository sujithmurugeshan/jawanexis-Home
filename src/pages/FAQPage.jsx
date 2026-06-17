import FloatingChatButton from "../components/FloatingChatButton.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const faqs = [
  {
    question: "Who can join JAWA EDTECH courses?",
    answer:
      "Our courses are designed for students, fresh graduates, job seekers, career switchers, and working professionals who want to gain industry-relevant skills and improve their career opportunities."
  },
  {
    question: "What courses do you offer?",
    answer: "We offer HR Executive Course, HR Recruitment Course, Full Stack Development, Software Quality Testing (QA Testing), and Data Structures and Algorithms (DSA)."
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No. Most of our courses are beginner-friendly and start from the fundamentals. Our trainers guide you step-by-step throughout the learning journey."
  },
  {
    question: "Will I receive a certificate after course completion?",
    answer: "Yes. Students who successfully complete the course will receive a course completion certificate from JAWA EDTECH."
  },
  {
    question: "Are the courses practical or theory-based?",
    answer:
      "Our course focuses on practical learning through real-world projects, assignments, case studies, mock interviews, and hands-on exercises to help you become job-ready."
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes. We provide placement support that includes resume building, LinkedIn optimization, interview preparation, mock interviews, and job opportunities through our industry network."
  },
  {
    question: "What is the duration of the courses?",
    answer:
      "The duration varies depending on the course. Most programs are designed to provide comprehensive course within a few weeks to a few months while maintaining flexibility for learners."
  },
  {
    question: "Can final-year students join these courses?",
    answer: "Absolutely. Final-year students can enroll to gain practical skills and improve their chances of securing a job before graduation."
  },
  {
    question: "Are classes conducted online or offline?",
    answer: "We offer flexible learning options based on the program, including online, offline, and hybrid course modes."
  },
  {
    question: "What makes JAWA EDTECH different from other course institutes?",
    answer:
      "JAWA EDTECH focuses on industry-oriented course, hands-on learning, expert mentorship, career guidance, placement support, and real-world project experience to help learners build successful careers."
  },
  {
    question: "Will I work on real-time projects?",
    answer:
      "Yes. Depending on the course, students get exposure to practical assignments, case studies, simulations, and real-world project scenarios."
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "You can contact our team through phone, email, or the website inquiry form. Our counselors will guide you through the enrollment process and help you choose the right course."
  },
  {
    question: "Is the HR Executive Course suitable for freshers?",
    answer:
      "Yes. Our HR Executive Course program is specifically designed for fresh graduates and aspiring HR professionals looking to start a career in Human Resources."
  },
  {
    question: "How can I contact JAWA EDTECH for more information?",
    answer: "Email: hr@jawaedtech.com. Phone: +91 97906 31286."
  }
];

function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-guvi-ink">
      <Header />
      <main>
        <section className="bg-guvi-soft py-16 sm:py-20">
          <div className="shell">
            <div className="mx-auto max-w-[980px] text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-guvi-deepGreen">Support</p>
              <h1 className="mt-3 text-[34px] font-extrabold leading-tight text-black sm:text-[48px]">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto mt-4 max-w-[720px] text-[17px] font-medium leading-8 text-black/60">
                Find quick answers about JAWA EDTECH courses, certificates, projects, placement assistance, and enrollment.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-[980px] gap-4">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group rounded-lg border border-guvi-line bg-white px-5 py-4 shadow-sm sm:px-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[17px] font-extrabold text-black sm:text-[20px]">
                    <span>{`${index + 1}. ${faq.question}`}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-[22px] leading-none text-white transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[850px] text-[16px] font-medium leading-8 text-black/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
}

export default FAQPage;
