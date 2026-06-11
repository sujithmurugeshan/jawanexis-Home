import courseAi from "../assets/course-ai.png";
import courseData from "../assets/course-data.png";
import courseGenai from "../assets/course-genai.png";
import courseUiux from "../assets/course-uiux.png";
import awardPlaceholder from "../assets/hero-learning.png";
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
import anbuPhoto from "../assets/learner-journey/anbu-r.jpg";
import brahadeeshPhoto from "../assets/learner-journey/brahadeesh-kalyan.jpg";
import dhanasekarPhoto from "../assets/learner-journey/dhanasekar-selvam.jpg";
import guganPhoto from "../assets/learner-journey/gugan.jpg";
import hariharasudhanPhoto from "../assets/learner-journey/hariharasudhan-sudhagar.jpg";
import harikrishnanPhoto from "../assets/learner-journey/harikrishnan-dhanasekaran.jpg";
import mohanPhoto from "../assets/learner-journey/mohan-prasad.jpg";
import mohammedPhoto from "../assets/learner-journey/mohammed-hashid.jpg";
import nithyasreePhoto from "../assets/learner-journey/nithyasree.jpg";
import parthibanPhoto from "../assets/learner-journey/parthiban-sundararaju.jpg";
import shanmugamPhoto from "../assets/learner-journey/shanmugam-gopal.jpg";
import achievement1 from "../assets/achievements/achievement-1.jpeg";
import achievement2 from "../assets/achievements/achievement-2.jpeg";
import achievement3 from "../assets/achievements/achievement-3.jpeg";
import achievement4 from "../assets/achievements/achievement-4.jpeg";
import achievement5 from "../assets/achievements/achievement-5.jpeg";
import achievement6 from "../assets/achievements/achievement-6.jpeg";

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

export const studentCompanyRows = [
  [
    { name: "Siemens", color: "#009999" },
    { name: "Aspire Systems", color: "#6a3ea1" },
    { name: "Ideas2IT", color: "#1f4e79" },
    { name: "Cartoon Mango", color: "#1d1d1f" },
    { name: "Larsen & Toubro", color: "#1675bc" },
    { name: "Lenovo", color: "#e2231a" },
    { name: "Justdial", color: "#1b75bb" },
    { name: "Thoughtworks", color: "#00a88e" },
    { name: "Amazon", color: "#232f3e" },
    ...accreditationItems.slice(0, 3)
  ],
  [
    { name: "TCS", color: "#e91e63" },
    { name: "Wipro", color: "#6f2dbd" },
    { name: "Accenture", color: "#a100ff" },
    { name: "CaratLane", color: "#7b3fb2" },
    { name: "Comcast", color: "#52565a" },
    { name: "Klenty", color: "#8a8fb9" },
    { name: "Zoho", color: "#0a7f3f" },
    { name: "Virtusa", color: "#3d348b" },
    ...accreditationItems.slice(3, 6)
  ],
  [
    { name: "IBM", color: "#0f62fe" },
    { name: "JLL", color: "#e31b23" },
    { name: "Fiserv", color: "#f36f21" },
    { name: "Tech Mahindra", color: "#d71920" },
    { name: "Grappus", color: "#111111" },
    { name: "Cognizant", color: "#0033a0" },
    { name: "PayPal", color: "#003087" },
    { name: "Capgemini", color: "#00a3e0" },
    { name: "HCL", color: "#0067b1" },
    ...accreditationItems.slice(6)
  ]
];

