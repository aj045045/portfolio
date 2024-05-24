'use client'
import { motion } from "framer-motion";
export function WhoAmI() {
    return (
        <div className="w-11/12 mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}} className="my-6 text-sm md:text-md lg:text-lg text-slate-600 leading-6 tracking-wider [word-spacing:10px]">Hi there, my name is Ansh Yadav, often known as AJ, a passionate Web Developer and Freelance Programmer with a talent for turning ideas into digital realities. With a combination of technical knowledge and a good eye for design, I specialize in developing dynamic, responsive, and user-friendly websites that not only meet but surpass customer expectations.</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}} className="mt-6 text-lg md:text-xl lg:text-2xl leading-6 tracking-wider [word-spacing:10px]">My Journey</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}} className="mt-2 text-sm md:text-md lg:text-lg leading-6 text-slate-600 tracking-wider [word-spacing:10px]">My journey into the world of web programming began three years ago, motivated by a fascination with how the internet connects everyone. Since then, I&apos;ve developed my abilities through continual study and hands-on experience, working on a wide range of projects, from simple landing pages to big web applications.</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}} className="mt-6 text-lg md:text-xl lg:text-2xl leading-6 tracking-wider [word-spacing:10px]">What I Do</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}}>
                <div className="mt-4 text-sm md:text-md lg:text-lg leading-6 tracking-wider [word-spacing:10px]">Web Development:</div>
                <div className=" text-sm md:text-md lg:text-lg leading-6 text-slate-600 tracking-wider [word-spacing:10px]">I create powerful websites using cutting-edge technologies like HTML5, CSS3, JavaScript, and modern frameworks like React, Angular, and Vue.js. My development process ensures that your website is not only visually appealing, but also optimized for performance and SEO.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}}>
                <div className="mt-4 text-sm md:text-md lg:text-lg leading-6 tracking-wider [word-spacing:10px]">Freelancing Services:</div>
                <div className="text-sm md:text-md lg:text-lg leading-6 text-slate-600 tracking-wider [word-spacing:10px]"> As a freelancer, I provide adaptable and scalable online solutions that are suited to your specific company requirements. Whether you require a complete website upgrade or little adjustments, I am here to assist you reach your objectives.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}}>
                <div className="mt-4 text-sm md:text-md lg:text-lg leading-6 tracking-wider [word-spacing:10px]">E-commerce Solutions: </div>
                <div className="text-sm md:text-md lg:text-lg leading-6 text-slate-600 tracking-wider [word-spacing:10px]">Using tools like Magento, WooCommerce, and Shopify, I design smooth online shopping experiences. I ensure the seamless operation of your e-commerce website, from store setup to payment gateway integration.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}} className="mt-6 text-lg md:text-xl lg:text-2xl leading-6 tracking-wider [word-spacing:10px]">Why Choose Me?</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}}>
                <div className="mt-4 text-sm md:text-md lg:text-lg leading-6 tracking-wider [word-spacing:10px]">Custom Web Applications:</div>
                <div className="text-sm md:text-md lg:text-lg leading-6 text-slate-600 tracking-wider [word-spacing:10px]">Do you require something more customized&nbsp;? I create unique web applications that improve functionality and user experience by addressing particular business concerns.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}}>
                <div className="mt-4 text-sm md:text-md lg:text-lg leading-6 tracking-wider [word-spacing:10px]">Client-Centric Approach:</div>
                <div className="text-sm md:text-md lg:text-lg leading-6 text-slate-600 tracking-wider [word-spacing:10px]">My first concern is making sure you&apos;re happy. I collaborate closely with you to fully grasp your goals and vision before delivering solutions that support them.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}}>
                <div className="mt-4 text-sm md:text-md lg:text-lg leading-6 tracking-wider [word-spacing:10px]">Technical Proficiency: </div>
                <div className="text-sm md:text-md lg:text-lg leading-6 text-slate-600 tracking-wider [word-spacing:10px]">I&apos;m proficient in both front-end and back-end development, so I can handle anything from server-side coding to user interface design.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}}>
                <div className="mt-4 text-sm md:text-md lg:text-lg leading-6 tracking-wider [word-spacing:10px]">Continuous Improvement:</div>
                <div className="text-sm md:text-md lg:text-lg leading-6 text-slate-600 tracking-wider [word-spacing:10px]">Both the tech industry and I are constantly changing. I keep up with the newest developments in technology and fashion to offer innovative solutions.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay:1,duration:1}}>
                <div className="mt-4 text-sm md:text-md lg:text-lg leading-6 tracking-wider [word-spacing:10px]">Reliable and Timely Delivery: </div>
                <div className="text-sm md:text-md lg:text-lg leading-6 text-slate-600 tracking-wider [word-spacing:10px]">I am grateful for your time. I make sure your project is finished properly and on time by keeping to deadlines.</div>
            </motion.div>
        </div>
    );
}