import React from "react";

const Navbar = ()=>
{
    return(
        <nav
          className="m-0 absolute top-[32px] left-[440px] flex flex-row items-center justify-between
           gap-[32px] text-left text-xl text-dimgray-200 font-work-sans"
          id="navbar"
        >
          <div className="relative leading-[150%] font-semibold text-5xl">Home</div>
          <div className="relative leading-[150%] font-semibold text-5xl">Work</div>
          <div className="relative leading-[150%] font-semibold text-5xl">
            Testimonials
          </div>
          <div className="relative leading-[150%] font-semibold text-5xl">About</div>
        </nav>
    );
}

export default Navbar;