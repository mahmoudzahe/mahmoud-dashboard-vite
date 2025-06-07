import React from "react";

export const CancelledAppointments = () => (
  <div className="absolute w-[300px] h-[200px] top-[352px] left-[961px] bg-white rounded-md">
    <div className="inline-flex items-center gap-[250px] absolute top-[19px] left-[35px]">
      <div className="relative w-fit mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#0f1728] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] whitespace-nowrap [font-style:var(--heading-h3-font-style)]">
      Cancelled Appointment
    </div>
  </div>
  <div className="absolute w-[143px] h-[141px] top-[46px] left-[79px]">
    <div className="relative w-[110px] h-[110px] top-4 left-4 rounded-[55px]">
      <div className="absolute top-10 left-11 font-bold text-[#ff5858] text-4xl leading-[30px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]">
        2
      </div>
      <div className="absolute w-[110px] h-[110px] top-0 left-0 rounded-[55px] border-[10px] border-solid border-[#f4f4f4]" />
      <img
        className="absolute w-10 h-6 top-0 left-[55px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mbicircspG0xKp/img/ellipse-17.svg"
      />
    </div>
  </div>
</div>
);