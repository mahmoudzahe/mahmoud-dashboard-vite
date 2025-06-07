import React from "react";

export const AppointmentsPending = () => (
  <div className="absolute w-[300px] h-[200px] top-[352px] left-[641px] bg-white rounded-md">
    <div className="inline-flex items-center gap-[250px] absolute top-[19px] left-[25px]">
      <div className="relative w-fit mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#0f1728] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] whitespace-nowrap [font-style:var(--heading-h3-font-style)]">
        Appointments Pending
      </div>
    </div>
    <div className="absolute w-[110px] h-[110px] top-[58px] left-[95px] rounded-[55px]">
      <div className="absolute top-9 left-[34px] font-bold text-[#f7851c] text-4xl leading-[30px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]">
        38
      </div>
      <div className="absolute w-[110px] h-[110px] top-0 left-0 rounded-[55px] border-[10px] border-solid border-[#f4f4f4]" />
      <img
        className="absolute w-[104px] h-[110px] top-0 left-1.5"
        alt="Ellipse"
        src="https://c.animaapp.com/mbicircspG0xKp/img/ellipse-19.svg"
      />
    </div>
  </div>
);