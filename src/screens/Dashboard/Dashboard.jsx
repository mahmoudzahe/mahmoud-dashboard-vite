import React from "react";
import { Header } from "./Header";
import { Transactions } from "./Transactions";
import { EmployeeSchedule } from "./EmployeeSchedule";
import { BookingsChart } from "./BookingsChart";
import { TotalAppointments } from "./TotalAppointments";
import { AppointmentsServed } from "./AppointmentsServed";
import { AppointmentsPending } from "./AppointmentsPending";
import { CancelledAppointments } from "./CancelledAppointments";
import { ImagesSection } from "./ImagesSection";

export const Dashboard = () => {
  return (
    <div className="bg-[#fafafb] flex flex-row justify-center w-full">
      <div className="bg-[#fafafb] overflow-hidden w-[1440px] h-[1024px] relative">
        <Header />
        <Transactions />
        <EmployeeSchedule />
        <BookingsChart />
        <TotalAppointments />
        <AppointmentsServed />
        <AppointmentsPending />
        <CancelledAppointments />
        <ImagesSection />
      </div>
    </div>
  );
};

