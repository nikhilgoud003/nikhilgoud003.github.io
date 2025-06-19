// Theme Management
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);

const updateButtonIcon = (theme) => {
  if (theme === 'light') {
    themeToggle.innerHTML = '🌙';
  } else {
    themeToggle.innerHTML = '🌞';
  }
};
updateButtonIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateButtonIcon(newTheme);
});

// Typewriter Effect
const nameElement = document.querySelector('#intro h1 div');
const names = ["Hi there!", "I'm Nikhil Yeminedi"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = names[currentIndex];
  if (!isDeleting) {
    nameElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, 500);
    } else {
      setTimeout(typeWriter, 100);
    }
  } else {
    nameElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % names.length;
      setTimeout(typeWriter, 500);
    } else {
      setTimeout(typeWriter, 50);
    }
  }
}
typeWriter();

// Skills Data
const skills = [
  { name: "Python", icon: "assets/python-icon.svg" },
  { name: "SQL", icon: "assets/sql-icon.svg" },
  { name: "Scala", icon: "assets/scala-icon.jpeg" },
  { name: "Hadoop", icon: "assets/hadoop.png" },
  { name: "Spark", icon: "assets/spark-icon.svg" },
  { name: "Hive", icon: "assets/hive.png" },
  { name: "Kafka", icon: "assets/kafka-icon.svg" },
  { name: "AWS", icon: "assets/aws-icon.svg" },
  { name: "Azure", icon: "assets/azure-icon.svg" },
  { name: "Cloudera", icon: "assets/Cloudera.jpeg" },
  { name: "JavaScript", icon: "assets/javascript-icon.svg" },
  { name: "MySQL", icon: "assets/mysql-logo.svg" },
  { name: "MS SQL Server", icon: "assets/sql-server-icon.svg" },
  { name: "PySpark", icon: "assets/pyspark-icon.svg" },
  { name: "BERT", icon: "assets/BERT.jpeg" },
  { name: "spaCy", icon: "assets/spacy-icon.svg" },
  { name: "C", icon: "assets/C_Programming_Language.svg" },
  { name: "C++", icon: "assets/C++_logo.svg" },
  { name: "CSS3", icon: "assets/CSS3_logo.svg" },
  { name: "NLP", icon: "assets/NLP.jpeg" },
  { name: "Git", icon: "assets/git-logo.svg" },
  { name: "HTML", icon: "assets/HTML5-icon.svg" },
  { name: "Jenkins", icon: "assets/jenkins_logo.svg" },
  { name: "Docker", icon: "assets/docker-icon.svg" }
];

// Experience Data
const experiences = [
  {
    title: "Data Engineer/Analyst",
    company: "Tata Consultancy Services",
    companyIcon: "assets/tcs_logo.png",
    location: "On-site",
    duration: "July 2022 - Dec 2024",
    description: "Cloud Big Data Engineer with expertise in robust analytics and a customer-centric approach.",
    achievements: [
      "Designed and implemented strategic system blueprints for high-performance data processing ETL pipelines using cloud platforms.",
      "Led data analysis using SQL to assess data integrity and perform comprehensive quality checks across systems.",
      "Applied HQL to query and manage data within Hadoop-based systems, ensuring data integrity.",
      "Conducted thorough validation checks on data mart content, ensuring successful rollout into production environments.",
      "Integrated multiple Data Marts into a unified global data mart (GFDM project for Visa).",
      "Implemented Scala code for development and optimization of data pipelines, enhancing performance and scalability."
    ]
  },
  {
    title: "Web Developer",
    company: "Steed 26 Solutions Pvt Ltd",
    companyIcon: "assets/steed.jpeg",
    location: "Remote",
    duration: "March 2021 - June 2022",
    description: "Front-end development for Hospital Records Management System (HRMS).",
    achievements: [
      "Designed and implemented responsive, dynamic user interfaces using HTML5, CSS3, JavaScript (ES6+).",
      "Integrated complex RESTful APIs with asynchronous data handling via AJAX.",
      "Engineered interactive dashboards using libraries like D3.js and Chart.js for data visualization."
    ]
  }
];

// Projects Data
const projects = [
  {
    title: "Disaster Text Classification & BIO Tagging Enhancement",
    description: "Developed a BERT and spaCy-based NLP pipeline for disaster text classification using co-occurrence extraction, PDF text processing, and chunking, with interpretability via transformer-interpreter.",
    technologies: ["Python", "BERT", "spaCy", "PyMuPDF", "Transformer Interpretability"],
    image: "assets/nlp-project.jpg",
    link: "https://github.com/your-github/disaster-text-classification"
  },
  {
    title: "Hand Gesture Recognition System for Sign Language",
    description: "Designed a GUI using deep learning to help deaf and dumb people communicate with normal people. Published research paper on the project.",
    technologies: ["Python", "Deep Learning", "CNN", "GUI Development"],
    image: "assets/sign-language-project.jpg",
    link: "https://www.researchgate.net/publication/361465545"
  },
  {
    title: "Cat & Dog Classification Using CNNs",
    description: "Developed a convolutional neural network model for image classification as part of Finland Labs internship training.",
    technologies: ["Python", "CNN", "AWS", "Machine Learning"],
    image: "assets/cnn-project.jpg",
    link: "https://github.com/your-github/cat-dog-classification"
  }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  // Populate skills
  const skillsList = document.querySelector('.skills-list');
  skills.forEach(skill => {
    const li = document.createElement('li');
    if (skill.icon.endsWith('.svg') || skill.icon.endsWith('.png') || skill.icon.endsWith('.jpeg')) {
      li.innerHTML = `<img src="${skill.icon}" alt="${skill.name}" class="skill-icon"> ${skill.name}`;
    } else {
      li.textContent = skill.name;
    }
    skillsList.appendChild(li);
  });

  // Populate experience
  const experienceContainer = document.querySelector('.experience-container');
  experiences.forEach(exp => {
    const expItem = document.createElement('div');
    expItem.classList.add('experience-item');
    expItem.innerHTML = `
      <div class="company-details">
        <img src="${exp.companyIcon}" alt="${exp.company}" class="company-icon">
        <div>
          <h3 class="company-title">${exp.title}</h3>
          <p><strong>${exp.company}</strong> | ${exp.duration}</p>
          <p class="location">${exp.location}</p>
        </div>
      </div>
      <p>${exp.description}</p>
      <ul class="achievements-list">
        ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
      </ul>
    `;
    experienceContainer.appendChild(expItem);
  });

  // Populate projects
  const projectsGrid = document.querySelector('.projects-grid');
  projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
      </div>
    `;
    projectsGrid.appendChild(card);
  });

  // Contact form submission (basic)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
});
