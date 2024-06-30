document.getElementById('expand-button').addEventListener('click', function() {
    document.getElementById('basic-view').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('detailed-view').classList.remove('hidden');
    }, 1000);
});

document.getElementById('collapse-button').addEventListener('click', function() {
    document.getElementById('detailed-view').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('basic-view').classList.remove('hidden');
    }, 1000);
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);

const projects = [
    {
        name: 'Epic Plugins',
        description: 'The best freemium plugins available for free on BuiltByBit!',
        technologies: 'Spigot Library, Java, Kotlin, NodeJS'
    },
];

const projectsContainer = document.querySelector('.projects');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies}</p>
    `;
    projectsContainer.appendChild(projectElement);
});

const projectElements = document.querySelectorAll('.project');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

projectElements.forEach(element => {
    observer.observe(element);
});

