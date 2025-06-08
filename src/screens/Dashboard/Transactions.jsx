import React from 'react';

const transactions = [
  { name: 'Kathryn Murphy', image: './src/assets/KathrynMurphy.png', top: '86px', amountTop: '95px' },
  { name: 'Karthik', image: './src/assets/Karthik.png', top: '135px', amountTop: '142px' },
  { name: 'Apparna', image: './src/assets/Apparna.png', top: '185px', amountTop: '190px' },
];

export const Transactions = () => (
  <div
    className="position-absolute bg-white rounded"
    style={{ width: '427px', height: '254px', top: '124px', left: '182px', fontFamily: '"Manrope", Helvetica, sans-serif' }}
  >
    <div
      className="position-absolute"
      style={{ width: '427px', height: '254px', top: '0', left: '0' }}
    >
      <div
        className="d-inline-flex align-items-center gap-5 position-absolute"
        style={{ top: '24px', left: '24px' }}
      >
        <div className="position-relative" style={{ marginTop: '-1px' }}>
          <span
            className="fw-bold"
            style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '700', color: '#101828' }}
          >
            Transactions
          </span>
        </div>
      </div>
    </div>
    <div
      className="position-absolute text-body"
      style={{ top: '26px', left: '366px' }}
    >
      <span
        style={{ fontSize: '14px', lineHeight: '24px', fontWeight: '400', color: '#1D2939' }}
      >
        See All
      </span>
    </div>
    {transactions.map((trans, index) => (
      <React.Fragment key={index}>
        <div
          className="position-absolute"
          style={{ top: trans.top, left: '31px', width: index === 0 ? '179px' : index === 1 ? '111px' : '121px', height: '40px' }}
        >
          <div className="d-inline-flex align-items-center gap-3 position-relative">
            <div
              className="position-relative rounded-circle"
              style={{ width: '40px', height: '40px', background: `url(${trans.image}) 50% 50% / cover` }}
            />
            <div className="position-relative" style={{ marginTop: '-1px' }}>
              <span
                className="fw-bold"
                style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '700', color: '#1D2939' }}
              >
                {trans.name}
              </span>
            </div>
          </div>
        </div>
        <div
          className="position-absolute"
          style={{ top: trans.amountTop, left: '362px', width: '60px' }}
        >
          <span
            className="text-success"
            style={{ fontSize: '14px', lineHeight: '24px', fontFamily: '"Manrope", Helvetica', fontWeight: '400' }}
          >
            +300
          </span>
        </div>
      </React.Fragment>
    ))}
  </div>
);