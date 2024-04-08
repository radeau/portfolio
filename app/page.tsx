import Image from "next/image";
import harsch from '../public/images/pexels-harsch-shivam-2007647.jpg';
import julia from '../public/images/pexels-julia-m-cameron-4144179.jpg';
import mikh from '../public/images/pexels-mikhail-fesenko-9553905.jpg';
import thisis1 from '../public/images/pexels-thisisengineering-3861964.jpg';
import thisis2 from '../public/images/pexels-thisisengineering-3861976.jpg';

export default function Home() {
  return (
    <section className="mx-8">
      <div className="text-2xl font-bold">
          {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          </div> */}
          <div className="text-center">
            <h1 className="mb-12 text-2xl font-bold tracking-tighter">Hey there, I'm Rad 👋</h1>
          </div>
          <div className="my-12">
            <h2 className="font-extralight text-base">
            I'm a self-taught developer with a passion for building creative and user-friendly applications. I started my coding journey out of curiosity on how the website works, and haven't stopped learning since. I'm particularly interested in web development and enjoy the challenge of turning ideas into functional code.
            </h2>
          </div>
          <div className="my-12 columns-2 gap-4 sm:columns-3">
            <div className="relative mb-4 h-40">
              <Image
                alt="harsch"
                src={harsch}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative mb-4 h-80 sm:mb-0">
              <Image
                alt="julia"
                src={julia}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-[-16px] sm:object-center"
              />
            </div>
           <div className="relative h-40 sm:mb-4 sm:h-80">
              <Image
                alt="mikh"
                src={mikh}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-top sm:object-center"
              />
            </div>
            <div className="relative mb-4 h-40 sm:mb-0">
              <Image
                alt="thisis1"
                src={thisis1}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative mb-4 h-40">
              <Image
                alt="thisis2"
                src={thisis2}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80">
              <Image
                alt="harsch"
                src={harsch}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="my-12">
            <p className="text-base font-light">
              I create experiences that people find easy to enjoy.
            </p>
          </div>
      </div>
    </section>
  );
}
