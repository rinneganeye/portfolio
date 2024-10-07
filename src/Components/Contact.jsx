import { IoMdMail } from "react-icons/io"
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact">
            <h1 className="text-4xl font-bold text-center pb-2 text-gradient text-gradient">Contact</h1>
            <div className="text-gray-300 p-6 sm:p-10 flex flex-col py-7 gap-4 sm:flex-row sm:justify-evenly justify-center items-center">
                <div className="flex gap-2 items-center hover:text-rose-400 duration-150 ease-in-out">
                    <IoMdMail size={20} />
                    <a href="mailto:ameyswork@gmail.com" target="blank" className="text-lg hover:text-gradient2 duration-150 ease-in-out">ameyswork@gmail.com</a>
                </div>
                <div className="flex gap-2 items-center hover:text-green-500 duration-150 ease-in-out">
                    <FaLinkedinIn size={20} className="text-blue-500" />
                    <a href="https://www.linkedin.com/in/amey-shinde2001/" target="blank" className="text-lg hover:text-gradient2 duration-150 ease-in-out">www.linkedin.com/in/amey-shinde2001</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;