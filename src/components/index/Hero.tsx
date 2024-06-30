import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import SocialIcon from "@/components/SocialIcon";

export default function Hero({ inView, descRef }: { inView: boolean, descRef: any }) {
  return (
    <>
      <section className="max-w-4xl w-full flex flex-col mx-auto pt-44">
        <motion.div
          className="relative sm:p-12 p-6 w-full flex flex-col bg-gradient-to-br from-primary to to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
          initial={{ transform: 'translateY(30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
          ref={descRef}
        >
          <h1 className="font-leaguespartan font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-text">
            Hey, I&apos;m Snowy<span className="sm:hidden inline-block animate-wave ml-2">👋</span><span className="font-leaguespartan font-bold text-xl text-text brightness-50 italic sm:inline flex">JS</span><span className="sm:inline-block hidden animate-wave ml-2">👋</span>
          </h1>
          <p className="font-leaguespartan font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg text-text">
            {inView &&
              <Typewriter
                options={{
                  delay: 30,
                  strings: ["I'm a Software Developer!"],
                  loop: false,
                  autoStart: true,
                  deleteSpeed: 604800000,
                }}
              />}
          </p>
          <ul className="flex flex-row flex-wrap gap-2 mt-2">
            <SocialIcon
              url="https://discord.com/invite/dupecrush"
              icon={<svg role="img" className="h-7 w-7 fill-[#5865F2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>}
              delay={0.4}
            />
            <SocialIcon
              url="https://github.com/snowypy"
              icon={<svg role="img" className="h-7 w-7 fill-[#ffffff]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>}
              delay={0.5}
            />
            <SocialIcon
              url="https://namemc.com/profile/SnowyJS"
              icon={<svg viewBox="-8 -8 16 16" className='w-7 h-7 fill-black' shapeRendering="crispEdges" ><path d="M-5-5L+3-5L+3-3L+5-3L+5+5L+3+5L+3-3L-3-3L-3+5L-5+5"></path></svg>}
              delay={0.6}
            />
            <SocialIcon
              url="mailto:me@snowyjs.lol"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-white' viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" /><path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" /></svg>}
              delay={0.7}
            />
			<SocialIcon
              url="https://stats.fm/snowyh1"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"/><path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"/></svg>}
              delay={0.8}
            />
			<SocialIcon
              url="https://steamcommunity.com/id/snowyjs"
              icon={<img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" alt="Steam Logo" className="w-7 h-7"/>}
              delay={0.9}
            />
			<SocialIcon
              url="https://tracker.gg/valorant/profile/riot/toke4fun%23000/overview"
              icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" data-v-9a2a1e28=""><path fill="#FF4454" d="m2.2 4 .1.1c.2.3 11.8 14.8 12.8 16v.1a.1.1 0 0 1-.1.1H8.8a.52.52 0 0 1-.4-.2c-.2-.2-4.4-5.4-6.3-7.9A.31.31 0 0 0 2 12V4.1a.349.349 0 0 1 .2-.1Zm19.8.2c0-.1-.1-.1-.1-.2h-.1l-.2.2c-.9 1.1-8.1 10.1-8.3 10.3l-.1.1c0 .1 0 .1.1.1h6.2c.1 0 .2-.1.3-.2l.2-.2c.5-.7 1.7-2.2 1.8-2.3 0-.1 0-.1.1-.2v-.1c.1-2.4.1-4.9.1-7.5Z"></path></svg>}
              delay={1}
            />
          </ul>
        </motion.div>
      </section>
    </>
  );
}
