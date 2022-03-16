const random = (a: number, b: number) => a + Math.random() * b;

export const personalInfo = {
	name: "George Karampelas",
	roles: ["full stack web engineer", "machine learning practitioner"]
};

export const jobsList = [
	{
		id: 1,
		positionTitle: "Software Engineer",
		companyTitle: "EmDOT",
		description: "I use ReactJS, Typescript and other tools to create web applications for many well-known companies.",
		dateFrom: "12/12/2021",
		dateTo: "12/12/2022",
		speed: random(0.05, 0.07),
		offset: random(0, Math.PI * 4)
	},
	{
		id: 2,
		positionTitle: "Computer Operator",
		companyTitle: "Military Service",
		description:
			"During my military services, I was assigned to cover secretarial services and computer operations. I used managing tools to schedule tasks for the higher ups.",
		dateFrom: "1/7/2018",
		dateTo: "1/2/2019",
		speed: random(0.05, 0.07),
		offset: random(0, Math.PI * 4)
	},
	{
		id: 3,
		positionTitle: "Internship",
		companyTitle: "EYDAP",
		description:
			"During my internship, I was responsible for maintaining the telecommunications of the company and installing new network systems. I covered positions as a network and computer technician.",
		dateFrom: "1/4/2017",
		dateTo: "1/9/2017",
		speed: random(0.05, 0.07),
		offset: random(0, Math.PI * 4)
	},
	{
		id: 4,
		positionTitle: "Research Assistant",
		companyTitle: "University of Thessaly",
		description:
			"During my studies at the University of Thessaly I took part to various projects in my university such as game and software development.",
		dateFrom: "1/10/2014",
		dateTo: "1/10/2017",
		speed: random(0.05, 0.07),
		offset: random(0, Math.PI * 4)
	}
];

export const degreesList = [
	{
		title: "MSC. Software Development and AI",
		school: "University of Piraeus",
		description:
			"I had the chance of learning technologies and methodologies about Adaptive Teaching Systems, Computer Vision 3D Applications Development, Intelligent Virtual Environments, Machine Learning and Pattern Recognition, Social Network Analysis and Speech, Sound Recognition systems",
		dateStart: new Date(2019, 11, 1),
		dateEnd: new Date(2021, 11, 1)
	},
	{
		title: "BS. Informatics Engineering T.E.",
		school: "University of Thessaly",
		description:
			"I was able to learn the fundamentals about Computer Science and Engineering. I took part to research and development teams to develop applications and tools related to management and teaching.",
		dateStart: new Date(2011, 10, 1),
		dateEnd: new Date(2017, 12, 1)
	}
];

export const certificateList = [
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

let skillsData: any[] = [
	{
		title: "Front-End",
		techItems: ["HTML", "CSS", "Javascript", "Typescript", "React", "NextJS", "Redux"]
	},
	{
		title: "Back-End",
		techItems: ["PostgreSQL", "Javascript", "NodeJS", "ExpressJS", "Python", "FastAPI", "Django"]
	},
	{
		title: "Machine Learning",
		techItems: ["Python", "Numpy", "Pandas", "Scikit-learn", "Matplotlib", "OpenCV", "Keras", "Tensorflow"]
	},
	{
		title: "Game Dev",
		techItems: ["C#", "Unity3D", "Blender3D"]
	}
];

skillsData = skillsData.map((item, index) => ({
	...item,
	id: index,
	xRadius: (index + 2.5) * 4,
	zRadius: (index + 2.5) * 4,
	size: random(0.08, 0.2),
	speed: random(0.05, 0.1),
	offset: random(0, Math.PI * 4),
	rotationSpeed: random(0.003, 0.006)
}));

export const technicalSkillsData = skillsData;

let data: any[] = [
	{
		title: "Project 1",
		description:
			"Some text that goes on and on and on and on and on and on and on and on on and on and on and on and on and onon and on and on and on and on and onon and on and on and on and on and onon and on and on and on and on and onon and on and on and on and on and onon and on and on and on and on and on",
		technologies: ["ReactJS", "Python"],
		images: ["Image1", "Image2"],
		githubURL: "http",
		runningAppURL: ""
	},
	{
		title: "Project 2",
		description: "Some text that goes on and on and on and on and on and on on and on and on and on and on and on",
		technologies: ["ReactJS"],
		images: ["Image1", "Image2"],
		githubURL: "http",
		runningAppURL: ""
	},
	{
		title: "Project 3",
		description:
			"Some text that goes on and on and on and on and on and on and on and on and onon and on and on and on and on and onon and on and on and on and on and onon and on and on and on and on and onon and on and on and on and on and onon and on and on and on and on and onon and on and on and on and on and onon and on and on and on and on and on",
		technologies: ["ReactJS", "Python", "PostgreSQL"],
		images: ["Image1", "Image2"],
		githubURL: "http",
		runningAppURL: ""
	},
	{
		title: "Project 4",
		description:
			"Some text that goes on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on",
		technologies: ["Python", "Tensorflow"],
		images: ["Image1", "Image2"],
		githubURL: "http",
		runningAppURL: ""
	}
];

data = data.map((item, index) => ({
	...item,
	id: index,
	xRadius: random(1, 4) + 4,
	zRadius: random(1, 4) + 4,
	size: random(0.5, 1),
	speed: random(0.05, 0.1),
	offset: random(0, Math.PI * 4),
	rotationSpeed: random(0.008, 0.004)
}));

export const projectsData = data;
