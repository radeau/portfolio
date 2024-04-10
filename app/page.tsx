import Image from "next/image";
import vectorJuice from '../public/images/ImageByVectorjuiceOnFreepik-2.png';
import vectorJuice1 from '../public/images/ImageByVectorjuiceOnFreepik-1.png';


export default function Home() {
  return (
    <section className="mx-8">
      <div className="">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="text-center w-full sm:w-2/4">
              <h1 className="text-2xl font-light">Hi 👋, I'm Rad</h1>
              <p className="text-3xl font-bold text-3xl my-3">Creative Developer</p>
              <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg">
                Get my resume
              </button>
              {/* <p className="my-2 text-xs font-light text-gray-400">No. of Downloads: 888</p>  */}
            </div>
            <div className="w-2/4 hidden sm:flex">
              <Image
                    alt="Levitating man- transforming ideas into a program. Image by vectorjuice - Freepik"
                    src={vectorJuice}
                    width={350}
                    height={350}
                    priority
                    className="object-cover"
                  />
            </div>
          </div>

          <div className="my-5">
            <h2 className="mt-8 font-light text-base text-justify">
            I'm a self-taught software developer with a passion for building creative and user-friendly applications. I started my coding journey out of curiosity and tinker how the website works, and haven't stopped learning since. I'm particularly interested in web development and enjoy the challenge of turning ideas into functional code.
            </h2>
          </div>

          <div className="my-5 p-4">
            <a href="#" className="font-bold text-gray-700 text-2xl">Here's some of my Projects:</a>
            <div className="flex mt-4items-center justify-center">
              <a href="#" className="w-28 h-28 m-2 border border-teal-500 flex items-center justify-center text-center"><p className="font-bold text-gray-400 text-4xl">1</p></a>
              <a href="#" className="w-28 h-28 m-2 border border-teal-500 flex items-center justify-center text-center"><p className="font-bold text-gray-400 text-4xl">2</p></a>
              <a href="#" className="w-28 h-28 m-2 border border-teal-500 flex items-center justify-center text-center"><p className="font-bold text-gray-400 text-4xl">3</p></a>
              <a href="#" className="w-28 h-28 m-2 border border-teal-500 flex items-center justify-center text-center"><p className="font-bold text-gray-400 text-4xl">4</p></a>
            </div>
          </div>

          <div className="my-12 flex justify-center items-center text-center w-full h-56">
            <div className="w-2/4 ">
              <Image
                  alt="---"
                  src={vectorJuice1}
                  width={300}
                  height={300}
                  priority
                  className="object-cover"
                />
            </div>
            <div className="w-2/4 flex items-center justify-center">
              <p className="font-bold text-gray-600">You are my Visitor No.: 001</p>
            </div>
          </div>

          <div className="my-">
            <p className="font-light  text-base">
              I appreciate you visiting my simple website. If you have any feedback or suggestion, kindly email me at my <a href="mailto:kevinradp@gmail.com">Gmail</a> or
            </p>
          </div>

          <div className="my-5">
            <p className="font-bold text-gray-700 text-2xl">Let's connect:</p>
            <div className="">
              <ul className="flex flex-col sm:flex-row justify-evenly items-center py-4 text-left text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="icon w-4 h-4 mr-2">
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/>
                    </svg>
                    <a className="hover:underline hover:font-bold hover:text-lime-400" href="https://github.com/radeau" target="_blank"><span>Github</span> </a>
                  </li>
                  <li className="flex items-center ">
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="icon w-4 h-4 mr-2">
                        <path d="M420.3 470.3c8.7-6.3 12.9-16.7 12.9-31 .3-6.8-1.1-13.5-4.1-19.6-2.7-4.9-6.7-9-11.6-11.9a44.8 44.8 0 0 0-16.6-6c-6.4-1.2-12.9-1.8-19.3-1.7h-70.3v79.7h76.1c13.1.1 24.2-3.1 32.9-9.5zm11.8 72c-9.8-7.5-22.9-11.2-39.2-11.2h-81.8v94h80.2c7.5 0 14.4-.7 21.1-2.1a50.5 50.5 0 0 0 17.8-7.2c5.1-3.3 9.2-7.8 12.3-13.6 3-5.8 4.5-13.2 4.5-22.1 0-17.7-5-30.2-14.9-37.8zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm86.5 286.9h138.4v33.7H598.5v-33.7zM512 628.8a89.52 89.52 0 0 1-27 31c-11.8 8.2-24.9 14.2-38.8 17.7a167.4 167.4 0 0 1-44.6 5.7H236V342.1h161c16.3 0 31.1 1.5 44.6 4.3 13.4 2.8 24.8 7.6 34.4 14.1 9.5 6.5 17 15.2 22.3 26 5.2 10.7 7.9 24.1 7.9 40 0 17.2-3.9 31.4-11.7 42.9-7.9 11.5-19.3 20.8-34.8 28.1 21.1 6 36.6 16.7 46.8 31.7 10.4 15.2 15.5 33.4 15.5 54.8 0 17.4-3.3 32.3-10 44.8zM790.8 576H612.4c0 19.4 6.7 38 16.8 48 10.2 9.9 24.8 14.9 43.9 14.9 13.8 0 25.5-3.5 35.5-10.4 9.9-6.9 15.9-14.2 18.1-21.8h59.8c-9.6 29.7-24.2 50.9-44 63.7-19.6 12.8-43.6 19.2-71.5 19.2-19.5 0-37-3.2-52.7-9.3-15.1-5.9-28.7-14.9-39.9-26.5a121.2 121.2 0 0 1-25.1-41.2c-6.1-16.9-9.1-34.7-8.9-52.6 0-18.5 3.1-35.7 9.1-51.7 11.5-31.1 35.4-56 65.9-68.9 16.3-6.8 33.8-10.2 51.5-10 21 0 39.2 4 55 12.2a111.6 111.6 0 0 1 38.6 32.8c10.1 13.7 17.2 29.3 21.7 46.9 4.3 17.3 5.8 35.5 4.6 54.7zm-122-95.6c-10.8 0-19.9 1.9-26.9 5.6-7 3.7-12.8 8.3-17.2 13.6a48.4 48.4 0 0 0-9.1 17.4c-1.6 5.3-2.7 10.7-3.1 16.2H723c-1.6-17.3-7.6-30.1-15.6-39.1-8.4-8.9-21.9-13.7-38.6-13.7z"/>
                    </svg> 
                    <a className="hover:underline hover:font-bold hover:text-lime-400" href="#" target="_blank"><span>Behance</span> </a>
                  </li>
                  <li className="flex items-center">
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="icon w-4 h-4 mr-2">
                          <path d="M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.196-.161.313 0 .2.236.474.673.923 1.822 1.754 2.738 3.903 2.732 6.494-.007 2.867-.97 5.17-2.844 6.954-.394.353-.556.63-.557.867 0 .116.08.237.16.353.076.08.237.162.353.162.434 0 1.04-.512 1.833-1.509 1.542-1.89 2.24-3.978 2.279-6.824.036-2.847-.857-4.777-2.603-6.77-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824.791.997 1.398 1.51 1.832 1.509a.573.573 0 00.352-.162c.08-.116.16-.237.16-.353 0-.237-.162-.514-.556-.866-1.873-1.785-2.837-4.087-2.844-6.955-.006-2.591.91-4.74 2.732-6.494.437-.449.674-.722.673-.923 0-.117-.08-.233-.161-.313a.621.621 0 00-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386-.281-.18-2.001-1.5.402-5.423.466-.77 1.076-1.47 1.834-3.041 0 0 .67.946.32 2.998-.523 3.101 2.271 2.214 2.314 2.257.976 1.15-.808 3.17-.917 3.233-.108.061 5.096-3.13 1.399-7.935-.253.253-.582 1.442-1.267 1.266-.684-.174 2.125-3.494-2.868-7.468zM9.955 18.916c.023.016.038.024.038.024l-.038-.024z"/></svg>
                    <a className="hover:underline hover:font-bold hover:text-lime-400" href="#" target="_blank"><span className="">FreeCodeCamp</span> </a>
                  </li>
                  <li className="flex items-center">
                    <svg width="800px" height="800px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" className="icon w-4 h-4 mr-2" fill="none"><path stroke="#000000" strokeLinejoin="round" strokeWidth="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"/></svg>
                    <a className="hover:underline hover:font-bold hover:text-lime-400" href="mailto:kevinradp@gmail.com"><span className="">Gmail</span> </a>
                  </li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  );
}
