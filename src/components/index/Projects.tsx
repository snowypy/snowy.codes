import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Projects
        </motion.h1>
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <ProjectCard
            url="https://snowyjs.lol"
            title="DupeBlocks"
            description="DupeBlocks was one of the most popular Minehut Servers, Peaking at over 300 players!"
            image="https://cdn.discordapp.com/banners/1058581054530797578/6132946c7c187961cf5c7e066c5e001c.webp?size=1024&format=webp&width=0&height=281"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://discord.gg/dupecrush"
            title="DupeCrush"
            description="DupeCrush was one of my easiest projects due to the great community! Peaked at over 150 players!"
            image="	https://r2.e-z.host/2baf151e-582b-4dd3-9816-3a257a697cfe/tc4pok5k.png"
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <ProjectCard
            url="https://store.minecrush.gg"
            title="MineCrush"
            description="MineCrush is one of the biggest Minehut networks averaging 100 players and peaking at over 400."
            image="https://cdn.discordapp.com/banners/1021570976963625012/2302e6a70baf491da2df285d58525d4a.webp?size=1024&format=webp&width=0&height=281"
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <ProjectCard
            url="https://stealclash.tebex.io"
            title="StealClash"
            description="StealClash used to be one of the top 3 biggest lifesteal servers on Minehut before it was sold."
            image="https://r2.e-z.host/2baf151e-582b-4dd3-9816-3a257a697cfe/zhh5djd0.png"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url="https://snowyjs.lol"
            title="???"
            description="I have many other projects that have done well but I only want to feature the best of the best."
            image=""
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://snowyjs.lol"
            title="???"
            description="I have many other projects that have done well but I only want to feature the best of the best."
            image=""
            delay={0.2}
            gradient="bg-gradient-to-br"
          />
        </ul>
      </section>
    </>
  );
}
