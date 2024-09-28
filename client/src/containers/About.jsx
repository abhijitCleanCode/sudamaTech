import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from "../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);

  const addEllipsis = (text) => {
    if (text.length > 100) {
      return text.substring(0, 100) + '...';
    } else {
      return text;
    }
  }

  return (
    <>
      <h2 className='text-[2.75rem] font-[800] text-center color-black capitalize'>I Know that <span className='text-[5rem] text-[2.5rem] md:text-[5rem] text-secondary'>Good Apps</span> <br />means  <span className='text-[5rem] text-[2.5rem] md:text-[5rem] text-secondary'>Good Business</span></h2>

      <div className='w-full flex justify-center items-center flex-wrap'>
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              key={about.title + index}
              className='w-[190px] flex justify-start items-start flex-col m-[2rem] cursor-pointer shadow-md'
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} className='rounded-lg' />
              <h2 className='text-[1rem] font-[800] text-black text-left mt-[20px] mx-2'>{about.title}</h2>
              <p className='text-[1.75rem] md:text-[0.8rem] text-left text-gray line-1.5 mt-[20px] mx-2 pb-2'>{addEllipsis(about.description, 100)}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default About