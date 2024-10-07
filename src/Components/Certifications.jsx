'use client'
import Image from "next/image";
import { certs } from "../../public/utils";
import { motion } from "framer-motion";

const Certifications = () => {
    const certifications = [...certs, ...certs]
    return (
        <div id="certifications">
            <h1 className="text-4xl font-bold text-center pb-2 text-gradient">Certifications</h1>
            <div className="relative h-full overflow-hidden mx-auto w-full p-10">

                <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-gray-950 before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-gray-950 after:to-transparent after:filter after:blur-3"></div>

                <motion.div
                    className="flex"
                    animate={{
                        x: ['0%', '-100%'],
                        transition: {
                            ease: 'linear',
                            duration: 15,
                            repeat: Infinity,
                        }
                    }}
                >
                    {certifications.map((cert, index) => (
                        <div key={index} className="flex-shrink-0" style={{ width: `${100 / cert.length}%` }}>
                            <div className="relative w-20 h-20 md:w-28 md:h-28 mx-10">
                                <Image src={cert.img} fill alt="image" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Certifications;