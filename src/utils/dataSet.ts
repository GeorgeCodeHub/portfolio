const random = (a: number, b: number) => a + Math.random() * b;

export const jobsList = [
	{
		title: "Software Engineer",
		description: "I use ReactJS, Typescript and other tools to create web applications for many well-known companies.",
		dateFrom: "12/12/2021",
		dateTo: "12/12/2022",
		speed: random(0.06, 0.1)
	},
	{
		title: "Undergraduate Research Assistant",
		description:
			"During my studies at the University of Thessaly I took part to various projects in my university such as game and software development.",
		dateFrom: "1/10/2014",
		dateTo: "1/10/2017",
		speed: random(0.06, 0.1)
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
