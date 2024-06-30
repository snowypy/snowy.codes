document.getElementById('expand-button').addEventListener('click', function() {
    switchView('basic-view', 'detailed-view');
});

document.getElementById('collapse-button').addEventListener('click', function() {
    switchView('detailed-view', 'basic-view');
});

function switchView(hideView, showView) {
    document.getElementById(hideView).classList.add('fade-out');
    setTimeout(() => {
        document.getElementById(hideView).classList.add('hidden');
        document.getElementById(showView).classList.remove('hidden');
        document.getElementById(showView).classList.add('fade-in');
        document.getElementById(showView).classList.add('visible');
    }, 1000);
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    const fallDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDuration = fallDuration;

    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), parseFloat(fallDuration) * 1000);
}

let snowflakeInterval = setInterval(createSnowflake, 200);
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(snowflakeInterval);
    } else {
        snowflakeInterval = setInterval(createSnowflake, 200);
    }
});

const projects = [
    {
        name: 'Epic Plugins',
        description: 'The best freemium plugins available for free on BuiltByBit!',
        technologies: 'Spigot Library, Java, Kotlin, NodeJS',
        link: 'https://discord.gg/epicplugins',
        image: 'path/to/image.png'
    },
    {
        name: 'DupeCrush',
        description: 'A lifestyle dupe Minecraft server coded in Java, Kotlin, and Skript.',
        technologies: 'Java, Kotlin, Skript',
        link: 'https://discord.gg/dupecrush',
        image: 'path/to/image.png'
    },
    {
        name: 'MineCrush',
        description: 'A Minecraft network with various frameworks.',
        technologies: 'Kotlin, JavaScript, Node.js, Gradle',
        link: 'https://discord.gg/minecrush',
        image: 'path/to/image.png'
    }
];

const projectsContainer = document.querySelector('.projects');
projects.forEach((project, index) => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-item');
    projectElement.innerHTML = `
        <div class="project-icon" style="background-image: url('${project.image}')"></div>
        <div class="project-content">
            <h3>0${index + 1}. ${project.name} <a href="${project.link}" target="_blank" class="project-link">@${project.name}</a></h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
        </div>
    `;
    projectsContainer.appendChild(projectElement);
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});
document.querySelectorAll('.project-item').forEach(element => observer.observe(element));

// Add event listeners for hover effect on project links
document.querySelectorAll('.project-link').forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
        anchor.style.transition = 'color 0.3s ease';
        anchor.style.color = '#317ff5'; // Blue color on hover
    });

    anchor.addEventListener('mouseout', () => {
        anchor.style.color = 'var(--secondary-color)'; // Revert color to gray
    });
});
