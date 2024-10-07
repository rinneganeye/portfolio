import Certifications from "@/Components/Certifications";
import Contact from "@/Components/Contact";
import Experiecne from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Languages from "@/Components/Languages";
import Navbar from "@/Components/Navbar";
import Stack from "@/Components/Stack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-5 max-w-6xl mx-auto">
      <Navbar />
      <Hero />
      <Certifications />
      <Experiecne />
      <Languages />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
