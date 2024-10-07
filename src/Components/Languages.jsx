import Image from "next/image";
import { languages } from "../../public/utils";

const Languages = () => {
    return (
        <section id="languages">
            <h1 className="text-4xl font-bold text-center pb-2 text-gradient">Languages</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-10 w-full justify-items-center p-10">
                {
                    languages.map(language => {
                        return (
                            <>
                                <div key={language.name} className="flex flex-col gap-2 justify-center items-center">
                                    <div className="relative w-14 h-14 md:w-16 md:h-16 ">
                                        <Image src={language.icon} fill alt="image" />
                                    </div>
                                    <p className="text-gray-300">{language.name}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Languages;