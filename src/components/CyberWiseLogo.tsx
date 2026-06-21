import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function CyberWiseLogo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none transition-transform duration-300`}
    >
      {/* Background Rounded Card resembling the uploaded logo mesh block */}
      <defs>
        <radialGradient id="logoMeshGrad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="50%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#090514" />
        </radialGradient>
        
        {/* Soft Drop shadow for letters */}
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Styled Background representing the purple mesh */}
      <rect width="120" height="120" rx="28" fill="url(#logoMeshGrad)" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1.5" />
      
      {/* Mesh flare accents */}
      <circle cx="20" cy="20" r="30" fill="#a855f7" opacity="0.15" filter="blur(20px)" />
      <circle cx="100" cy="100" r="40" fill="#6366f1" opacity="0.2" filter="blur(25px)" />

      {/* Interlocking CWi Lettermark */}
      <g filter="url(#logoShadow)">
        {/* Stylized "C" */}
        <path
          d="M 58 45 
             C 45 40, 26 48, 26 62
             C 26 76, 45 84, 58 79
             L 55 71
             C 45 74, 34 68, 34 62
             C 34 56, 45 50, 55 53
             Z"
          fill="#FFFFFF"
        />

        {/* Diagonal interlocking "W" */}
        <path
          d="M 50 59 
             L 57 79 
             L 64 63
             L 71 79
             L 78 59
             L 71 59
             L 67 71
             L 61 59
             Z"
          fill="#FFFFFF"
        />

        {/* Slanted "i" stem */}
        <path
          d="M 80 59 
             L 73 79 
             L 79 79 
             L 86 59 
             Z"
          fill="#FFFFFF"
        />

        {/* Slanted Diamond Dot for "i" */}
        <polygon
          points="89,49 84,54 89,54 94,49"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}
