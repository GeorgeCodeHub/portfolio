import { CertificateItem, DegreeItem, JobItem, RawProjectItem, TechnicalSkillItem } from "./types";

const random = (a: number, b: number) => a + Math.random() * b;

export const jobsList: JobItem[] = [
	{
		id: 1,
		positionTitle: "Software Engineer",
		companyTitle: "Power Factors",
		description:
			"Develop complex dashboards and tools to provide users with clear flows and tools for energy establishment and management.",
		dateFrom: "10/2025",
		dateTo: "Present",
		speed: random(0.05, 0.07),
		offset: random(0, Math.PI * 4)
	},
	{
		id: 2,
		positionTitle: "Freelance Software Engineer",
		companyTitle: "Self-Employed",
		description:
			"- Developed projects related with IoT and automation\n- Developed high end dashboards for B2B products\n- Developed numerous applications for both Web and Mobile",
		dateFrom: "03/2021",
		dateTo: "Present",
		speed: random(0.05, 0.07),
		offset: random(0, Math.PI * 4)
	},
	{
		id: 3,
		positionTitle: "Software Engineer",
		companyTitle: "Accepted",
		description:
			"Develop multi-page tools and interfaces for numerous high-end and upcoming companies for energy solutions.",
		dateFrom: "05/2023",
		dateTo: "10/2025",
		speed: random(0.05, 0.07),
		offset: random(0, Math.PI * 4)
	},
	{
		id: 4,
		positionTitle: "Software Engineer",
		companyTitle: "EmDoT SA",
		description:
			"- Led the development of numerous projects, resulting in automated and precise monitoring systems for clients.\n- Developed updated versions of company tools using NodeJS, Express, ReactJS, React Native, and .NET.\n- Mentored engineers by introducing new technologies to the team.\n- Participated in presentations, providing technical answers.",
		dateFrom: "12/2019",
		dateTo: "05/2023",
		speed: random(0.05, 0.07),
		offset: random(0, Math.PI * 4)
	},
	{
		id: 5,
		positionTitle: "Military Services",
		companyTitle: "Hellenic Navy",
		description: "Mandatory military service.",
		dateFrom: "02/2018",
		dateTo: "02/2019",
		speed: random(0.05, 0.07),
		offset: random(0, Math.PI * 4)
	},
	{
		id: 6,
		positionTitle: "Support Engineer",
		companyTitle: "EYDAP",
		description:
			"Maintained the company's telecommunications and installed new network systems. Covered roles as a network and computer technician and provided end-user support.",
		dateFrom: "04/2017",
		dateTo: "09/2017",
		speed: random(0.05, 0.07),
		offset: random(0, Math.PI * 4)
	}
];

export const degreesList: DegreeItem[] = [
	{
		title: "MSC. Software Development and AI",
		school: "University of Piraeus",
		description:
			"I had the chance of learning technologies and methodologies about Adaptive Teaching Systems, Computer Vision 3D Applications Development, Intelligent Virtual Environments, Machine Learning and Pattern Recognition, Social Network Analysis and Speech, Sound Recognition systems",
		dateFrom: new Date(2019, 11, 1),
		dateTo: new Date(2021, 11, 1)
	},
	{
		title: "BS. Informatics Engineering T.E.",
		school: "University of Thessaly",
		description:
			"I was able to learn the fundamentals about Computer Science and Engineering. I took part to research and development teams to develop applications and tools related to management and teaching.",
		dateFrom: new Date(2011, 10, 1),
		dateTo: new Date(2017, 12, 1)
	}
];

export const certificateList: CertificateItem[] = [
	{
		title: "Next.js & React - The Complete Guide",
		school: "Udemy",
		description: "I learned how to use Next.js and how to build effective apps from development to production.",
		dateAcquired: new Date(2021, 12, 30)
	},
	{
		title: "Communication Strategies for a Virtual Age",
		school: "Coursera",
		description: "I learned valuable skills about presenting and showcasing ideas and plans to a team and colleagues.",
		dateAcquired: new Date(2020, 5, 1)
	},
	{
		title: "Modern React with Redux",
		school: "Udemy",
		description: "I learned how to use React, Hooks and Redux and develop top of the line front-end applications.",
		dateAcquired: new Date(2020, 2, 1)
	},
	{
		title: "JavaScript Algorithms and Data Structures",
		school: "freeCodeCamp",
		description: "I learned about algorithms and data structures with Javascript.",
		dateAcquired: new Date(2019, 10, 1)
	},
	{
		title: "Deep Learning, Computer Vision, CNN, YOLO, SSD & GANS",
		school: "Udemy",
		description: "I learned how to use Deep Learning for Computer Vision and many of the top-end libraries related to.",
		dateAcquired: new Date(2019, 9, 1)
	},
	{
		title: "Summer School",
		school: "NCSR Demokritos",
		description:
			"I had the chance of meeting multiple researchers and learn about new technologies that are used in the research field of Astronomy, Physics and Computer Science.",
		dateAcquired: new Date(2019, 7, 1)
	}
];

