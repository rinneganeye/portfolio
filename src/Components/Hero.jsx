"use client"
import Image from "next/image";
import { GoDownload } from "react-icons/go";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section id="hero" className="w-full px-6 flex h-[80vh] items-center justify-center gap-16">
            <div className="w-full md:w-1/2">
                <h1 class="text-3xl font-bold mb-3 md:text-4xl">Hello, I am <span className="text-gradient">Amey Shinde</span></h1>
                <h1 class="text-2xl font-bold mb-3 md:text-4xl">I am a <span className="text-gradient">
                    <TypeAnimation
                        sequence={[
                            'SOC Analyst',
                            1000,
                            'Security Researcher',
                            1000,
                            'Penetration Tester',
                            1000,

                        ]}
                        speed={40}
                        repeat={Infinity}
                    />
                </span></h1>
                <p class="text-gray-400 mb-6">
                    I am a cybersecurity professional with over a year of experience in web application security, vulnerability assessments, incident response, and digital forensics. I have a passion for safeguarding digital assets through continuous learning and a proactive approach to the ever-evolving threat landscape. Having worked with government bodies and private clients, I bring hands-on expertise in risk mitigation, security monitoring, and forensic analysis. {"I'm"} always eager to apply my skills in a collaborative environment and contribute to creating more secure systems.
                </p>
                <div className="flex items-center gap-10">

                    <a href="/Amey-Shinde-Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 py-1.5 rounded-sm border border-gray-200 hover:bg-text-gradient hover:text-teal-400 hover:border-teal-400 duration-200 ease-in-out">
                        <GoDownload />
                        Resume
                    </a>
                    <a href="https://www.linkedin.com/in/amey-shinde2001" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/social/linkedin.svg" alt="img" width={24} height={24} />
                    </a>
                    <a href="https://github.com/rinneganeye" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/social/github.svg" alt="img" width={24} height={24} />
                    </a>
                    <a href="https://tryhackme.com/p/amey" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/social/tryhackme.svg" alt="img" width={45} height={45} />
                    </a>

                </div>
            </div>
            <div className="relative grayscale hidden md:block md:w-2/6">
                <img src='./pfp2.jpeg' fill alt='profile picture' />
            </div>
        </section>
    );
}

export default Hero;