import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip'
import { motion } from 'framer-motion';
import { urlFor, client } from '../client';

const Skills = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const skillQuery = '*[_type == "skills"]';

    client.fetch(experienceQuery)
      .then((data) => {
        setExperience(data);
      });
    client.fetch(skillQuery)
      .then((data) => {
        setSkills(data);
      });
  }, []);

  return (
    <>
      <h2 className='text-[2.75rem] font-[800] text-center color-black capitalize'>Skills & Experiences</h2>

      <div className='w-full md:w-4/5 mt-[3rem] flex flex-col md:flex-row mx-auto'>
        <motion.div className='flex-1 flex flex-wrap justify-center md:justify-start items-center md:items-start mr-0 md:mr-[5rem] '>
          {
            skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='text-center m-[1rem] transition-all delay-150 ease-in-out flex flex-col justify-center items-center'
              >
                <div className='w-[90px] md:w-[150px] h-[90px] md:h-[150px] rounded-full bg-[#fef4f5] flex justify-center items-center hover:shadow-md' style={{ backgroundColor: skill.bgColor }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} className='w-1/2 h-1/2' />
                </div>
                <p className="font-medium mt-[0.5rem] text-[1.75rem] md:text-[0.8rem] text-left text-gray leading-6 pt-2">{skill.name}</p>
              </motion.div>
            ))
          }
        </motion.div>

        <div className='flex-1 flex justify-start items-start flex-col mt-[2rem] md:mt-0'>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='w-full flex flex-col justify-start items-start'
          >
            <h3 className='text-[1.75rem] font-[800] text-center color-black capitalize'>Sudama Tech Sol</h3>
            <p className='text-[1.75rem] font-medium text-left text-gray leading-8 pt-2'>Sudama Tech Solutions Pvt. Ltd. is a dynamic company dedicated to providing comprehensive technical support tailored for small businesses. With a focus on delivering reliable IT solutions, we offer services that include system troubleshooting, network management, cybersecurity, and software integration to ensure seamless operations for growing enterprises. Our expert team is committed to helping businesses optimize their technological infrastructure, improve productivity, and stay competitive in an increasingly digital landscape. At Sudama Tech Solutions, we prioritize customer satisfaction by offering affordable, scalable, and personalized solutions that address the unique needs of small businesses.</p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Skills