'use client'
import { Pill, Hero, WhoAmI, Service, About, ProjectLeft, ProjectRight, Education, Skill, Contact } from "@/components";
import { FaReddit, FaServer } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import { motion } from "framer-motion";
function MainLayout() {

  interface ProjectInterface {
    type: string;
    data: string;
    info: string;
  }

  interface SkillInterface {
    label: string;
    value: number;
  }

  interface ContactInterface {
    image: any;
    data: string;
    link: string;
  }

  const ProjectData: ProjectInterface[] = [
    {
      type: "Web Development", data: "Department of computer science information system", info: "The Department of Computer Science and Information Systems studies computing technologies and their applications in a variety of fields.It provides training and research opportunities in data management, network security, software engineering, and artificial intelligence.Students develop practical abilities for solving complicated problems in the digital world."
    }
    ,
    {
      type: "Web Development", data: "Institute of Computer Science and Information Systems", info: "The Institute of Computer Science and Information Systems provides a wide range of courses and research opportunities in computing technology.From data administration to artificial intelligence, students learn practical skills for dealing with difficult challenges in today's digital world. Explore our programmes and help shape the future of technology."
    },
    {
      type: "Web Development", data: "Internal Assessment Tracking System", info: "The Internal Assessment tracking System (IATS) is a web-based platform that simplifies and automates the process of monitoring internal assessments within an organisation.IATS improves efficiency and accuracy through features such as data entry, progress monitoring, and reporting, ultimately improving overall assessment management."
    },
    {
      type: "Web Development", data: "Gender Bias Identification System", info: "At GenderBiasCheck, we recognize that gender bias can reach all kinds of media, influencing views and propagating stereotypes. Our objective is to help developers, content creators, and businesses recognise and overcome these biases, enabling a more fair digital world."
    },
    {
      type: "Android Development", data: "Student Register app", info: "An Android app for registering student information and providing login utilizing Flask as a server and Android as the front-end language, using MongoDB."
    }
  ]

  const SkillData: SkillInterface[] = [
    { label: "HTML", value: 40 },
    { label: "Bootstrap", value: 80 },
    { label: "C", value: 70 },
    { label: "C++", value: 80 },
    { label: "Tailwindcss", value: 90 },
    { label: "JS", value: 75 },
    { label: "Jquery", value: 30 },
    { label: "PHP", value: 70 },
    { label: "Laravel", value: 40 },
    { label: "NextJS", value: 85 },
    { label: "Python", value: 75 },
    { label: "Flask", value: 85 },
    { label: "MongoDB", value: 65 },
    { label: "Android", value: 55 },
  ]

  const ContactData: ContactInterface[] = [
    { image: <SiGmail />, data: "aj045054@gmail.com", link: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQqQsTkDsNHNRtVXVKkglLgmVxVqPpQQCMwNMpvbZwffPMntTgpPSCmJKlgrSqlzprJsL" },
    { image: <FaLinkedin />, data: "linkedin", link: "https://www.linkedin.com/in/ansh-yadav-0ab92424b/" },
    { image: <SiFreelancer />, data: "freelancer", link: "https://www.freelancer.com/u/aj045045" },
    { image: <FaGithub />, data: "github", link: "https://github.com/aj045045" },
    { image: <FaSquareUpwork />, data: "upwork", link: "https://www.upwork.com/freelancers/~018e849af24e0a3fc4" },
    { image: <FaXTwitter />, data: "twitter", link: "https://x.com/aj045045" },
    { image: <FaReddit />, data: "reddit", link: "https://www.reddit.com/user/aj045045/" },
    { image: <FaLocationDot />, data: "Ahmedabad, Gujarat", link: "https://maps.app.goo.gl/o4g367UQLkTXHabDA" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1
      }
    }
  }

  return (
    <>
      <Hero />
      <hr className="invisible pt-20 md:pt-10" />
      <Pill id="who am i ?" data="Who am I ? " />
      <WhoAmI />
      <Pill data="About" id="about" />
      <About />
      <Pill data="Services" id="services" />
      <ServiceData />
      <Pill data="Project" id="projects" />
      <div className="space space-y-10">
        {ProjectData.map((value, index) => (
          <motion.div variants={container} initial="hidden" whileInView="show" key={index} >
            {index % 2 == 0 || index == 0 ?
              <ProjectLeft type={value.type} key={index} data={value.data} info={value.info} />
              :
              <ProjectRight type={value.type} data={value.data} key={index} info={value.info} />
            }
          </motion.div>
        ))}
      </div>
      <Pill data="Skills" id="skills" />
      <motion.div initial={{ opacity: 0,y:100 }} whileInView={{ opacity: 1,y:0 }} transition={{ delay: 2, duration: 2 }} className="grid md:grid-cols-2 grid-cols-1 justify-items-center space-y-5 items-center ">
        {SkillData.map((value, index) => (
          <Skill label={value.label} key={index} value={value.value} />
        ))}
      </motion.div>
      <Pill data="Education" id="education" />
      <Education />
      <Pill data="Contact" id="contact" />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:w-1/2 mx-auto w-fit lg:w-3/4 my-10 space-y-3">
        {ContactData.map((value, index) => (
          <Contact data={value.data} key={index} image={value.image} link={value.link} />
        ))}
      </div>
    </>
  );
}

function ServiceData() {
  interface IconInterface {
    icon: React.ReactElement;
    data: string;
  };
  const iconData: IconInterface[] = [
    { icon: <FaCode />, data: "Front-End Development" },
    { icon: <FaServer />, data: "Back-End Development" },
    { icon: <MdBusinessCenter />, data: "E-Commerce Solutions" },
    { icon: <MdIntegrationInstructions />, data: "Platform Integration" },
    { icon: <GrVmMaintenance />, data: "Website Maintenance" },
    { icon: <TbSeo />, data: "SEO and Digital Marketing" },
    { icon: <MdManageAccounts />, data: "Project Management" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren:1
      }
    }
  }
  return (
    <motion.ul variants={container} initial="hidden" whileInView="show" className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 justify-items-center items-center ">
      {iconData.map((value, index) => (
        <Service icon={value.icon} data={value.data} key={index} />
      ))}
    </motion.ul>
  )
}

export default MainLayout;
