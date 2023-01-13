import React from 'react'
import Images from '../assets/images'
import { useState,useEffect } from 'react';
import Articles from '../components/Articles';
import AniArticles from '../components/AniArticles';
import Slide  from '../components/Slide';
const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollcheck, setScrollcheck] = useState(false);
  const [localMousePos, setLocalMousePos] = useState({});
  const handleMouseMove = (event) => {
    // 👇 Get mouse position relative to element
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;

    setLocalMousePos({ x: localX, y: localY });
  };
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      scrollcheck?setScrollcheck(false):setScrollcheck(true)
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className='relative top-40 py-5 z-0'>
      <div className='thumb mx-auto w-1/2 h-[23rem]'>
        <div className='circle absolute rounded-[650px] opacity-[.97] blur-3xl mx-auto bg-circle-pattern w-[600px] h-[600px] backdrop-blur-sm'></div>
        <div className='Tittile w-1/2 absolute'>
          <h2 className='font-extrabold text-thBlack text-center font-Circularstd'>Your space to focus and get things done</h2>
          <p className='text-[20px] text-center'>Meet the new standard for modern task management</p>
          <div className='btn-area w-full absolute  left-[50%] translate-x-[-30%]  mt-5 flex'>
            <div className="btn1 px-10 py-3 bg-black hover:bg-thBlack w-fit rounded-lg text-white text-lg font-medium">Download desktop app</div>
            <div className="btn1 ml-6 px-5 py-3 bg-white w-fit rounded-lg text-black border-2 border-thBlack hover:border-white text-lg font-medium">Try in Browser</div>
          </div>
          <div className='flex absolute left-[50%] top-[170%] translate-x-[-50%] '>
            <a>
              <div className='uppercase font-bold'>with lifeat</div>
            </a>
            <a className='ml-10 '>
              <div className='uppercase font-bold'>without lifeat</div>
            </a>
          </div>
        </div>
      </div>
      <div className='item flex justify-center relative z-10'>
            <img src={Images.lap} alt="" className='relative ' />
            <img src={Images.face} alt="" className='absolute will-change-transform' style={{transform:`translate3d(${-scrollPosition/100}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,transformStyle: 'preserve-3d'}}/>
            <img src={Images.list} alt="" className='absolute will-change-transform' style={{transform:`translate3d(${scrollPosition/100}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,transformStyle: 'preserve-3d'}}/>
      </div>
      <div className='brand_ads py-40'>
        <p className='text-4xl font-bold text-thBlack text-center'>Trusted by</p>
        <div className="logo_area flex justify-between w-full px-20 mt-5 ">
          <img src={Images.logo1} alt="" className='w-[141px] h-[80px]' />
          <img src={Images.logo2} alt="" className='w-[141px] h-[80px]' />
          <img src={Images.logo3} alt="" className='w-[141px] h-[80px]' />
          <img src={Images.logo4} alt="" className='w-[141px] h-[80px]' />
          <img src={Images.logo5} alt="" className='w-[141px] h-[80px]' />
        </div>
      </div>
      <div className='py-40'>
        <p className='text-4xl font-bold text-thBlack text-center'>How it works</p>
        <p className='text-[20px] text-center text-gray-500 pt-7'>Meet the new standard for modern task management</p>
      </div>
      <div className='pb-40'>
         <Articles scrollcheck={scrollPosition}/>
      </div>
      <div className='pt-40'>
        <AniArticles scrollcheck={scrollPosition} ymin={2400} ymax={2840} mousePos={localMousePos} src={Images.agif} tittle={'One-click to task and calendar'} content={'Quick access to your simple task management without leaving your flow'} reverse={{hidden:'hidden'}}/>
      </div>
      <div className='pt-40'>
        <AniArticles scrollcheck={scrollPosition} ymin={3140} ymax={3760} mousePos={localMousePos} src={Images.talk} src2={Images.circlebg} tittle={'Feel connected with others'} content={'Improve morale by experiencing digital spaces with your team or friends'} reverse={{col1:'col-[1]',col2:'col-[2]',row1:'row-[1]'}}/>
      </div>
      <div className='pt-40 pb-40'>
        <AniArticles scrollcheck={scrollPosition} ymin={3900} ymax={4450} mousePos={localMousePos} src={Images.time} src2={Images.circlebg} src3={Images.chart} tittle={'Track your productivity'} content={'10x your deep work flow by tracking your daily productivity time.'} />
      </div>
      <div className='pt-40 pb-16'>
        <p className='text-4xl font-bold text-thBlack text-center'>How others use LifeAt</p>
      </div>
      <div className='pb-40'>
        <Slide />
      </div>
    </div>
  )
}

export default Home