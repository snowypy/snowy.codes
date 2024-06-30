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
        technologies: 'Spigot Library, Java, Kotlin, NodeJS',
        link: 'https://discord.gg/epicplugins',
        image: '/mnt/data/image.png'
    },
    {
        name: 'DupeCrush',
        description: 'A lifestyle dupe Minecraft server coded in Java, Kotlin, and Skript.',
        technologies: 'Java, Kotlin, Skript',
        link: 'https://discord.gg/dupecrush',
        image: '/mnt/data/image.png'
    },
    {
        name: 'MineCrush',
        description: 'A Minecraft network with various frameworks.',
        technologies: 'Kotlin, JavaScript, Node.js, Gradle',
        link: 'https://discord.gg/minecrush',
        image: '/mnt/data/image.png'
    }
];

const projectsContainer = document.querySelector('.projects');

projects.forEach((project, index) => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-item');
    projectElement.innerHTML = `
        <div class="project-icon" style="background-image: url('${project.image}')"></div>
        <div class="project-content">
            <h3>0${index + 1}. ${project.name} <a href="${project.link}" target="_blank" class="underline">@${project.name}</a></h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
        </div>
    `;
    projectsContainer.appendChild(projectElement);
});

const projectElements = document.querySelectorAll('.project-item');

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

document.querySelectorAll('.underline').forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
        anchor.style.transition = 'all 0.3s ease';
        anchor.style.color = '#ff6600';
    });

    anchor.addEventListener('mouseout', () => {
        anchor.style.color = '#aaa';
    });
});
