import courseAi from "../assets/course-ai.png";
import courseData from "../assets/course-data.png";
import courseGenai from "../assets/course-genai.png";
import courseUiux from "../assets/course-uiux.png";

export const accreditationItems = [
  {
    name: "nasscom",
    mark: "n",
    sub: "",
    style: "text-[#bd1f2d] text-[42px] font-extrabold lowercase",
    markStyle: "bg-[#bd1f2d]"
  },
  {
    name: "NSDC",
    mark: "N",
    sub: "National Skill Development Corporation",
    style: "text-[#2f86c9] text-[21px] font-extrabold",
    markStyle: "bg-[#7ac943]"
  },
  {
    name: "AICTE",
    mark: "A",
    sub: "All India Council for Technical Education",
    style: "text-[#1d4f8f] text-[21px] font-extrabold",
    markStyle: "bg-[#e9a625]"
  },
  {
    name: "SWAYAM Plus",
    mark: "+",
    sub: "",
    style: "text-[#0b73b7] text-[32px] font-extrabold",
    markStyle: "bg-[#0b73b7]"
  },
  {
    name: "ANNA UNIVERSITY",
    mark: "AU",
    sub: "CHENNAI",
    style: "text-[#b82735] text-[19px] font-extrabold",
    markStyle: "bg-[#b82735]"
  },
  {
    name: "IIT KANPUR",
    mark: "IK",
    sub: "Indian Institute of Technology, Kanpur",
    style: "text-[#1f2933] text-[27px] font-extrabold",
    markStyle: "bg-[#6b8175]"
  }
];

export const liveCards = [
  [courseData, "HR Executive Training", "Tamil, English"],
  [courseGenai, "HR Recruitment Training", "Tamil, English"],
  [courseAi, "Full Stack Development", "Tamil, English"],
  [courseUiux, "Software Quality Testing(QA Testing)", "Tamil, English"],
  [courseData, "Data Structure And Algorithms(DSA)", "Tamil, English"]
];

export const courseCards = [
  ["Training", "HR Executive Training", "Tamil, English", "Career Track"],
  ["Training", "HR Recruitment Training", "Tamil, English", "Career Track"],
  ["Training", "Full Stack Development", "Tamil, English", "Career Track"],
  ["Training", "Software Quality Testing(QA Testing)", "Tamil, English", "Career Track"],
  ["Training", "Data Structure And Algorithms(DSA)", "Tamil, English", "Career Track"]
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses-page" },
  { label: "Internship", href: "#internship" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact-us" }
];

export const languages = ["Tamil", "English"];

export const learnerCards = [
  ["Padmaja Kothapalli", "Front-End Developer", "ReactJS", "Automation Testing Engineer"],
  ["B Swathy", "UI/UX Designer", "Figma", "UX Designer"],
  ["Vignesh G", "Java Developer", "Java, SQL", "Software Developer"],
  ["Ramapriya Prasathe", "Automation Tester", "Selenium", "QA Engineer"]
];

export const companyLogos = [
  "infosys",
  "TCS",
  "Wipro",
  "amazon",
  "SIEMENS",
  "accenture",
  "cognizant",
  "PayPal",
  "HCL",
  "IBM",
  "Zoho",
  "Juspay",
  "Tech Mahindra",
  "Freshworks",
  "Capgemini",
  "Virtusa"
];

export const learningCourses = [
  ["Human Resources", "HR Executive Training", "Training", courseUiux],
  ["Human Resources", "HR Recruitment Training", "Training", courseData],
  ["Development", "Full Stack Development", "Training", courseGenai],
  ["Quality Assurance", "Software Quality Testing(QA Testing)", "Training", courseAi],
  ["Programming", "Data Structure And Algorithms(DSA)", "Training", courseData]
];

export const practiceTabs = ["CodeKata", "WebKata", "SQLKata", "FixTheCode", "IDE", "Rewards", "Referral", "Forum"];

export const footerColumns = [
  ["Courses", "HR Executive Training", "HR Recruitment Training", "Full Stack Development", "Software Quality Testing(QA Testing)", "Data Structure And Algorithms(DSA)"],
  ["Popular Courses", "HR Executive Training", "HR Recruitment Training", "Full Stack Development", "QA Testing", "DSA"],
  ["Training", "HR Executive Training", "HR Recruitment Training", "Full Stack Development", "QA Testing", "DSA"],
  ["Products", "Placement Preparation", "HCL GUVI for Corporates"],
  ["Resources", "Blog", "Forum", "Rewards"],
  ["Company", "Refund Policy", "Contact Us", "About Us", "Privacy Policy"]
];
