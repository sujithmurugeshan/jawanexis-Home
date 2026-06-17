import React from "react";
import {
  siJavascript,
  siHtml5,
  siTailwindcss,
  siReact,
  siRedux,
  siMysql,
  siMongodb,
  siNodedotjs,
  siExpress,
  siPostman,
  siMongoose,
  siGithub,
  siGit,
  siCursor,
  siSelenium,
  siJira,
  siApachemaven,
  siJenkins,
  siSwagger,
  siGooglechrome,
  siCplusplus,
  siPython,
  siLeetcode,
  siHackerrank,
  siCodechef,
  siGeeksforgeeks,
  siSqlite,
  siGooglesheets,
  siSap,
  siIndeed,
  siZoho,
  siGooglegemini,
} from "simple-icons";

import css3Logo from "../assets/tool-logos/css3.svg";
import awsLogo from "../assets/tool-logos/aws.svg";
import vscodeLogo from "../assets/tool-logos/vscode.svg";
import testngLogo from "../assets/tool-logos/testng.svg";
import javaLogo from "../assets/tool-logos/java.svg";
import kekaLogo from "../assets/tool_keka.jpg";
import greythrLogo from "../assets/tool_greythr.jpg";
import darwinboxLogo from "../assets/tool_darwinbox.png";
import eightfoldImgLogo from "../assets/tool_eightfold.png";
import eightfoldLogo from "../assets/eightfold-logo.png";
import paradoxLogo from "../assets/paradox-logo.png";
import zohoRecruitLogo from "../assets/tool_zoho_recruit.png";

const DEFAULT_SIZE = 52;

function BrandIcon({ icon, size = DEFAULT_SIZE, className = "" }) {
  if (!icon) return null;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={`object-contain ${className}`}
      aria-label={icon.title}
    >
      <title>{icon.title}</title>
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
}

