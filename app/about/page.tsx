import About_Hero from "@/app/about/About_Hero";
import Contact from "@/app/about/Contact";
import Our_Mission from "@/app/about/Our_Mission";
import Our_Numbers from "@/app/about/Our_Numbers";
import Our_Story from "@/app/about/Our_Story";
import Our_Team from "@/app/about/Our_Team";
import Our_Values from "@/app/about/Our_Values";
import Vision from "@/app/about/Vision";

const About = () => {
  return (
    <main>
      <About_Hero/>
      <Our_Story/>
      <Our_Numbers/>
      <Our_Team/>
      <Our_Values/>
      <Our_Mission/>
      <Vision/>
      <Contact/>
    </main>
  );
};

export default About;
