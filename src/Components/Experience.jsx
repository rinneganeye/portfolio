'use client'
import { experience } from "../../public/utils";


const Experiecne = () => {
    return (
        <section id="experience">
            <h1 className="text-4xl font-bold text-center pb-2 text-gradient">Experience</h1>
            <div className="p-10">
                <div className="after:absolute after:inset-y-0 after:w-px  relative pl-6 after:left-0 grid gap-10 after:bg-gray-400/40">
                    {
                        experience.map(item => {
                            return (
                                <>
                                    <div key={item.title} className="grid gap-1 relative">
                                        <div className="aspect-square w-3 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 bg-gray-200" />
                                        <p className="text-lg md:text-xl font-bold text-gradient2">{item.title}</p>
                                        <p className="text-sm md:text-base text-white">{item.company}</p>
                                        <p className="text-xs md:text-sm">{item.period}</p>
                                        <p className="text-gray-400 text-sm md:text-base md:w-5/6">
                                            {item.description}
                                        </p>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
}

export default Experiecne;