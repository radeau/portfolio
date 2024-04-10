import Image from "next/image";
import vectorJuice from '../public/images/ImageByVectorjuiceOnFreepik-2.png';
import cyan from '../public/images/cyan.png'
import yolk from '../public/images/yo.png'


export default function Home() {
  return (
    <section className="mx-8">
      <div className="text-2xl font-bold">
          {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          </div> */}
          <div className="text-center">
            <h1 className="mb-12 text-2xl font-bold tracking-tighter">Hey there, I am Rad 👋</h1>
          </div>
          <div className="my-12">
            <h2 className="font-extralight text-base text-justify">
            I'm a self-taught software developer with a passion for building creative and user-friendly applications. I started my coding journey out of curiosity and tinker how the website works, and haven't stopped learning since. I'm particularly interested in web development and enjoy the challenge of turning ideas into functional code.
            </h2>
          </div>
          <div className="flex justify-center">
            <Image
                  alt="Levitating man- transforming ideas into a program. Image by vectorjuice - Freepik"
                  src={vectorJuice}
                  // sizes="(max-width: 768px) 213px, 33vw"
                  width={350}
                  height={350}
                  priority
                  className="object-cover"
                />
          </div>
          <div className="my-12">
            <p className="text-base font-light">
              I appreciate you visiting my simple website. If you have any feedback or suggestion, kindly email me at kevinradp@gmail.com.
            </p>
          </div>
      </div>
    </section>
  );
}
