'use client'

import Image from 'next/image'
import { FaBackward, FaForward, FaPlay, FaPause, FaHome } from 'react-icons/fa';
import { Questrial } from 'next/font/google'
import { useState, useEffect } from 'react'
import { useAnimation, motion } from "framer-motion"

const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
})

const gifSources = {
  playing: '/clubpenguindance.gif', // GIF source when audio is playing
  paused: '/clubpenguindance-still.gif' // GIF source when audio is paused
};

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [gifSource, setGifSource] = useState(gifSources.paused);

  const handlePlayClick = () => {
    const audioElement = document.getElementById('audio-element') as HTMLAudioElement;

    if (audioElement) {
      if (!isPlaying) {
        audioElement.play();
        setGifSource(gifSources.playing);
      } else {
        audioElement.pause();
        setGifSource(gifSources.paused);
      }

      setIsPlaying(!isPlaying);
    }
  };

  const handleBackwardClick = () => {
    const audioElement = document.getElementById('audio-element') as HTMLAudioElement;
  
    if (audioElement) {
      audioElement.currentTime -= 10; // Go back 10 seconds
    }
  };

  const handleForwardClick = () => {
    const audioElement = document.getElementById('audio-element') as HTMLAudioElement;
  
    if (audioElement) {
      audioElement.currentTime += 10; // Go forward 10 seconds
    }
  };

  useEffect(() => {
    const audioElement = document.getElementById('audio-element') as HTMLAudioElement;
  
    if (audioElement) {
      const updateTime = () => {
        const newPosition = (audioElement.currentTime / audioElement.duration) * 100;
        setSliderPosition(newPosition);
      };
      
      audioElement.addEventListener('timeupdate', updateTime);
      
      return () => {
        audioElement.removeEventListener('timeupdate', updateTime);
      };
    }
  }, []);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audioElement = document.getElementById('audio-element') as HTMLAudioElement;
    
    if (audioElement) {
      const newPosition = parseFloat(event.target.value);
      const newTime = (newPosition / 100) * audioElement.duration;
      audioElement.currentTime = newTime;
      setSliderPosition(newPosition);
    }
  };

  const rotationVariants = {
    playing: {
      rotate: [0,360],
      transition: {
        duration: 10,
        repeat: Infinity, // Adding repeat property for infinite repetition
        ease: "linear",
      },
    },
    paused: {
      rotate: 0,
      transition: {
        duration: Infinity
,        ease: "linear"
      },
    },
  };

  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24">
      {/* main content */}
      <motion.div 
        className="mb-32 grid text-center"
        animate={isPlaying ? "playing" : "paused"}
        variants={rotationVariants}
      >
        <div className='rounded-lg bg-pink-100 w-96 p-6 text-center shadow-inner'>
          <div className="mt-10 flex justify-center h-48">
            <Image
              src={gifSource}
              alt="pic"
              width={274}
              height={222}
              priority
              className="w-56 bg-white dark:invert rounded-lg shadow-lg"
            />
          </div>
          {/* Song Info */}
          <div className={`${questrial.className} mt-5`}>
            <h1 className='font-semibold text-xl'> ee oh </h1>
            <p className='text-sm'> ohhhhhh </p>
          </div>
          {/* Player */}
          <div className="flex justify-center">
            <audio 
              // controls 
              id="audio-element"
            >
              <source src="WhatsApp Audio 2023-08-15 at 8.31.48 AM.mpeg" type='audio/mpeg'/>
            </audio>
          </div>
          <input 
            type='range' 
            id="progress"
            value={sliderPosition}
            onInput={handleSliderChange}
            /> 
          {/* Controls */}
          <div className="flex justify-center items-center">
            <motion.div 
              className="w-16 h-16 m-5 bg-white inline-flex items-center justify-center rounded-full shadow-lg cursor-pointer"
              onClick={handleBackwardClick}
              whileTap={{ scale: 0.87 }}
            >
              <FaBackward className="fill-pink-400"/>
            </motion.div>
            <motion.div 
              className="w-16 h-16 m-5 bg-white inline-flex items-center justify-center rounded-full shadow-lg cursor-pointer" 
              onClick={handlePlayClick}
              whileTap={{ scale: 0.87 }}
            >
                {isPlaying ? <FaPause className="fill-pink-400" /> : <FaPlay className="fill-pink-400" />}
            </motion.div>
            <motion.div 
              className="w-16 h-16 m-5 bg-white inline-flex items-center justify-center rounded-full shadow-lg cursor-pointer"
              onClick={handleForwardClick}
              whileTap={{ scale: 0.87 }}
            >
              <FaForward className="fill-pink-400"/>
            </motion.div>
          </div>
        </div>
      </motion.div>

       
      {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

          <div className={`${questrial.className} mt-5`}>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/joja.svg"
                alt="joja"
                className="dark:invert"
                width={60}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}

        {/* <div className={`${questrial.className} flex flex-row items-center space-x-2`}>
          <h1>by</h1>
          <Image
                src="/joja.svg"
                alt="joja"
                className="dark:invert"
                width={50}
                height={24}
                priority
          />
        </div> */}
    </main>
  )
}