function ImgLogo({ src, alt, size = DEFAULT_SIZE, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}

const makeBrandLogo = (icon) =>
  function BrandLogo({ size = DEFAULT_SIZE, className = "" }) {
    return <BrandIcon icon={icon} size={size} className={className} />;
  };

const makeImgLogo = (src, alt) =>
  function AssetLogo({ size = DEFAULT_SIZE, className = "" }) {
    return <ImgLogo src={src} alt={alt} size={size} className={className} />;
  };

// ── Full Stack & shared tech logos (Simple Icons) ──
export const JavaScriptLogo = makeBrandLogo(siJavascript);
export const HTMLLogo = makeBrandLogo(siHtml5);
export const CSSLogo = makeImgLogo(css3Logo, "CSS3");
export const TailwindCSSLogo = makeBrandLogo(siTailwindcss);
export const ReactLogo = makeBrandLogo(siReact);
export const ReduxLogo = makeBrandLogo(siRedux);
export const MySQLLogo = makeBrandLogo(siMysql);
export const MongoDBLogo = makeBrandLogo(siMongodb);
export const NodeJsLogo = makeBrandLogo(siNodedotjs);
export const ExpressJsLogo = makeBrandLogo(siExpress);
export const PostmanLogo = makeBrandLogo(siPostman);
export const AWSLogo = makeImgLogo(awsLogo, "Amazon Web Services");
export const VSCodeLogo = makeImgLogo(vscodeLogo, "Visual Studio Code");
export const MongooseLogo = makeBrandLogo(siMongoose);
export const GitHubLogo = makeBrandLogo(siGithub);
export const GitLogo = makeBrandLogo(siGit);
export const CursorAILogo = makeBrandLogo(siCursor);

// ── QA & testing logos ──
export const SeleniumLogo = makeBrandLogo(siSelenium);
export const JiraLogo = makeBrandLogo(siJira);
export const TestNGLogo = makeImgLogo(testngLogo, "TestNG");
export const MavenLogo = makeBrandLogo(siApachemaven);
export const SQLLogo = makeBrandLogo(siSqlite);
export const JenkinsLogo = makeBrandLogo(siJenkins);
export const DevToolsLogo = makeBrandLogo(siGooglechrome);
export const SwaggerLogo = makeBrandLogo(siSwagger);

// ── DSA & coding platform logos ──
export const CPlusPlusLogo = makeBrandLogo(siCplusplus);
export const JavaLogo = makeImgLogo(javaLogo, "Java");
export const PythonLogo = makeBrandLogo(siPython);
export const LeetCodeLogo = makeBrandLogo(siLeetcode);
export const HackerRankLogo = makeBrandLogo(siHackerrank);
export const CodeChefLogo = makeBrandLogo(siCodechef);
export const GeeksforGeeksLogo = makeBrandLogo(siGeeksforgeeks);

// ── HR & business tool logos (official brand assets) ──
export const KekaToolLogo = makeImgLogo(kekaLogo, "Keka");
export const GreytHRToolLogo = makeImgLogo(greythrLogo, "greytHR");
export const DarwinboxToolLogo = makeImgLogo(darwinboxLogo, "Darwinbox");
export const EightfoldImgLogo = makeImgLogo(eightfoldImgLogo, "Eightfold.ai");
export const ZohoRecruitToolLogo = makeImgLogo(zohoRecruitLogo, "Zoho Recruit");

// ── Additional logos used elsewhere in the app ──
export const GoogleSheetsLogo = makeBrandLogo(siGooglesheets);
export const HRMSLogo = () => (
  <BrandIcon
    icon={{ title: "HRMS", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z", hex: "6366F1" }}
  />
);
export const ZohoLogo = makeBrandLogo(siZoho);
export const SapLogo = makeBrandLogo(siSap);
export const PayrollLogo = HRMSLogo;
export const OfficeLogo = ZohoLogo;
export const PowerBiLogo = () => (
  <svg role="img" viewBox="0 0 24 24" width={DEFAULT_SIZE} height={DEFAULT_SIZE} className="object-contain" aria-label="Power BI">
    <title>Power BI</title>
    <rect x="3" y="10" width="4" height="11" rx="1" fill="#F2C811"/>
    <rect x="9" y="6" width="4" height="15" rx="1" fill="#F2C811"/>
    <rect x="15" y="2" width="4" height="19" rx="1" fill="#F2C811"/>
  </svg>
);
export const LinkedInLogo = () => (
  <svg role="img" viewBox="0 0 24 24" width={DEFAULT_SIZE} height={DEFAULT_SIZE} className="object-contain" aria-label="LinkedIn">
    <title>LinkedIn</title>
    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
export const NaukriLogo = () => (
  <svg role="img" viewBox="0 0 120 32" width={70} height={26} className="object-contain" aria-label="Naukri">
    <title>Naukri</title>
    <text x="0" y="24" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="#0B2B5C">naukri</text>
    <circle cx="108" cy="10" r="5" fill="#FF4F00"/>
  </svg>
);
export const IndeedLogo = makeBrandLogo(siIndeed);
export const ATSLogo = HRMSLogo;
export const GoogleWorkspaceLogo = makeBrandLogo(siGooglesheets);
export const SourcingToolsLogo = LinkedInLogo;
export const ChatGPTLogo = () => (
  <svg role="img" viewBox="0 0 24 24" width={DEFAULT_SIZE} height={DEFAULT_SIZE} className="object-contain" aria-label="ChatGPT">
    <title>ChatGPT</title>
    <path fill="#10A37F" d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.742 7.097 5.98 5.98 0 00.511 4.911 6.051 6.051 0 006.515 2.899A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 016.692 4.812v-7.035l-.141-.082-4.773-2.751a.775.775 0 00-.785 0L9.409 9.229V6.897a.066.066 0 01.028-.061l2.041-1.183a4.5 4.5 0 016.459 4.098zm-12.016 3.956l-2.019-1.163a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08-4.778 2.758a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.499 2.607 1.5v2.998l-2.597 1.5-2.607-1.5z"/>
  </svg>
);
export const GeminiLogo = makeBrandLogo(siGooglegemini);
export const EightfoldLogo = makeImgLogo(eightfoldLogo, "Eightfold AI");
export const ParadoxLogo = makeImgLogo(paradoxLogo, "Paradox AI");
export const ExcelHRAnalyticsLogo = GoogleSheetsLogo;

export const ExcelLogo = () => (
  <svg role="img" viewBox="0 0 24 24" width={DEFAULT_SIZE} height={DEFAULT_SIZE} className="object-contain" aria-label="Microsoft Excel">
    <title>Microsoft Excel</title>
    <path fill="#107C41" d="M15 3H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z"/>
    <path fill="#185C37" d="M15 3v18h4a2 2 0 002-2V5a2 2 0 00-2-2h-4z"/>
    <path fill="#33C481" d="M15 8h6v8h-6V8z"/>
    <path fill="#FFF" d="M7.5 7.5h5v2h-5v-2zm0 3.5h5v2h-5v-2zm0 3.5h5v2h-5v-2z"/>
  </svg>
);
