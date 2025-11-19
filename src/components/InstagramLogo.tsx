const InstagramLogo = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-9">
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#FFDC80' }} />
            <stop offset="25%" style={{ stopColor: '#FCAF45' }} />
            <stop offset="50%" style={{ stopColor: '#F77737' }} />
            <stop offset="75%" style={{ stopColor: '#F56040' }} />
            <stop offset="100%" style={{ stopColor: '#FD1D1D' }} />
          </linearGradient>
          <linearGradient id="instagramGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#4168C9' }} />
            <stop offset="50%" style={{ stopColor: '#C837AB' }} />
            <stop offset="100%" style={{ stopColor: '#FD1D1D' }} />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="45" height="45" rx="12" fill="url(#instagramGradient2)" />
        <rect x="8" y="8" width="35" height="35" rx="8" fill="transparent" stroke="white" strokeWidth="3" />
        <circle cx="25.5" cy="25.5" r="8" fill="transparent" stroke="white" strokeWidth="3" />
        <circle cx="37" cy="14" r="2.5" fill="white" />
      </svg>
      <span className="text-foreground text-[32px] font-normal tracking-tight" style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>
        Instagram
      </span>
    </div>
  );
};

export default InstagramLogo;
