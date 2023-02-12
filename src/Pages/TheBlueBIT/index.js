import React from 'react'
import { Navbar } from './Navbar'
import { MainContent } from './MainContent'
import { Price } from './Price'
import { TimeLine } from "./TimeLine"
import "./thebluebit.css"

export const TheBlueBIT = () => {
    return (
        <>
            <div className='relative text-white flex justify-center items-center w-screen h-screen' style={{ background: "#201f30" }} >
                <div className="absolute left-0 w-3/12 h-full bg-sky-600 opacity-100"></div>
                <div className="z-10 w-10/12 h-5/6 rounded-2xl drop-shadow-2xl overflow-y-auto" style={{ background: "#201f24" }}>
                    <Navbar />
                    <MainContent />
                    <Price />
                    <TimeLine />
                </div>

            </div>
        </>
    )
}
