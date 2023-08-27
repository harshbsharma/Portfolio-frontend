import React from "react";
import {AiFillRightCircle} from "react-icons/ai";
const AboutMe = ()=>{
    return (
   
        <div className="absolute top-[174px] left-[70px] flex flex-col items-start justify-start gap-[40px]">
            <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="rounded-[10px] bg-peachpuff-100 flex flex-row py-3 px-6 items-center justify-center">
                    <div className="relative leading-[150%] font-semibold">
                    👋 Hello All
                    </div>
                </div>
                <p className="m-0 relative text-45xl tracking-[0.02em] leading-[125%] font-semibold font-eczar">
                    <span className="block">I’m Salman Khan,</span>
                    <span className="block">A Creative Designer</span>
                    <span className="block">and Storyteller</span>
                </p>
            </div>  


            <div className="flex flex-row items-start justify-start gap-[16px]">
                <button className="cursor-pointer [border:none] py-6 px-10 bg-slategray rounded-2xl w-[270px] h-[88px] flex flex-col box-border items-center justify-center">
                    <div className="flex flex-row items-center justify-start">
                        <div className="flex relative text-5xl leading-[150%] font-semibold font-work-sans text-ghostwhite">
                                View My Work
                                {/* <AiFillRightCircle/> */}
                        </div>
                                    {/* <img
                                        className="relative w-6 h-6"
                                        alt=""
                                        src="/chevronrightsquare.svg"
                                    /> */}
                        </div>
                </button>

                <button className="cursor-pointer py-6 px-10 bg-[transparent] rounded-2xl box-border w-[269px] flex flex-col items-center justify-center border-[4px] border-solid border-dimgray-100">
                        <div className="flex flex-row items-center justify-start">
                            <div className="relative text-5xl leading-[150%] font-semibold font-work-sans text-dimgray-100 text-left">
                                Contact Me
                            </div>
                        </div>
                </button>
            </div>

            <img className="absolute left-[650px] w-[524px] h-[660px] object-cover"
                alt=""
                src="/mainimage@2x.png"
            />
        </div>

    );
}

export default AboutMe;