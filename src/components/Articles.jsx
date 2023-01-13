import React from 'react'
import 'animate.css';
import { useState,useEffect } from 'react';
import { Player, ControlBar } from 'video-react';
import Fade from 'react-reveal/Fade';
import Images from '../assets/images';
import videoposter from '../assets/images/videoposter.mp4';

const Articles = ({scrollcheck}) => {
  let y=0
  let opacity=0
  if(scrollcheck>1400 && scrollcheck <2000) 
    {
      y=0
      opacity=1
    }
  else 
    {
      y=48
      opacity=0
    }
  return (
    <div className='grid grid-cols-2 gap-x-18 mx-auto w-[90%] items-center justify-items-center'>
      <div className='set_overflowvideo relative w-[38rem] h-[27rem] overflow-hidden rounded-xl'>
          <div className='video_tag absolute w-[53rem] absolute left-[-7.5rem]'>
            <video autoPlay loop muted className='object-cover min-w-full h-full'>
              <source src={videoposter} type="video/mp4" />
            </video>
          </div>
      </div>
      <div className='content max-w-md h-fit'>
        <h2 className='font-bold text-6xl pb-6 text-thBlack will-change-transform transition ease-in-out delay-150 duration-700' style={{transform:`translate3d(0px,${y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,transformStyle: 'preserve-3d',opacity: `${opacity}`}}>Deep focus experiences</h2>  
        <p className='font-normal text-[21px] text-gray-500 py-4 will-change-transform transition ease-in-out delay-170 duration-1000' style={{transform:`translate3d(0px,${y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,transformStyle: 'preserve-3d',opacity: `${opacity}`}}>Immersive virtual experiences and pomodoro timer to get things done</p>
      </div>
    </div>
  )
}

export default Articles