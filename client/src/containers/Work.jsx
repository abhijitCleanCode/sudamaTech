import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
// import { MotionWrap } from '../wrapper';
import { urlFor, client } from '../client';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className='text-[2.75rem] font-[800] text-center color-black capitalize'>My creative <span className='text-[5rem] text-[2.5rem] md:text-[5rem] text-secondary'>Portfolio</span> section</h2>

      <div className='flex flex-row justify-center items-center flex-wrap mt-[4rem] mb-0 mx-[2rem]'>
        {
          ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`m-[0.5rem] py-[0.5rem] px-[1rem] rounded-[10px] bg-white text-black font-[800] cursor-pointer transition-all delay-150 ease-in-out hover:bg-secondary hover:text-white flex justify-center items-center text-center capitalize`}
            >
              {item}
            </div>
          ))
        }
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='flex flex-wrap justify-center items-center'
      >
        {
          filterWork.map((work, index) => (
            <div className='flex flex-col justify-center items-center m-[2rem] p-[1rem] rounded-[0.5rem] bg-[#fff] text-[#000] cursor-pointer transition-all delay-150 ease hover:shadow-md w-full md:w-[470px] md:p-[1.25rem] md:rounded-[0.75rem]'>
              <div className='flex justify-center items-center w-full h-[230px] md:h-[350px] relative'>
                <img src={urlFor(work.imgUrl)} alt={work.name} className='w-full h-full rounded-[0.5rem] object-cover' />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/10 rounded-[0.5rem] opacity-0 transition-all delay-150 ease'
                >
                  <a href={work.projectLink} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="w-10 h-10 rounded-full bg-black text-white m-[1rem] font-bold cursor-pointer transition-all delay-150 ease flex justify-center items-center">
                      <AiFillEye className='w-1/2 h-1/2 text-white' size={24}/>
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="w-10 h-10 rounded-full bg-black text-white m-[1rem] font-bold cursor-pointer transition-all delay-150 ease flex justify-center items-center">
                      <AiFillGithub className='w-1/2 h-1/2 text-white' size={24}/>
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className='p-[0.5rem] w-full relative flex flex-col justify-center items-center'>
                <h3 className="text-[25px] md:text-[50px] font-[700] text-center text-[##14183E] capitalize leading-10 mt-[1rem] md:mt-[3rem]">{work.title}</h3>
                <p className="text-[18px] md:text-[1.2rem] text-left text-[#5E6282] leading-6 pt-2">{work.description}</p>

                <div className='absolute py-[0.5rem] px-[1rem] rounded-[10px] bg-white -top-[25px] flex justify-center items-center'>
                  <p className="text-[1.75rem] md:text-[0.8rem] text-left text-gray leading-6">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))
        }
      </motion.div>
    </>
  )
}

export default Work