export const technicalSkillsData: TechnicalSkillItem[] = [
	{
		title: "Front-End",
		technologies: ["HTML", "CSS", "Typescript", "ReactJS", "React Native", "NextJS", "Redux"]
	},
	{
		title: "Back-End",
		technologies: ["PostgreSQL", "Firebase", "Typescript", "NodeJS", "ExpressJS", ".NET", "Python", "FastAPI", "Django"]
	},
	{
		title: "Machine Learning",
		technologies: ["Python", "Pandas", "OpenCV", "Keras", "Tensorflow"]
	},
	{
		title: "Game Dev",
		technologies: ["C#", "Unity3D", "Blender3D"]
	}
];

export const projectFilters = ["Featured", "Python", "Typescript", "C#", "ReactJS", "Unity3D"];

export const projectsData: RawProjectItem[] = [
	{
		title: "Air Pollution Prediction",
		featured: true,
		description:
			"The goal was to use Neural Networks to predict future values from historical data in specific locations. In the context of this master thesis, 6 research papers were studied for the different types of neural network models on data related to air pollution and time series forecasting. Furthermore, multiple different types of neural networks were developed in order to realize the final architecture of the proposed model.",
		technologies: ["Python", "Tensorflow", "Scikit-learn"],
		images: [
			"https://raw.githubusercontent.com/GeorgeCodeHub/Analysis-and-prediction-of-air-pollution-using-BiLSTM-Conv1D/main/BiLSTM-COnv1D.jpg",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Analysis-and-prediction-of-air-pollution-using-BiLSTM-Conv1D/main/MapCountries.png"
		],
		githubURL: "https://github.com/GeorgeCodeHub/Analysis-and-prediction-of-air-pollution-using-BiLSTM-Conv1D",
		runningAppURL: ""
	},
	{
		title: "Appointment Scheduler",
		featured: false,
		description:
			"An appointment Scheduler tool for doctors and secretaries created with C#. It enables the users to create, edit, delete appointments and assign them to specific hours and days. In addition it notifies the user for holidays and upcoming appoitments that they have created.",
		technologies: ["C#"],
		images: [
			"https://raw.githubusercontent.com/GeorgeCodeHub/Appointment-Scheduler/main/Screenshots/Appointment-day.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Appointment-Scheduler/main/Screenshots/Appointment-month.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Appointment-Scheduler/main/Screenshots/Appointment-search.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Appointment-Scheduler/main/Screenshots/Appointment-create.png"
		],
		githubURL: "https://github.com/GeorgeCodeHub/Appointment-Scheduler",
		runningAppURL: ""
	},
	{
		title: "Digit Speech Recognition",
		featured: true,
		description:
			"This project demonstrates the utilization of Neural Networks and machine learning that can distinguish numbers from 0-9 with a great accuracy.",
		technologies: ["Python", "Tensorflow"],
		images: [
			"https://raw.githubusercontent.com/GeorgeCodeHub/Neural-Networks-for-digit-speech-recognition/main/Screenshots/Spectogram.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Neural-Networks-for-digit-speech-recognition/main/Screenshots/training-graph.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Neural-Networks-for-digit-speech-recognition/main/Screenshots/MFCC-Features.png"
		],
		githubURL: "https://github.com/GeorgeCodeHub/Neural-Networks-for-digit-speech-recognition",
		runningAppURL: ""
	},
	{
		title: "Evolution Simulator",
		featured: true,
		description:
			"The objective of this project was the implementation of genetic algorithms at the synchronous and asynchronous level. Technologies such as artificial intelligence and search algorithms were applied to 3D environments where they enabled the following functions: features for each agent, the choice of mutations of these characteristics at a synchronous or asynchronous level, the monitoring of the above in graphs and the influence of the environment towards the agents.",
		technologies: ["Unity3D", "C#", "Blender3D"],
		images: [
			"https://raw.githubusercontent.com/GeorgeCodeHub/Evolution-Simulator/main/Screenshots/4.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Evolution-Simulator/main/Screenshots/5.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Evolution-Simulator/main/Screenshots/6.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Evolution-Simulator/main/Screenshots/11.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Evolution-Simulator/main/Screenshots/13.png"
		],
		githubURL: "https://github.com/GeorgeCodeHub/Evolution-Simulator",
		runningAppURL: ""
	},
	{
		title: "StackOverflow Social Network Analysis",
		featured: false,
		description:
			"This project aims to analyze a Stack Overflow time-varying network with Python. More specifically, methods were applied that allowed us to the visualization of large data sets in graphs, splitting them into subscribers by time periods, the graphical presentation of distribution values for centralization measures for each sub-signature, the calculation of common data sets for successive signatures, calculation of similarity tables in the above sets and forecast of future edges according to similarity tables.",
		technologies: ["Python", "Numpy", "Pandas", "Networkx"],
		images: [
			"https://raw.githubusercontent.com/GeorgeCodeHub/Stack-Overflow-Social-Network-Analysis/main/Screenshots/sub-graphs.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Stack-Overflow-Social-Network-Analysis/main/Screenshots/Degree-Centrality.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Stack-Overflow-Social-Network-Analysis/main/Screenshots/Short-Graph-Common-Neighbors.png"
		],
		githubURL: "https://github.com/GeorgeCodeHub/Stack-Overflow-Social-Network-Analysis",
		runningAppURL: ""
	},
	{
		title: "Football Outcome Prediction",
		featured: true,
		description:
			"The project's goal was the analysis of european football matches and the use of Neural Networks for match outcome prediction.",
		technologies: ["Python", "Tensorflow", "Pandas"],
		images: [
			"https://raw.githubusercontent.com/GeorgeCodeHub/Football-outcome-prediction/main/Images/PredictionsB365.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Football-outcome-prediction/main/Images/PredictionsBW.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/Football-outcome-prediction/main/Images/PredictionsIW.png"
		],
		githubURL: "https://github.com/GeorgeCodeHub/Football-Outcome-Prediction",
		runningAppURL: ""
	},
	{
		title: "e-learning Platform",
		featured: true,
		description:
			"An e-learning platform aimed at teaching Communication Skills with lessons, chapters and quizzes for visual and reading learners.",
		technologies: ["Firebase", "ReactJS", "Javascript"],
		images: [
			"https://raw.githubusercontent.com/GeorgeCodeHub/e-learning-platform/main/Screenshots/1.login.PNG",
			"https://raw.githubusercontent.com/GeorgeCodeHub/e-learning-platform/main/Screenshots/4.Main.PNG",
			"https://raw.githubusercontent.com/GeorgeCodeHub/e-learning-platform/main/Screenshots/9.LearnerVisual.PNG",
			"https://raw.githubusercontent.com/GeorgeCodeHub/e-learning-platform/main/Screenshots/20.Finish.PNG"
		],
		githubURL: "https://github.com/GeorgeCodeHub/e-learning-platform",
		runningAppURL: ""
	},
	{
		title: "Personal Landing Page",
		featured: true,
		description:
			"Yes, the page that you are looking at is one of my most proud projects I have created. Utilizing the ThreeJS library I was able to use 3D models on the browser and create this application you are currently using. I hope you like it as much as I liked making it.",
		technologies: ["ReactJS", "Typescript", "Blender3D"],
		images: [
			"https://raw.githubusercontent.com/GeorgeCodeHub/portfolio/refs/heads/main/Screenshots/experience-view.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/portfolio/refs/heads/main/Screenshots/education-view.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/portfolio/refs/heads/main/Screenshots/skills.png",
			"https://raw.githubusercontent.com/GeorgeCodeHub/portfolio/refs/heads/main/Screenshots/projects-view.png"
		],
		githubURL: "https://github.com/GeorgeCodeHub/portfolio",
		runningAppURL: "https://georgecodehub.github.io/portfolio/"
	}
];
