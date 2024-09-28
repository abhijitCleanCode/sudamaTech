import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { urlFor, client } from '../client';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className='w-[60%] min-h-[320px] bg-white rounded-[15px] p-[2rem] transition-all delay-300 ease-in-out shadow-md flex flex-row justify-center items-center mx-auto'>
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} className='w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full object-cover'/>
            <div className='flex-1 h-full py-0 px-[2rem] text-left flex flex-col justify-around items-start'>
              <p className="text-[1.75rem] font-medium text-left text-black leading-[2rem] pt-2">{testimonials[currentIndex].feedback}</p>

              <div>
                <h1 className="text-[2.75rem] font-[800] text-center color-black capitalize">{testimonials[currentIndex].name}</h1>
                <p className="text-[1.75rem] font-medium text-left text-black leading-[2rem] pt-2">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-center items-center mt-[1rem]'>
            <div onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)} className='w-[50px] h-[50px] rounded-full bg-white m-[1rem] transition-all delay-300 ease-in-out flex justify-center items-center'>
              <HiChevronLeft size={30} />
            </div>

            <div onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)} className='w-[50px] h-[50px] rounded-full bg-white m-[1rem] transition-all delay-300 ease-in-out flex justify-center items-center'>
              <HiChevronRight size={30} />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Testimonial