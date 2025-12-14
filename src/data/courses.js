import AWS from "../assets/course-logos/aws.png";
import Salesforce from "../assets/course-logos/salesforce.png";
import Powerbi from "../assets/course-logos/powerbi.png";
import dataanalytics from "../assets/course-logos/data-analytics.png";
import dotnet from "../assets/course-logos/dotnet.png";
import pythonLogo from "../assets/course-logos/python.png";
import javaLogo from "../assets/course-logos/java.png";



export const courses = [
 {
  slug: "aws-cloud-computing",
  title: "AWS Cloud Computing Course",
  logo: AWS, // official AWS logo

  shortDescription:
    "Beginner-friendly AWS Cloud course to build strong cloud skills and become job-ready in 3 months.",

  duration: "3 Months",
  mode: "Live Online Classes",
  includes: "Hands-on Labs + Projects",

  fullDescription:
    "A complete, beginner-friendly AWS Cloud course designed to help learners build strong cloud computing skills and become job-ready in 3 months. Covers fundamentals → advanced services → real projects → certification preparation.",

  learn: [
    "AWS Cloud Fundamentals",
    "Core AWS Services (EC2, S3, VPC, IAM, Lambda, RDS, CloudWatch, etc.)",
    "Cloud Architecture Design",
    "Serverless Computing",
    "Networking & Security on AWS",
    "Deployment, Automation & Monitoring",
    "Real-World Cloud Projects",
    "AWS Certification Preparation",
  ],

  whoShouldJoin: [
    "Students / Freshers",
    "Working professionals",
    "Non-IT beginners",
    "IT professionals upgrading to Cloud",
    "Anyone preparing for AWS Cloud Practitioner / Solutions Architect certifications",
  ],

  schedule: {
    days: "Monday to Saturday",
    sunday: "Holiday",
  },

  outcomes: [
    "Deploy and manage cloud applications on AWS",
    "Build secure and scalable architectures",
    "Use EC2, S3, IAM, VPC, Lambda, RDS confidently",
    "Monitor & automate AWS services",
    "Work on real-world cloud projects",
    "Prepare for AWS certifications",
  ],
  pricing: {
  onlineOnly: { discountedPrice: 20000, actualPrice: 25000 },
  offline: null,
  online: null,
}
},
  {
  slug: "salesforce-crm",
  title: "Salesforce CRM Course",
  logo: Salesforce, // official Salesforce logo

  shortDescription:
    "Complete Salesforce CRM training program for beginners and professionals covering admin, automation, customization, and real-world projects.",

  duration: "3 Months",
  mode: "Live Online",
  includes: "Hands-on practice + Assignments + Projects",

  fullDescription:
    "A complete Salesforce CRM training program designed for beginners and professionals. Covers Salesforce fundamentals, admin tools, automation, customization, and real-world CRM projects.",

  learn: [
    "CRM & Cloud Concepts",
    "Salesforce Fundamentals",
    "Lightning Experience",
    "Objects, Fields, Relationships",
    "Validation Rules, Workflows, Automation",
    "Reports & Dashboards",
    "Security & Access Management",
    "App Builder Concepts",
    "Real Salesforce Projects",
    "Certification Preparation",
  ],

  whoShouldJoin: [
    "Students & freshers",
    "Working professionals (IT & non-IT)",
    "Anyone interested in CRM and Cloud careers",
    "Beginners preparing for Salesforce Admin or App Builder certifications",
  ],

  schedule: {
    days: "Monday to Saturday",
    sunday: "Holiday",
  },

  outcomes: [
    "Configure and customize Salesforce CRM",
    "Build automation workflows & approval processes",
    "Create reports, dashboards, custom apps",
    "Manage security, users, permissions & data",
    "Support CRM teams and business operations",
    "Prepare for Salesforce certification and CRM job roles",
  ],
  pricing: {
  onlineOnly: { discountedPrice: 20000, actualPrice: 25000 },
  offline: null,
  online: null,
}
},
 {
  slug: "power-bi",
  title: "Power BI",
  tagline: "Master Power BI in 3 Months – Online Live Training",

  logo: Powerbi, // official Power BI logo

  duration: "3 Months",
  mode: "Live Online",

  shortDescription:
    "Learn data cleaning, dashboard creation, and real-time business insights using Power BI.",

  about:
    "This Power BI course is designed for beginners, students, and working professionals. You will learn how to clean data, model it efficiently, build interactive dashboards, and generate real-time business insights using Microsoft Power BI through hands-on projects.",

  learn: [
    "Power BI basics to advanced",
    "Data cleaning using Power Query",
    "Data modeling & relationships",
    "DAX formulas",
    "Dashboard design best practices",
    "Power BI Service (cloud publishing)",
    "Real business projects",
  ],

  whyJoin: [
    "Live online classes",
    "Practical, hands-on training",
    "Beginner-friendly approach",
    "Weekly tests & doubt sessions",
    "Real-world dashboard creation",
    "Final portfolio project",
  ],

  whoShouldJoin: [
    "Students",
    "Freshers",
    "Working professionals",
    "Non-IT learners",
    "Anyone starting a career in Data Analytics",
  ],

  schedule: {
    duration: "3 Months",
    days: "Monday to Saturday",
    mode: "Live Virtual Classes",
  },

  jobRoles: [
    "Power BI Developer",
    "Data Analyst",
    "Business Intelligence Analyst",
  ],

  enrollmentCTA: {
    text: "Limited seats | Online Batch",
    contact: "Call / WhatsApp: Your Number",
  },

  outcomes: [
    "Build interactive dashboards",
    "Work with real business datasets",
    "Use DAX formulas confidently",
    "Publish dashboards on Power BI Cloud",
    "Create portfolio-ready analytics projects",
  ],
  pricing: {
  onlineOnly: { discountedPrice: 20000, actualPrice: 25000 },
  offline: null,
  online: null,
}
}
,
 {
  slug: "data-analytics",
  title: "Data Analytics",
  tagline: "Data Analytics Course – 3 Months (Online Training)",

  logo: dataanalytics, // official analytics-style logo

  duration: "3 Months",
  mode: "Live Online",

  shortDescription:
    "Master data analysis, visualization, and business reporting using Excel, SQL, Power BI, and Python.",

  about:
    "This beginner-friendly Data Analytics course is designed to help learners build strong analytical thinking and practical skills. The course covers the complete analytics workflow from Excel and SQL to Power BI dashboards and Python basics, using real-world datasets and industry projects.",

  learn: [
    "Data analytics foundations",
    "Excel for data analysis",
    "SQL for data querying",
    "Power BI for dashboards",
    "Python basics for analytics",
    "Data cleaning & data modeling",
    "Business insights & reporting",
    "Real-world analytics projects",
  ],

  whoShouldJoin: [
    "Students from any stream",
    "Working professionals (IT & non-IT)",
    "Freshers preparing for analytics job roles",
    "Beginners interested in Data Science & BI",
    "Anyone interested in data-driven decision making",
  ],

  schedule: {
    duration: "3 Months",
    days: "Monday to Saturday",
    sunday: "Holiday",
    mode: "Live Online",
    includes: "Practicals, assignments, real datasets",
  },

  jobRoles: [
    "Data Analyst",
    "Business Analyst",
    "Power BI Analyst",
    "Reporting Analyst",
  ],

  outcomes: [
    "Analyze data to extract business insights",
    "Write SQL queries for data extraction",
    "Build dashboards using Power BI",
    "Clean and process data using Excel and Python",
    "Present insights using data storytelling",
  ],
  pricing: {
  onlineOnly: { discountedPrice: 20000, actualPrice: 25000 },
  offline: null,
  online: null,
}
}
,

 {
  slug: "dotnet-fullstack",
  title: ".NET Full Stack",
  tagline: ".NET Full Stack Course – 3 Months (Online Training)",

  logo: dotnet,// official .NET logo

  duration: "3 Months",
  mode: "Live Online",

  shortDescription:
    "Become a job-ready .NET Full Stack Developer by mastering C#, ASP.NET, SQL, APIs, and full-stack project development.",

  about:
    "This complete .NET Full Stack training program is designed for beginners and aspiring developers. The course covers C# programming, .NET Framework and .NET Core, web development using ASP.NET MVC/Core, SQL databases, API development, and real-world full-stack project building.",

  learn: [
    "C# programming fundamentals",
    ".NET Framework & .NET Core",
    "Object-Oriented Programming (OOPS)",
    "ASP.NET MVC & ASP.NET Core",
    "Web API development",
    "SQL database fundamentals",
    "Entity Framework",
    "Frontend basics (HTML, CSS, JavaScript)",
    "Live full-stack project development",
  ],

  whoShouldJoin: [
    "Students and freshers",
    "Working professionals",
    "Beginners from IT & non-IT background",
    "Anyone looking to start a career in web or software development",
  ],

  schedule: {
    duration: "3 Months",
    days: "Monday to Saturday",
    mode: "Live Online",
    includes: "Hands-on coding, assignments, and real projects",
  },

  jobRoles: [
    ".NET Developer",
    "Software Developer",
    "Full Stack Developer",
    "Backend Developer",
  ],

  outcomes: [
    "Write clean and efficient C# programs",
    "Develop web applications using ASP.NET MVC/Core",
    "Work with SQL databases",
    "Build APIs and integrate them with frontend",
    "Create real-world full-stack projects",
  ],
  pricing: {
  onlineOnly: { discountedPrice: 20000, actualPrice: 25000 },
  offline: null,
  online: null,
}
}
,
{
  slug: "python-data-science",
  title: "Python With Data Science",
  logo: pythonLogo, // import your logo at the top
  shortDescription: "Master Python programming, data analysis, statistics, and machine learning with hands-on online and offline training.",
  duration: "3 Months",
  mode: "Online & Offline",
  includes: "Live Interactive Sessions, Practical Demonstrations, Assignments, Projects, Career Preparation",
  fullDescription: `
A structured 3-month training program designed for beginners and professionals to master Python programming, data analysis, statistics, machine learning, and industry tools through hands-on offline and online training. 
This program covers coding fundamentals → data analysis → ML models → real projects → career preparation.
  `,
  learn: [
    "Core Python Programming",
    "NumPy, Pandas, Matplotlib, SciPy",
    "Statistics & ML Foundations",
    "Supervised & Unsupervised Learning",
    "Scikit-learn, TensorFlow, PyTorch, Keras",
    "Data Analysis & Visualization",
    "End-to-End Machine Learning Projects"
  ],
  whoShouldJoin: [
    "Students / Freshers",
    "Working Professionals",
    "Beginners in Programming",
    "Aspiring Data Scientists / ML Engineers"
  ],
  schedule: {
    days: "Monday to Saturday",
    timing: "Live Interactive Online Sessions / Offline Classroom Training"
  },
  outcomes: [
    "Write Python programs confidently",
    "Work with NumPy, Pandas, Matplotlib, SciPy",
    "Analyze & visualize data",
    "Build ML models end-to-end",
    "Use TensorFlow / PyTorch / Keras basics",
    "Build real-world projects",
    "Eligible for roles: Data Analyst, Machine Learning Engineer (Entry Level), Data Scientist (Junior), Business Analyst, AI/ML Intern"
  ],
  pricing: {
  onlineOnly: null,
  offline: { discountedPrice: 35000, actualPrice: 40000 },
  online: { discountedPrice: 20000, actualPrice: 25000 },
}
}

,
{
  slug: "java-fullstack",
  title: "Java Full Stack Development",
  logo: javaLogo, // import your logo at the top
  shortDescription: "Comprehensive 6-month Java Full Stack program covering backend, frontend, databases, microservices, tools, AI-powered development, and real-world projects.",
  duration: "6 Months",
  mode: "Online & Offline",
  includes: "Live interactive sessions, Classroom training, Hands-on projects, AI tools, Career support",
  fullDescription: `
A comprehensive 6-month Java Full Stack Developer Program covering backend, frontend, databases, microservices, tools, AI-powered development, and real-world projects. 
Available in both Online (Live Virtual) and Offline (Classroom) modes. 
Suitable for students, freshers, and working professionals aiming to start a career in Software & Full Stack Development.
  `,
  learn: [
    "Core Java, JDBC, Servlet, JSP",
    "Spring & Spring Boot",
    "Hibernate & Microservices",
    "Frontend: HTML, CSS, Bootstrap, JavaScript, ReactJS",
    "Developer Tools: GitHub, Maven, Log4j, Swagger, Postman",
    "AI Productivity Tools: GitHub Copilot, Amazon Q Developer, Amazon CodeWhisperer",
    "Hands-on Full Stack Projects"
  ],
  whoShouldJoin: [
    "Students / Freshers",
    "Working Professionals",
    "Aspiring Full Stack Developers",
    "Anyone starting a career in Software & Web Development"
  ],
  schedule: {
    days: "Monday to Saturday",
    timing: "Live Interactive Online Sessions / Offline Classroom Training"
  },
  outcomes: [
    "Build full-stack applications using Java, Spring Boot & ReactJS",
    "Develop scalable REST APIs",
    "Work with microservices architecture",
    "Use SQL & NoSQL databases",
    "Write clean & optimized code",
    "Use industry tools confidently",
    "Leverage AI tools for coding productivity",
    "Build projects for resume & interviews",
    "Eligible job roles: Java Developer, Full Stack Developer, Software Engineer, Backend Developer"
  ],
  pricing: {
  onlineOnly: null,
  offline: { discountedPrice: 35000, actualPrice: 40000 },
  online: { discountedPrice: 20000, actualPrice: 25000 },
}
}

,
];
