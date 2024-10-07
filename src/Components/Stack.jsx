import Image from "next/image";
import { tools } from "../../public/utils";

const Stack = () => {
    return (
        <section id="stack">
            <h1 className="text-4xl font-bold text-center pb-2 text-gradient">Stack</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-10 w-full justify-items-center p-10">
                {
                    tools.map(tool => {
                        return (
                            <>
                                <div key={tool.name} className="flex flex-col gap-2 justify-center items-center">
                                    <div className="relative w-14 h-14 md:w-16 md:h-16 ">
                                        <Image src={tool.icon} fill alt="image" />
                                    </div>
                                    <p className="text-center text-gray-300">{tool.name}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Stack;