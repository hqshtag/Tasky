import React from "react";

const HomeIcom = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.59072 0.807088C7.83146 0.619846 8.16856 0.619846 8.4093 0.807088L14.4093 5.47375C14.5717 5.60006 14.6667 5.79426 14.6667 5.99999V13.3333C14.6667 13.8638 14.456 14.3725 14.0809 14.7475C13.7058 15.1226 13.1971 15.3333 12.6667 15.3333H3.33334C2.80291 15.3333 2.2942 15.1226 1.91913 14.7475C1.54406 14.3725 1.33334 13.8638 1.33334 13.3333V5.99999C1.33334 5.79426 1.42833 5.60006 1.59072 5.47375L7.59072 0.807088ZM2.66668 6.32605V13.3333C2.66668 13.5101 2.73691 13.6797 2.86194 13.8047C2.98696 13.9298 3.15653 14 3.33334 14H12.6667C12.8435 14 13.0131 13.9298 13.1381 13.8047C13.2631 13.6797 13.3333 13.5101 13.3333 13.3333V6.32605L8.00001 2.1779L2.66668 6.32605Z"
        fill={active ? "#9D76F0" : "#E7E7ED"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33334 7.99999C5.33334 7.6318 5.63182 7.33332 6.00001 7.33332H10C10.3682 7.33332 10.6667 7.6318 10.6667 7.99999V14.6667C10.6667 15.0348 10.3682 15.3333 10 15.3333C9.63182 15.3333 9.33334 15.0348 9.33334 14.6667V8.66666H6.66668V14.6667C6.66668 15.0348 6.3682 15.3333 6.00001 15.3333C5.63182 15.3333 5.33334 15.0348 5.33334 14.6667V7.99999Z"
        fill={active ? "#9D76F0" : "#E7E7ED"}
      />
    </svg>
  );
};

export default HomeIcom;