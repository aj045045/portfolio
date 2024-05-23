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
      type: "Web Development", data: "Department of computer science information system", info: "The Department of Computer Science Information Systems focuses on the study of computing technologies and their application in various fields.It offers courses and research opportunities in areas such as data management, network security, software engineering, and artificial intelligence.Students gain practical skills to solve complex problems in the digital age."
    }
    ,
    {
      type: "Web Development", data: "Institute of Computer Science and Information Systems", info: "The Institute of Computer Science and Information Systems offers a comprehensive range of courses and researchopportunities in computing technology.From data management to artificial intelligence, students develop practical skills toaddress complex challenges in today's digital landscape. Explore our programs and join us in shaping the future oftechnology."
    },
    {
      type: "Web Development", data: "Internal Assessment Tracking System", info: "The Internal Assessment Tracking System (IATS) is a web-based platform designed to streamline and automate the process of tracking internal assessments within an organization.With features for data entry, progress monitoring, and reporting, IATS enhances efficiency and accuracy, ultimately improving overall assessment management."
    },
    {
      type: "Web Development", data: "Gender Bias Identification System", info: "At GenderBiasCheck, we understand that gender bias can subtly infiltrate all forms of media, affecting perceptions and perpetuating stereotypes. Our mission is to help developers, content creators, and businesses recognize and address these biases, fostering an equitable digital environment"
    },
    {
      type: "Android Development", data: "Student Register app", info: "A Android app to register student detail and provide login using flask as a server and android as front end language with mongodb"
    }
  ]

  const SkillData: SkillInterface[] = [
    { label: "HTML", value: 40 },
    { label: "Bootstrap", value: 95 },
    { label: "C", value: 60 },
    { label: "C++", value: 80 },
    { label: "Tailwindcss", value: 90 },
    { label: "JS", value: 75 },
    { label: "Jquery", value: 30 },
    { label: "PHP", value: 70 },
    { label: "Laravel", value: 40 },
    { label: "NextJS", value: 85 },
    { label: "Python", value: 65 },
    { label: "Flask", value: 85 },
    { label: "MongoDB", value: 55 },
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
  return (
    <>
      <Hero />
      <Pill id="who am i ?" data="Who am I ? " />
      <WhoAmI />
      <Pill data="About" id="about" />
      <About />
      <Pill data="Services" id="services" />
      <ServiceData />
      <Pill data="Project" id="projects" />
      <div className="space space-y-10">
        {ProjectData.map((value, index) => (
          <>
            {index % 2 == 0 || index == 0 ?
              <ProjectLeft type={value.type} key={index} data={value.data} info={value.info} />
              : <ProjectRight type={value.type} data={value.data} key={index} info={value.info} />
            }
          </>
        ))}
      </div>
      <Pill data="Skills" id="skills" />
      <div className="grid md:grid-cols-2 grid-cols-1 mx-20 space-y-5 items-center">
        {SkillData.map((value, index) => (
          <Skill label={value.label} key={index} value={value.value} />
        ))}
      </div>
      <Pill data="Education" id="education" />
      <Education />
      <Pill data="Contact Me" id="contact" />
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

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 justify-items-center items-center ">
      {iconData.map((value, index) => (
        <Service icon={value.icon} data={value.data} key={index} />
      ))}
    </div>
  )
}

export default MainLayout;
