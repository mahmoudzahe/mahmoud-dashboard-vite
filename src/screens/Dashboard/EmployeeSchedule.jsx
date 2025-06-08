import React, { useState, useRef, useEffect } from "react";

export const EmployeeSchedule = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="position-absolute bg-white rounded" style={{ width: '427px', height: '361px', top: '630px', left: '182px' }}>
      <div className="d-inline-flex align-items-start gap-10 position-absolute" style={{ top: '24px', left: '24px' }}>
        <div className="position-relative" style={{ marginTop: '-1px' }}>
          <span className="fw-bold" style={{ fontFamily: 'Manrope, Helvetica', fontWeight: 700, fontSize: '20px', lineHeight: '30px', color: '#000000' }}>Employee Schedule</span>
        </div>
      </div>
      <div className="position-relative" ref={dropdownRef}>
        <img
          className="position-absolute"
          style={{ top: '28px', left: '385px', width: '22px', height: '22px', cursor: 'pointer' }}
          alt="More vert"
          src="./src/assets/3point.png"
          onClick={toggleDropdown}
        />
        {showDropdown && (
          <div className="position-absolute" style={{ top: '62px', left: '385px', background: '#000', border: '1px solid #000', borderRadius: '4px', zIndex: 1 }}>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ padding: '5px 10px', cursor: 'pointer', color: 'green', background: '#fff' }}>Add</li>
              <li style={{ padding: '5px 10px', cursor: 'pointer', color: 'orange', background: '#fff' }}>Edit</li>
              <li style={{ padding: '5px 10px', cursor: 'pointer', color: 'red', background: '#fff' }}>Delete</li>
              <li style={{ padding: '5px 10px', cursor: 'pointer', color: 'blue', background: '#fff' }}>View</li>
            </ul>
          </div>
        )}
      </div>
      <div className="position-absolute" style={{ width: '101px', height: '35px', top: '79px', left: '14px' }}>
        <div className="d-inline-flex align-items-center gap-3 position-relative">
          <div className="position-relative rounded-circle" style={{ width: '35px', height: '35px', background: 'url(./src/assets/Omkar.png) 50% 50% / cover' }} />
          <div className="position-relative" style={{ marginTop: '-1px' }}>
            <span className="fw-bold text-dark" style={{ fontSize: '16px', lineHeight: '24px' }}>Omkar</span>
          </div>
        </div>
      </div>
      <div className="position-absolute fw-bold text-dark" style={{ top: '83px', left: '152px', fontSize: '16px', lineHeight: '24px' }}>
        Dermatology
      </div>
      <div className="position-absolute" style={{ width: '108px', height: '30px', top: '81px', left: '312px' }}>
        <div className="position-absolute rounded border border-1 border-dark" style={{ width: '108px', height: '26px', top: '3px', left: '0' }} />
        <div className="position-absolute" style={{ top: '0', left: '18px' }}>
          <span style={{ fontFamily: '"Manrope", Helvetica', fontWeight: '500', fontSize: '16px', lineHeight: '30px', color: '#1d2939' }}>9:00-6:45</span>
        </div>
      </div>
      <div className="position-absolute" style={{ width: '110px', height: '35px', top: '153px', left: '14px' }}>
        <div className="d-inline-flex align-items-center gap-3 position-relative">
          <div className="position-relative rounded-circle" style={{ width: '35px', height: '35px', background: 'url(./src/assets/Krishna.png) 50% 50% / cover' }} />
          <div className="position-relative" style={{ marginTop: '-1px' }}>
            <span className="fw-bold text-dark" style={{ fontSize: '16px', lineHeight: '24px' }}>Krishna</span>
          </div>
        </div>
      </div>
      <div className="position-absolute fw-bold text-dark" style={{ top: '158px', left: '152px', fontSize: '16px', lineHeight: '24px' }}>
        Orthopedic
      </div>
      <div className="position-absolute" style={{ width: '108px', height: '31px', top: '155px', left: '312px' }}>
        <div className="position-absolute rounded border border-1 border-dark" style={{ width: '108px', height: '26px', top: '5px', left: '0' }} />
        <div className="position-absolute" style={{ top: '0', left: '18px' }}>
          <span style={{ fontFamily: '"Manrope", Helvetica', fontWeight: '500', fontSize: '16px', lineHeight: '30px', color: '#1d2939' }}>9:00-4:30</span>
        </div>
      </div>
      <div className="position-absolute" style={{ width: '95px', height: '35px', top: '233px', left: '14px' }}>
        <div className="d-inline-flex align-items-center gap-3 position-relative">
          <div className="position-relative rounded-circle" style={{ width: '35px', height: '35px', background: 'url(./src/assets/Ramu.png) 50% 50% / cover' }} />
          <div className="position-relative" style={{ marginTop: '-1px' }}>
            <span className="fw-bold text-dark" style={{ fontSize: '16px', lineHeight: '24px' }}>Ramu</span>
          </div>
        </div>
      </div>
      <div className="position-absolute fw-bold text-dark" style={{ top: '237px', left: '152px', fontSize: '16px', lineHeight: '24px' }}>
        General Medicine
      </div>
      <div className="position-absolute" style={{ width: '108px', height: '30px', top: '233px', left: '312px' }}>
        <div className="position-absolute rounded border border-1 border-dark" style={{ width: '108px', height: '26px', top: '1px', left: '0' }} />
        <div className="position-absolute" style={{ top: '0', left: '18px' }}>
          <span style={{ fontFamily: '"Manrope", Helvetica', fontWeight: '500', fontSize: '16px', lineHeight: '30px', color: '#1d2939' }}>9:00-6:45</span>
        </div>
      </div>
      <div className="position-absolute" style={{ width: '104px', height: '35px', top: '312px', left: '14px' }}>
        <div className="d-inline-flex align-items-center gap-3 position-relative">
          <div className="position-relative rounded-circle" style={{ width: '35px', height: '35px', background: 'url(./src/assets/Prasad.png) 50% 50% / cover' }} />
          <div className="position-relative" style={{ marginTop: '-1px' }}>
            <span className="fw-bold text-dark" style={{ fontSize: '16px', lineHeight: '24px' }}>Prasad</span>
          </div>
        </div>
      </div>
      <div className="position-absolute fw-bold text-dark" style={{ top: '315px', left: '152px', fontSize: '16px', lineHeight: '24px' }}>
        Pediatrics
      </div>
      <div className="position-absolute" style={{ width: '108px', height: '30px', top: '311px', left: '314px' }}>
        <div className="position-absolute rounded border border-1 border-dark" style={{ width: '108px', height: '26px', top: '3px', left: '0' }} />
        <div className="position-absolute" style={{ top: '0', left: '18px' }}>
          <span style={{ fontFamily: '"Manrope", Helvetica', fontWeight: '500', fontSize: '16px', lineHeight: '30px', color: '#1d2939' }}>9:00-7:45</span>
        </div>
      </div>
    </div>
  );
};