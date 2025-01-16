const Logo = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Helmet base */}
      <circle cx="50" cy="50" r="45" fill="#4A00FF" fillOpacity="0.2" />
      <circle cx="50" cy="50" r="40" fill="#000000" stroke="#FFFFFF" strokeWidth="2" />
      
      {/* Visor */}
      <path
        d="M30 45C30 35 40 30 50 30C60 30 70 35 70 45C70 55 60 65 50 65C40 65 30 55 30 45Z"
        fill="#00FFB3"
        fillOpacity="0.3"
      />
      
      {/* Helmet details */}
      <path
        d="M25 50C25 35 35 25 50 25C65 25 75 35 75 50"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Reflection */}
      <path
        d="M40 40L45 35"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo; 