export const liveCards = [
  [courseData, "HR Executive Training", "Tamil, English"],
  [courseGenai, "HR Recruitment Training", "Tamil, English"],
  [courseAi, "Full Stack Development", "Tamil, English"],
  [courseUiux, "Software Quality Testing(QA Testing)", "Tamil, English"],
  [courseData, "DSA", "Tamil, English"]
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses-page" },
  { label: "Internship", href: "#internship" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact" }
];

export const journeyLearners = [
  {
    name: "Brahadeesh Kalyan",
    role: "HR Executive",
    company: "Muthu Group Companies",
    location: "Coimbatore",
    photo: brahadeeshPhoto
  },
  {
    name: "Parthiban Sundararaju",
    role: "HR Executive",
    company: "Tata Consultancy Services",
    location: "Kochi",
    photo: parthibanPhoto
  },
  {
    name: "Anbu R",
    role: "HR Executive",
    company: "TVS Motor Company",
    location: "Chennai",
    photo: anbuPhoto
  },
  {
    name: "Mohan Prasad",
    role: "Senior Associate HR Operations",
    company: "Russell Tobin",
    location: "New York",
    photo: mohanPhoto
  },
  {
    name: "Hariharasudhan Sudhagar",
    role: "Full Stack Developer",
    company: "Laxhari Infotech",
    location: "",
    photo: hariharasudhanPhoto
  },
  {
    name: "Mohammed Hashid",
    role: "Full Stack Developer",
    company: "AES Technologies",
    location: "",
    photo: mohammedPhoto
  },
  {
    name: "Shanmugam Gopal",
    role: "Senior Developer",
    company: "Fresa Technologies",
    location: "",
    photo: shanmugamPhoto
  },
  {
    name: "Dhanasekar Selvam",
    role: "Full Stack Developer",
    company: "Prevaj",
    location: "",
    photo: dhanasekarPhoto
  },
  {
    name: "Gugan",
    role: "Senior Mulesoft Developer",
    company: "Mulecraft Digital",
    location: "Salem",
    photo: guganPhoto
  },
  {
    name: "HariKrishnan Dhanasekaran",
    role: "Full Stack Developer",
    company: "Mulecraft Digital",
    location: "",
    photo: harikrishnanPhoto
  },
  {
    name: "Nithyasree",
    role: "HR-IT Recruiter",
    company: "Career Net",
    location: "Coimbatore",
    photo: nithyasreePhoto
  }
];

export const learnerCards = [
  [
    "Shamugavel",
    "TVS",
    "HR Executive Course",
    "I successfully completed the HR Executive Course at Jawanexis, and it was a wonderful learning experience. The trainers explained every HR concept clearly and provided practical knowledge of recruitment, onboarding, and HR operations. This course helped me build confidence and prepare for a career in Human Resources."
  ],
  [
    "Anbu",
    "TVS",
    "HR Training",
    "My experience at Jawanexis was excellent. The HR training program was well-structured and included practical sessions that helped me understand real-world HR processes. The support and guidance from the trainers made learning easy and effective."
  ],
  [
    "Nivetha",
    "Sharp",
    "HR Training",
    "I am glad I chose Jawanexis for my HR training. The course covered all the important HR functions, and the hands-on approach helped me gain valuable industry knowledge. It was a great step toward achieving my career goals."
  ],
  [
    "Balaji",
    "Hastgags",
    "HR Course",
    "The HR course at Jawanexis exceeded my expectations. The trainers were knowledgeable and always ready to clarify doubts. I gained practical skills in recruitment and employee management, which increased my confidence for job opportunities."
  ],
  [
    "Akshaya",
    "Freshworks",
    "HR Executive Course",
    "Completing the HR Executive Course at Jawanexis was a rewarding experience. The training sessions were interactive and informative, helping me understand HR concepts in a simple way. I feel more prepared to start my professional journey in HR."
  ],
  [
    "Gokulram",
    "V Support Solutions",
    "HR Training",
    "I had a great experience learning at Jawanexis. The HR training program gave me valuable insights into recruitment, onboarding, and employee engagement. The trainers were supportive throughout the course and encouraged continuous learning."
  ],
  [
    "Gurunath",
    "Payoda Technologies",
    "HR Training",
    "Jawanexis provided an excellent learning environment for HR aspirants. The course content was relevant to industry requirements, and the practical training helped me develop the skills needed to work in an HR role successfully."
  ],
  [
    "Varshini",
    "Ahker",
    "HR Course",
    "The HR course at Jawanexis helped me gain both theoretical and practical knowledge. The real-time examples and assignments improved my understanding of HR processes and prepared me for workplace challenges. I highly recommend this course to aspiring HR professionals."
  ],
  [
    "Prakash",
    "Reqroots",
    "HR Training",
    "I am thankful to Jawanexis for providing quality HR training and career guidance. The course enhanced my professional skills and gave me a better understanding of HR practices. It was a valuable learning experience that will help me in my future career."
  ],
  [
    "Tamzhil Arasan",
    "Athen Technology Solutions",
    "Full Stack Development Course",
    "I successfully completed the Full Stack Development Course at Jawanexis, and it was an excellent learning experience. The trainers taught both front-end and back-end technologies in a simple and practical way. Working on real-time projects helped me improve my coding skills and gain confidence in web development."
  ]
];

export const awardSlides = [
  {
    title: "Best GenAI Training Partner",
    description: "Jawanexis recognized as the Best GenAI Training Partner by UBS Forums.",
    image: awardPlaceholder
  },
  {
    title: "Industry Ready Training",
    description: "Recognized for practical, career-focused learning programs that help students prepare for real workplace roles.",
    image: awardPlaceholder
  },
  {
    title: "Student Success Recognition",
    description: "Celebrating student achievements across HR, full stack development, quality testing, and career training programs.",
    image: awardPlaceholder
  }
];

export const learningCourses = [
  ["Human Resources", "HR Executive Training", "Paid", courseUiux],
  ["Human Resources", "HR Recruitment Training", "Paid", courseData],
  ["Development", "Full Stack Development", "Paid", courseGenai],
  ["Quality Assurance", "Software Quality Testing(QA Testing)", "Paid", courseAi],
  ["Programming", "DSA", "Paid", courseData]
];

export const achievementPhotos = [
  { id: 1, src: achievement1, alt: "Achievement 1" },
  { id: 2, src: achievement2, alt: "Achievement 2" },
  { id: 3, src: achievement3, alt: "Achievement 3" },
  { id: 4, src: achievement4, alt: "Achievement 4" },
  { id: 5, src: achievement5, alt: "Achievement 5" },
  { id: 6, src: achievement6, alt: "Achievement 6" }
];

export const footerColumns = [
  ["Courses", "HR Executive Training", "HR Recruitment Training", "Full Stack Development", "Software Quality Testing(QA Testing)", "DSA"],
  ["Popular Courses", "HR Executive Training", "HR Recruitment Training", "Full Stack Development", "QA Testing", "DSA"],
  ["Paid Courses", "HR Executive Training", "HR Recruitment Training", "Full Stack Development", "QA Testing", "DSA"],
  ["Products", "Placement Preparation", "Jawanexis for Corporates"],
  ["Resources", "Blog", "Forum", "Rewards"],
  ["Company", "Refund Policy", "Contact Us", "About Us", "Privacy Policy"]
];
