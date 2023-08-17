import Image from 'next/image'
import { FaAngleLeft, FaBars } from 'react-icons/fa';
import { Questrial } from 'next/font/google'



const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"/>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/* footer */}
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      {/* main content */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className='bg-pink-100 w-96 p-6 text-center shadow-lg'>
          <nav className="flex items-center justify-between mb-8">
            <div className="bg-white flex items-center justify-center w-10 h-10 rounded-3xl leading-10 shadow-lg">
              <FaAngleLeft className="fill-pink-400 w-5 h-5"/>
            </div>
            <div className="bg-white flex items-center justify-center w-10 h-10 rounded-3xl leading-10 shadow-lg">
              <FaBars className="fill-pink-400 w-5 h-5"/>
            </div>
          </nav>
          <div className="flex justify-center">
            <Image
              src="/468-thumbnail.png"
              alt="pic"
              width={300}
              height={300}
              priority
              className="w-56 dark:invert rounded-lg shadow-lg border-2 border-black"
            />
          </div>
          <div className={`${questrial.className} mt-5`}>
            <h1 className='font-bold text-2xl'> Despacito </h1>
            <p> Perfume </p>
          </div>
        </div>
      </div>
    </main>
  )
}
