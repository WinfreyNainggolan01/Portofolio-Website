"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    // Gunakan basePath dari runtime
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1.5, duration: 0.4, ease: "easeIn"
                    },
                }}
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2, duration: 0.4, ease: "easeInOut"
                        },
                    }}
                >
                    <div className="w-[218px] h-[218px] xl:w-[418px] xl:h-[418px] mix-blend-lighten absolute">
                        <Image
                            src={`${basePath}/assets/photo.png`}
                            priority
                            quality={100}
                            fill
                            unoptimized
                            alt="photo"
                            className="object-contain"
                        />
                    </div>
                </motion.div>

                {/* Circle */}
                <motion.svg
                    className="w-[222px] xl:w-[426px] h-[222px] xl:h-[446px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253" cy="253" r="250"
                        stroke="#16a34a"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
