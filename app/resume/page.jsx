"use client";

import { Info } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaMobile,
  FaDatabase,
  FaLaravel
} from "react-icons/fa";

// import {
//   SiTailwindcss, SiNextdotjs
// } from "react-icons/fa";

// about data
const about = {
  title: "About Me",
  description:"I am a passionate and detail-oriented individual with over 3 years of experience in the tech industry. My journey has equipped me with solid skills in software development and problem-solving. I thrive in collaborative environments, and I'm always eager to learn and take on new challenges. With a strong foundation in communication and technical knowledge, I'm committed to delivering impactful and user-focused solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Winfrey Nainggolan"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 812-3456-7890"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian"
    },
    {
      fieldName: "Email",
      fieldValue: "winfreynggolan23@gmail.com"
    },
    {
      fieldName: "Languanges",
      fieldValue: "Indonesian, English"
    },
  ]
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "I have diverse experiences in application development and education. During my internship as an Application Developer, I was actively involved in building efficient and high-quality software solutions. Additionally, my roles as a teaching assistant strengthened my technical communication skills and deepened my understanding of algorithm concepts and procedural programming.",
  items: [
    {
      company: "PT Tera Multi Wahana",
      position: "Application Developer Intern",
      duration: "2025 January - Present",
    },
    {
      company: "Del Institute of Technology",
      position: "Algorithm and Data Structure Teaching Assistant",
      duration: "2024 August - 2024 December",
    },
    {
      company: "Del Institute of Technology",
      position: "Procedural Programming Teaching Assistant",
      duration: "2024 January - 2024 May",
    },
  ]
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "My educational background reflects a strong commitment to continuous learning and technical growth. As an undergraduate student majoring in Information Systems, I have built a solid foundation in both software development and systems analysis. Additionally, through reputable online academies such as Cisco Networking Academy and Dicoding, I have expanded my skills in JavaScript and back-end development to stay up-to-date with current industry standards.",
  items: [
    {
      institution: "Del Institute of Technology",
      degree: "Undergraduate Information System",
      duration: "2022 July - Present",
    },
    {
      institution: "Cisco Networking Academy",
      degree: "JavaScript Essentials 2",
      duration: "2025 April",
    },
    {
      institution: "Dicoding Academy",
      degree: "Basics of JavaScript Programming",
      duration: "2024 August",
    },
    {
      institution: "Dicoding Academy",
      degree: "Build Beginner Back-End Applications",
      duration: "2024 June",
    },
    
  ]
};

// skills data
const skills = {
  title: "My Skills",
  description: "Throughout my learning and project experience, I have developed a strong foundation in both front-end and back-end technologies. I am proficient in creating responsive user interfaces, building scalable backend systems, and managing databases. My skill set spans modern frameworks and tools that are essential for full-stack development, allowing me to deliver efficient and well-structured digital solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5,"
    },
    {
      icon: <FaCss3 />,
      name: "Css 3,"
    },
    {
      icon: <FaJs />,
      name: "Javascript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    // {
    //   icon: <SiTailwindcss />,
    //   name: "tailwind.css"
    // },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <FaMobile />,
      name: "Flutter"
    },
    {
      icon: <FaDatabase />,
      name: "SQL Server"
    },
    {
      icon: <FaLaravel />,
      name: "Laravel"
    },

  ]
};


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 2.4, duration: 0.4, ease:"easeIn"
        },
      }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto py-8">
          <Tabs 
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=> {
                      return (
                        <li key={index}
                          className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-start items-start lg:items-start gap-1">
                          <span className="text-green-500">{item.duration}</span>
                          <h3 className="text-lg max-w[260px] min-h-[60px] text-center align-top lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-green-600"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

             {/* education */}
             <TabsContent value="education" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=> {
                      return (
                        <li key={index}
                          className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-start items-start lg:items-start gap-1">
                          <span className="text-green-500">{item.duration}</span>
                          <h3 className="text-lg max-w[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-green-600"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

             {/* skills */}
             <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                {/* </div> */}
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-green-600 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

             {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-m-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index}>
                        <span className="text-white/60">{item.fieldName} </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
          </Tabs>

        </div>
    </motion.div>
  );
}

export default Resume