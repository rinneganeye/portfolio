import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Amey Shinde",
  description:
    "I am a cybersecurity professional with over a year of experience in web application security, vulnerability assessments, incident response, and digital forensics. I have a passion for safeguarding digital assets through continuous learning and a proactive approach to the ever-evolving threat landscape. Having worked with government bodies and private clients, I bring hands-on expertise in risk mitigation, security monitoring, and forensic analysis. I'm always eager to apply my skills in a collaborative environment and contribute to creating more secure systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
