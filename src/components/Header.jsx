import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import Home from '../pages/Home'
import {
    BrowserRouter,
   RoutesFromElements,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
import Footer from './Footer';
const Header = ({checkmenu, setcheckmenu}) => {
    const menu=[
        {
            id: 1,
            name:'Explore'
        },
        {
            id: 2,
            name:'Usecases'
        },
        {
            id: 3,
            name:'Pricing'
        },
        {
            id: 4,
            name:'Careers'
        }
    ]
    return (
    <div>
        <div className='fixed w-full bg-[#f8f8f8] h-20 text-gray-700 z-30 mb-10'>
            <div className='flex flex-row justify-between items-center mx-auto px-6 h-full'>
                <div className='flex w-1/2 items-center '>
                    <h1 className='text-gray-700 font-medium tracking-widest text-2xl'>LifeAt</h1>
                    <input type="text" placeholder='Search a space' className='pl-3 pr-24 py-3 ml-3 focus:outline-none text-sm text-thBlack rounded-2xl w-[46%]' />
                </div>
                <div className='hidden lg:flex items-center'>
                    <ul className='flex'>
                    {menu.map(({id,name})=>(
                        <li key={id} className='p-4 text-sm font-medium cursor-pointer text-gray-700 hover:text-thOrange duration-200'>{name}</li>
                    ))}
                    </ul>
                    <div className='py-3 px-8 bg-black text-white rounded-[10rem] text-sm font-medium cursor-pointer'>Go to app</div>
                </div>
                <div onClick={()=>setcheckmenu(!checkmenu)} className='block lg:hidden text-gray-700'>
                    {
                        checkmenu?<FaTimes size={30}/>:<FaBars size={30}/>
                    }
                </div>
            </div>
        </div>
        {/* mobile-menu */}
        <div className={` w-full bg-black text-gray-700 absolute z-10 left-0 h-fit lg:hidden py-12 flex justify-center text-center duration-500 
                        ${checkmenu ? "top-20 rounded-2xl opacity-95" : "top-[-100%]"}`}>
            <ul>
                {menu.map(({id,name})=>(
                        <li key={id} className='p-4 uppercase cursor-pointer hover:text-thBlue duration-200'>{name}</li>
                ))}
            </ul>
            
        </div>
        {/* routing */}
        <Routes>
            <Route path="/*" element={<Home />} />
        </Routes>
        <div className='pt-40 py-16'>
            <Footer />
        </div>
    </div>
    )
}
export default Header