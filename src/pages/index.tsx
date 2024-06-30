import Head from "next/head";
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import Navbar from "@/components/Navbar";
import Hero from "@/components/index/Hero";
import About from "@/components/index/About";
import Projects from "@/components/index/Projects";
import Footer from "@/components/index/Footer";

export default function Home() {
  const [contentVisible, setContentVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <title>snowy.codes</title>
        <link href="https://unpkg.com/pattern.css@1.0.0/dist/pattern.min.css" rel="stylesheet" />
        <meta name="description" content="Snowy's Personal Site" />
        <meta property="og:image" content="../../main.jpy" />
        <meta property='theme-color' content='#17171a' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-screen bg-background">
        <Navbar />
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="snowflakes" aria-hidden="true">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="snowflake">❅</div>
            ))}
          </div>
        </motion.div>
        <main className="relative z-10 flex h-screen flex-col justify-center pattern-grid-lg text-primary overflow-x-hidden px-6">
          <div className="max-w-5xl w-full mx-auto text-center">
            <motion.h1
              className="text-white font-bold sm:text-6xl text-4xl font-leaguespartan"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              HellO! I am snowyjs 👋
            </motion.h1>
            {!contentVisible && (
              <motion.button
                className="mt-8 px-4 py-2 text-lg text-white bg-secondary rounded-md"
                onClick={() => setContentVisible(true)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Load More
              </motion.button>
            )}
            {contentVisible && (
              <div>
                <Hero inView={inView} descRef={ref} />
                <About />
                <Projects />
                <Footer />
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
