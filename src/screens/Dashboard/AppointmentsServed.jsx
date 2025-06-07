import React from "react";

export const AppointmentsServed = () => (
  <div className="absolute w-[300px] h-[200px] top-[132px] left-[961px] bg-white rounded-md">
    <div className="inline-flex items-center gap-[250px] absolute top-7 left-[29px]">
      <div className="relative w-fit mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#0f1728] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] whitespace-nowrap [font-style:var(--heading-h3-font-style)]">
        Appointments Served
      </div>
    </div>
    <div className="absolute w-[102px] h-[100px] top-[77px] left-[100px]">
      <div className="relative w-[110px] h-[110px] top-[-5px] left-[-5px] rounded-[55px]">
        <div className="absolute top-8 left-9 font-bold text-[#44d264] text-4xl leading-[30px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]">
          10
        </div>
        <div className="absolute w-[110px] h-[110px] top-0 left-0 rounded-[55px] border-[10px] border-solid border-[#f4f4f4]" />
        <img
          className="absolute w-[60px] h-[60px] top-0 left-[50px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mbicircspG0xKp/img/ellipse-17-1.svg"
        />
      </div>
    </div>
  </div>
);