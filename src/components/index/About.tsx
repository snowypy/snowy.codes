import AboutCard from "@/components/AboutCard";
import { Tech } from "../../../typings";
import { motion } from "framer-motion";

export default function About() {

  let frontendTech: Tech[] = [
    { title: "HTML", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> },
    { title: "CSS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /> },
    { title: "React", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> },
	{ title: "Java", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/java/java-original.svg" /> },
	{ title: "Kotlin", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/kotlin/kotlin-original.svg" /> },
	{ title: "Skript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://docs.skriptlang.org/assets/icon.png" /> },
  ]

  let backendTech: Tech[] = [
    { title: "JavaScript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> },
    { title: "TypeScript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /> },
	{ title: "PHP", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/php/php-original.svg" /> },
	{ title: "Bash", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/bash/bash-original.svg" /> },
    { title: "NodeJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> },
    { title: "MongoDB", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /> },
	{ title: "Redis", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/redis/redis-original.svg" /> },
	{ title: "Docker", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/docker/docker-original.svg" /> },
	{ title: "MySQL", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/mysql/mysql-original.svg" /> },
  ]

  let otherTech: Tech[] = [
    { title: "Git", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /> },
    { title: "Github", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /> },
    { title: "Visual Studio Code", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" /> },
	{ title: "Eclipse", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/eclipse/eclipse-original.svg" /> },
	{ title: "JetBrains Software", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/jetbrains/jetbrains-original.svg" /> },
	{ title: "InteliJ Idea", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/intellij/intellij-original.svg" /> },
	{ title: "Webstorm", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/webstorm/webstorm-original.svg" /> },
	{ title: "PyCharm", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/pycharm/pycharm-original.svg" /> },
    { title: "Cloudflare", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png" /> },
    { title: "Hetzner", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/q4dzhs1beprvugs13m.png" /> },
	{ title: "Google Cloud", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/googlecloud/googlecloud-original.svg" /> },
	{ title: "Azure", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/azure/azure-original.svg" /> },
    { title: "Linux", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" /> },
	{ title: "Ubuntu", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/ubuntu/ubuntu-original.svg" /> },
	{ title: "Debian", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/debian/debian-original.svg" /> },
	{ title: "Maven", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/maven/maven-original.svg" /> },
	{ title: "Gradle", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/gradle/gradle-original.svg" /> },
	{ title: "Pterodactyl", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://pterodactyl.io/logos/pterry.svg" /> },
	{ title: "Insomnia", icon: <img draggable={false} loading="lazy" className= "h-6 w-6" src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/insomnia/insomnia-original.svg" />}
  ]

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="Overall"
            description="Hiya! I'm Snowy and I have been working on System Development for a while. I am interested in bringing the best result to any clients or customers! If you want to contact me about services then email me @ contact@snowyjs.lol"
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Frontend Devwork"
            description="I have roughly three years of experience with Frontend Development, and I have deployed a number of public projects."
            tech={frontendTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Backend Devwork"
            description="I have around a year and a half of dev work with Backend Development, I have made several APIs that are privately available."
            tech={backendTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Tools and Frameworks"
            description="When it comes to making the product, I use a variety of tools which you can find below!"
            tech={otherTech}
            direction="bottom"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-t"
          />
        </ul>
      </section>
    </>
  );
}
