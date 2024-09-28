import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='flex justify-center items-center flex-col p-[1rem] '>
        {
            ['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] rounded-full bg-[#cbcbcb] m-[5px] transition-all delay-150 ease-in-out hover:bg-secondary"
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                />
            ))
        }
    </div>
  )
}

export default NavigationDots