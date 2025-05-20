"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "DeLaundry",
    description: "Delaundry is a simple and easy-to-use system that helps students and laundry staff manage laundry services at IT Del. With Delaundry, students can place laundry orders, track their laundry status, manage payments, and submit complaints if needed. Admins can also manage student accounts, handle complaints, and oversee all laundry orders. This system makes laundry services faster, easier, and more organized for everyone.",
    stack: [{name: "Laravel"}, {name: "PHP"}, {name: "MySQL"}, {name: "Tailwind.css"}, {name: "HTML 3"}],
    image: `${basePath}/assets/project/delaundry1.png`,
    live: "",
    github: "https://github.com/WinfreyNainggolan01/DeLaundry",
  },
  {
    num: "02",
    category: "Backend",
    title: "BookShelf API",
    description: "BookShelf API is a RESTful API that allows users to manage their book collections. Users can add, update, delete, and retrieve books from their collections. The API is built using Node.js and Hapi js. The API is designed to be easy to use and scalable, making it a great choice for developers who want to build their own book management applications.",
    stack: [{name: "Node js"}, {name: "Hapi js"}],
    image: `${basePath}/assets/project/book-shelf-api.png`,
    live: "",
    github: "https://github.com/WinfreyNainggolan01/Final-Project-Simple-BookShelf-API",
  },
  {
    num: "03",
    category: "Backend",
    title: "Blog Website API",
    description: "Blog Website API is a RESTful API that allows users to manage their blog posts. Users can create, update, delete, and retrieve blog posts. The API is built using Node.js and Hapi js. The API is designed to be easy to use and scalable, making it a great choice for developers who want to build their own blog applications.",
    stack: [{name: "Node js"}, {name: "Hapi js"}],
    image: `${basePath}/assets/project/blog-api.png`,
    live: "",
    github: "https://github.com/WinfreyNainggolan01/Blog-Website-API",
  },
]


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    > 
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]  h-[50%]">
              {/* outline num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline text-white">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-green-600 transition-all duration-500 capitalize">
                {project.title} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-green-600">{item.name}
                      {/* remove the last common */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              <div className="flex gap-4">
                {/* Live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-green-600"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-green-600"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >{projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-green-600 hover:bg-green-500 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work