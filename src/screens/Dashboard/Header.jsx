import React from "react";
import { DownArrow1 } from "../../icons/DownArrow1";
import { SevenBell1 } from "../../icons/SevenBell1";

export const Header = () => (
  <div className="absolute w-[1451px] h-[100px] top-0 left-0">
    <img
      className="absolute w-[1140px] h-px top-[100px] left-[300px] object-cover"
      alt="Rectangle"
      src="https://c.animaapp.com/mbicircspG0xKp/img/rectangle-220.svg"
    />
    <div className="absolute w-[1451px] h-[100px] top-0 left-0 bg-white border border-solid border-[#eaecf0]" />
    <div className="inline-flex items-start gap-[43px] absolute top-10 left-[239px]">
      <div className="relative w-[119px] h-[26px] mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-[#0f2f64] text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
        About Us
      </div>
      <div className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-text-darker text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
        Location
      </div>
      <div className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-text-darker text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
        Health News
      </div>
      <div className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-text-darker text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
        Careers
      </div>
    </div>
    <div className="absolute w-[102px] h-[34px] top-[31px] left-[131px] [font-family:'Roboto',Helvetica] font-normal text-brand-primary text-[28px] tracking-[0] leading-9 whitespace-nowrap">
      Home
    </div>
    <div className="absolute w-[78px] h-[74px] top-[13px] left-[13px]">
      <div className="relative w-[73px] h-[74px]">
        
        <img
          className="absolute w-[70px] h-[70px]  left-[5px]"
          alt="Ellipse"
          src="./src/assets/Logo.png"
        />
      </div>
    </div>
    <div className="absolute w-[61px] h-15 top-[26px] left-[1120.79px] bg-[#8a7f75] rounded-[30.55px/24px]">
      <SevenBell1 className="!absolute !w-[31px] !h-6 !top-3 !left-[15px]" />
    </div>
    <div className="flex w-[221px] items-center justify-center gap-3 absolute top-[26px] left-[1189px]">
      <div className="relative w-12 h-12 rounded-[200px] [background:url(./src/assets/Kathryn.png)_50%_50%_/_cover]" />
      <div className="text-[#0f1728] text-[length:var(--heading-h3-font-size)] leading-[var(--heading-h3-line-height)] relative w-fit font-heading-h3 font-[number:var(--heading-h3-font-weight)] tracking-[var(--heading-h3-letter-spacing)] whitespace-nowrap [font-style:var(--heading-h3-font-style)]">
        Kathryn
      </div>
      <DownArrow1 className="!relative !w-6 !h-6" />
    </div>
  </div>
);