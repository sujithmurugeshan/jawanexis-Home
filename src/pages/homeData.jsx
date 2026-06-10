import courseAi from "../assets/course-ai.png";
import courseData from "../assets/course-data.png";
import courseGenai from "../assets/course-genai.png";
import courseUiux from "../assets/course-uiux.png";
import abcConsultantsLogo from "../assets/company-logos/abc-consultants.jpg";
import airtableLogo from "../assets/company-logos/airtable.jpg";
import cielLogo from "../assets/company-logos/ciel.jpg";
import codingmartLogo from "../assets/company-logos/codingmart.jpg";
import deelLogo from "../assets/company-logos/deel.jpg";
import notionLogo from "../assets/company-logos/notion.jpg";
import peoplefyLogo from "../assets/company-logos/peoplefy.jpg";
import quickRecruitLogo from "../assets/company-logos/quick-recruit.jpg";
import ripplingLogo from "../assets/company-logos/rippling.jpg";
import teamleaseLogo from "../assets/company-logos/teamlease.jpg";

export const accreditationItems = [
  { name: "TeamLease", logo: teamleaseLogo },
  { name: "ABC Consultants", logo: abcConsultantsLogo },
  { name: "CIEL", logo: cielLogo },
  { name: "Peoplefy", logo: peoplefyLogo },
  { name: "Notion", logo: notionLogo },
  { name: "Airtable", logo: airtableLogo },
  { name: "Rippling", logo: ripplingLogo },
  { name: "Deel", logo: deelLogo },
  { name: "Codingmart", logo: codingmartLogo },
  { name: "Quick Recruit", logo: quickRecruitLogo }
];

export const liveCards = [
  [courseData, "HR Executive Training", "Tamil, English"],
  [courseGenai, "HR Recruitment Training", "Tamil, English"],
  [courseAi, "Full Stack Development", "Tamil, English"],
  [courseUiux, "Software Quality Testing(QA Testing)", "Tamil, English"],
  [courseData, "DSA", "Tamil, English"]
];

export const courseCards = [
  ["Paid", "HR Executive Training", "Tamil, English", "Career Track"],
  ["Paid", "HR Recruitment Training", "Tamil, English", "Career Track"],
  ["Paid", "Full Stack Development", "Tamil, English", "Career Track"],
  ["Paid", "Software Quality Testing(QA Testing)", "Tamil, English", "Career Track"],
  ["Paid", "DSA", "Tamil, English", "Career Track"]
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses-page" },
  { label: "Internship", href: "#internship" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact" }
];

export const languages = ["Tamil", "English"];

export const learnerCards = [
  {
    name: "Vignesh G",
    initials: "VG",
    company: "GNIKUL",
    before: "Fresher, MSc (Arts & Science)",
    after: "Junior Developer"
  },
  {
    name: "Ramapriya Prasathe",
    initials: "RP",
    company: "RebitBee",
    before: "9 years gap after graduation",
    after: "Automation Testing Engineer"
  },
  {
    name: "Penumaka Gopi Kishore",
    initials: "PG",
    company: "Pixis",
    before: "Intern, 2 Years",
    after: "Full Stack Developer"
  },
  {
    name: "Kesavan",
    initials: "K",
    company: "Fipsar",
    before: "Career gap of 7 months",
    after: "Data Scientist"
  }
];

export const companyLogos = accreditationItems;

export const learningCourses = [
  ["Human Resources", "HR Executive Training", "Paid", courseUiux],
  ["Human Resources", "HR Recruitment Training", "Paid", courseData],
  ["Development", "Full Stack Development", "Paid", courseGenai],
  ["Quality Assurance", "Software Quality Testing(QA Testing)", "Paid", courseAi],
  ["Programming", "DSA", "Paid", courseData]
];

export const practiceTabs = ["CodeKata", "WebKata", "SQLKata", "FixTheCode", "IDE", "Rewards", "Referral", "Forum"];

export const footerColumns = [
  ["Courses", "HR Executive Training", "HR Recruitment Training", "Full Stack Development", "Software Quality Testing(QA Testing)", "DSA"],
  ["Popular Courses", "HR Executive Training", "HR Recruitment Training", "Full Stack Development", "QA Testing", "DSA"],
  ["Paid Courses", "HR Executive Training", "HR Recruitment Training", "Full Stack Development", "QA Testing", "DSA"],
  ["Products", "Placement Preparation", "Jawanexis for Corporates"],
  ["Resources", "Blog", "Forum", "Rewards"],
  ["Company", "Refund Policy", "Contact Us", "About Us", "Privacy Policy"]
];
