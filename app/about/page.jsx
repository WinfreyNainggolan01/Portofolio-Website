"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+62 812 3456 7890",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "winfreynggolan23@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    value: "Jl. Kebon Jeruk No. 123, Jakarta Barat",
  },
]

const Contact = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}
    className="py-6"
    >
      <div className="container mx-auto py-8">
        <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-green-600">
                Let's work together
              </h3>
              <p className="text-white/60">
                lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">info</div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact