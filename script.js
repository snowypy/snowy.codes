document.getElementById('expand-button').addEventListener('click', function() {
    document.getElementById('basic-view').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('basic-view').classList.add('hidden');
        document.getElementById('detailed-view').classList.remove('hidden');
        document.getElementById('detailed-view').classList.add('fade-in');
        document.getElementById('detailed-view').classList.add('visible');
    }, 1000);
});

document.getElementById('collapse-button').addEventListener('click', function() {
    document.getElementById('detailed-view').classList.add('fade-out');
    document.getElementById('detailed-view').classList.remove('visible');
    setTimeout(() => {
        document.getElementById('detailed-view').classList.add('hidden');
        document.getElementById('basic-view').classList.remove('hidden');
        document.getElementById('basic-view').classList.add('fade-in');
        document.getElementById('basic-view').classList.add('visible');
    }, 1000);
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    // Set random horizontal position
    snowflake.style.left = Math.random() * window.innerWidth + 'px';

    // Set random duration for fall animation
    const fallDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDuration = fallDuration;

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(fallDuration) * 1000);
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
