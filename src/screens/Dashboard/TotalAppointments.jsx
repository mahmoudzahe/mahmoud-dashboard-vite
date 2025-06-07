import React from "react";

export const TotalAppointments = () => (
  <div className="absolute w-[300px] h-[200px] top-[132px] left-[641px] bg-white rounded-md">
    <div className="inline-flex items-center gap-[250px] absolute top-7 left-[25px]">
      <div className="relative w-fit mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#0f1728] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] whitespace-nowrap [font-style:var(--heading-h3-font-style)]">
        Total No of Appointments
      </div>
    </div>
    <div className="absolute w-[102px] h-[100px] top-[77px] left-[100px]">
      <div className="relative w-[100px] h-[100px]">
        <div className="absolute top-[35px] left-[30px] font-bold text-[#4d91ff] text-[32px] leading-[30px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]">
          50
        </div>
        <div className="absolute w-[100px] h-[100px] top-0 left-0 rounded-[50px] border-[10px] border-solid border-[#f4f4f4]" />
        <img
          className="absolute w-[100px] h-[100px] top-0 left-0"
          alt="Ellipse"
          src="https://c.animaapp.com/mbicircspG0xKp/img/ellipse-14.svg"
        />
      </div>
    </div>
  </div>
);