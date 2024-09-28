import React from 'react';
import { NavigationDots } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`w-full h-[100vh] flex flex-row ${classNames}`}>

        <div className='flex-1 w-full h-full py-[4rem] px-[2rem] flex flex-col items-center justify-center'>
            <Component />
        </div>

        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap