import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

{/*components*/}
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full py-8">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-15">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h2 mb-6">
              Hello I'm <br /> <span className="text-green-600">Winfrey Nainggolan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              As an Information System student at Del Institute of Technology, I have a deep enthusiasm for  
              <span className="text-green-600"> Data Engineer</span>,  
              <span className="text-green-600"> Web Development</span>, and  
              <span className="text-green-600"> Application Development</span>.  
              I enjoy solving complex problems and crafting scalable digital solutions.  
              With a mindset of continuous learning, I am eager to collaborate and bring innovative ideas to life!
            </p>

            {/* Button download CV*/}
            <div className="flex flex-col xl:flex-row items-center gap-8 pb-10">
            <a href="https://drive.google.com/file/d/1xFxHL6bPyFyD_2AX8KA55P4_q3eOSBsm/view?usp=drive_link">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 rounded-full"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>

              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-green-600 rounded-full flex justify-center items-center text-green-600 text-base hover:bg-green-600 hover:text-white transition-all duration-500"
                />
              </div>


            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;