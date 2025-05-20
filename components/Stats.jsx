"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Years of Experience",
    },
    {
        num: 5,
        text: "Projects Completed",
    },
    {
        num: 4,
        text: "Certifications",
    },
    // {
    //     num: 50,
    //     text: "Cups of Coffee",
    // },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div 
                            className="flex items-center gap-2 justify-center xl:justify-start"
                            key={index}
                        > 
                            <CountUp 
                                end={item.num} 
                                duration={4}
                                delay={2}
                                className="text-4xl xl:text-5xl font-semibold text-white"
                            />
                            <p
                                className={
                                    `${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`
                                }
                            >{item.text}</p>
                        </div>
                    )
                }
            
            )}
            </div>
        </div>
    </section>
  )
}

export default Stats