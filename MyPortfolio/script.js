const portfolioData = {
    profile: {
        name: "Алина Поддялова",
        profession: "Программист",
        age: 18
    },
    
    projects: [
        {
            id: 1,
            title: "Сайт-визитка",
            category: "Веб",
            likes: 245,
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 2,
            title: "Калькулятор судоку",
            category: "Веб",
            likes: 87,
            technologies: ["JavaScript", "HTML", "CSS"]
        },
        {
            id: 3,
            title: "Дизайн мемов",
            category: "Дизайн",
            likes: 156,
            technologies: ["Figma", "Photoshop"]
        },
        {
            id: 4,
            title: "Портфолио с анимацией",
            category: "Веб",
            likes: 98,
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 5,
            title: "Лендинг для кафе",
            category: "Дизайн",
            likes: 134,
            technologies: ["Figma", "HTML", "CSS"]
        }
    ],
    
    preferences: new Map([
        ["theme", "dark"],
        ["language", "ru"]
    ])
};



const profileKeys = Object.keys(portfolioData.profile);
console.log("Ключи профиля:", profileKeys);



const popularProjects = portfolioData.projects.filter(project => project.likes > 100).map(project => `Проект: ${project.title} из категории ${project.category}`);
console.log(popularProjects);



let totalLikes = 0;
portfolioData.projects.forEach(project => {totalLikes += project.likes;});
console.log("Общее число лайков = ", totalLikes);



const allTechnologies = new Set();

portfolioData.projects.forEach(project => {
    project.technologies.forEach(tech => {allTechnologies.add(tech);});
});

console.log(Array.from(allTechnologies));

