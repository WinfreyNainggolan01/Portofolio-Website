import Link from "next/link";

import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/WinfreyNainggolan01"},
    { icon: <FaLinkedin />, path: "https://linkedin.com/in/winfreynainggolan"},
    { icon: <FaInstagram />, path: "https://www.instagram.com/winfreyng_"},
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link href={item.path} key={index} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Socials;