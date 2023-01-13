import React from 'react'
import videoposter from '../assets/images/videoposter.mp4';
import Images from '../assets/images'
const AniArticles = ({scrollcheck,ymin,ymax,tittle,content,reverse,mousePos,src,src2,src3}) => {
    // console.log(src);
    let y=0
    let x=mousePos.x/100
    let opacity=0
    if(scrollcheck>ymin && scrollcheck <ymax) 
        {
        y=0
        opacity=1
        }
    else 
        {
        y=48
        opacity=0
        }
    if(x>7){
      x=5
    }
  return (
    <div className='grid grid-cols-2 mx-auto gap-x-18 w-[90%] items-center justify-items-center'>
      <div className={`content max-w-[30rem] h-fit ${reverse?.col2}`}>
        <h2 className='font-bold text-6xl pb-6 text-thBlack will-change-transform transition ease-in-out delay-150 duration-700' style={{transform:`translate3d(0px,${y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,transformStyle: 'preserve-3d',opacity: `${opacity}`}}>{tittle}</h2>  
        <p className='font-normal text-[21px] text-gray-500 py-4 will-change-transform transition ease-in-out delay-170 duration-1000' style={{transform:`translate3d(0px,${y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,transformStyle: 'preserve-3d',opacity: `${opacity}`}}>{content}</p>
      </div>
      <div className={`relative rounded-xl ${reverse?.col1} ${reverse?.row1}`}>
          <div className='gif_tag'>
            <img src={src2} alt="" className={`absolute will-change-transform transition duration-500 ${reverse?.hidden}`} style={{transform:`translate3d(${(x)*(-1)}rem,${(mousePos.y/100)*(-1)}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,transformStyle: 'preserve-3d'}}/>
            <img src={src3} alt="" className={`absolute will-change-transform transition duration-500 ${reverse?.hidden}`} style={{transform:`translate3d(${(x)-3}rem,${(mousePos.y/100)*(-1)-3}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,transformStyle: 'preserve-3d'}}/>
            <img src={src} alt="" className='w-[36rem] h-[39rem] will-change-transform transition duration-500' style={{transform:`translate3d(${(x)}rem,${mousePos.y/100}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,transformStyle: 'preserve-3d'}}/>
          </div>
      </div>
    </div>
  )
}

export default AniArticles