import React, { useState, useEffect } from 'react';

function Face() {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const scheduleNextBlink = () => {
      // Random interval between 2-8 seconds (human-like blinking)
      const nextBlinkDelay = Math.random() * 6000 + 2000;
      
      setTimeout(() => {
        setIsBlinking(true);
        
        // Blink duration (150-300ms)
        const blinkDuration = Math.random() * 150 + 150;
        
        setTimeout(() => {
          setIsBlinking(false);
          scheduleNextBlink(); // Schedule next blink
        }, blinkDuration);
      }, nextBlinkDelay);
    };

    scheduleNextBlink();
    
    // Cleanup function
    return () => {
      // Note: setTimeout cleanup would require storing timeout IDs
      // For simplicity, we'll let the component unmount naturally
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="340"
      height="340"
      fill="none"
      viewBox="0 0 340 340"
    >
      <path d="M0 0H340V340H0z"></path>
      <g filter="url(#filter0_d_514_3)">
        <circle cx="169.5" cy="169.5" r="155.5" fill="#D9D9D9"></circle>
        <mask
          id="mask0_514_3"
          style={{ maskType: "alpha" }}
          width="311"
          height="311"
          x="14"
          y="14"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="169.5" cy="169.5" r="155.5" fill="#D9D9D9"></circle>
        </mask>
        <g mask="url(#mask0_514_3)">
          <path
            fill="#2D3640"
            d="M276.883 362.867H62.117v-70.973c0-10.344 8.386-18.73 18.73-18.73h177.306c10.344 0 18.73 8.386 18.73 18.73v70.973z"
          ></path>
          <path
            fill="#CD9644"
            d="M134.538 227.589H206.959v64.929h-72.421v-64.929z"
          ></path>
          <g filter="url(#filter1_d_514_3)">
            <path
              fill="#0E1822"
              d="M181.982 304.124a487772.78 487772.78 0 00-10.887-11.515l32.823-31.033c6.36-6.013 16.39-5.731 22.403.628l10.887 11.516-32.823 31.033c-6.36 6.012-16.39 5.731-22.403-.629z"
            ></path>
          </g>
          <g filter="url(#filter2_d_514_3)">
            <path
              fill="#0E1822"
              d="M159.796 304.124l10.888-11.515-32.824-31.033c-6.359-6.013-16.389-5.731-22.402.628l-10.887 11.516 32.823 31.033c6.359 6.012 16.389 5.731 22.402-.629z"
            ></path>
          </g>
          <path
            fill="#2C2C2C"
            d="M250.661 117.726c0 47.918-36.057 86.763-80.537 86.763-44.479 0-80.537-38.845-80.537-86.763 0-47.918 17.481-70.746 80.537-70.746 66.178 0 80.537 22.828 80.537 70.746z"
          ></path>
          <circle cx="246.916" cy="159.538" r="17.481" fill="#FFBE5C"></circle>
          <circle cx="246.916" cy="159.538" r="8.74" fill="#CD9644"></circle>
          <circle cx="93.333" cy="162.036" r="17.481" fill="#FFBE5C"></circle>
          <circle cx="93.333" cy="162.035" r="8.74" fill="#CD9644"></circle>
          <path
            fill="#FFBE5C"
            d="M94.582 133.317c0-39.308 31.865-71.173 71.172-71.173h9.989c39.308 0 71.173 31.865 71.173 71.173v33.713c0 39.308-31.865 71.173-71.173 71.173h-9.989c-39.307 0-71.172-31.865-71.172-71.173v-33.713z"
          ></path>
          <path
            fill="#2C2C2C"
            d="M144.527 226.435c0 9.654 7.827 17.481 17.481 17.481h17.481c9.655 0 17.481-7.827 17.481-17.481h-52.443z"
          ></path>
          <path
            fill="#CD9644"
            fillRule="evenodd"
            d="M158.262 177.019a3.746 3.746 0 013.746-3.746h17.481a3.746 3.746 0 110 7.492h-17.481a3.746 3.746 0 01-3.746-3.746zm-8.892 17.583a3.746 3.746 0 015.298 0c9.021 9.021 23.647 9.021 32.668 0a3.745 3.745 0 115.297 5.297c-11.946 11.947-31.316 11.947-43.263 0a3.745 3.745 0 010-5.297z"
            clipRule="evenodd"
          >          </path>
          
          {/* Left Eye - with blinking animation */}
          <circle 
            id="left-eye"
            cx="135.787" 
            cy="148.301" 
            r="8.74" 
            fill="#2C2C2C"
            style={{
              transformOrigin: '135.787px 148.301px',
              transform: isBlinking ? 'scaleY(0.1)' : 'scaleY(1)',
              transition: 'transform 0.1s ease-out'
            }}
          ></circle>
          
          {/* Right Eye - with blinking animation */}
          <circle 
            id="right-eye"
            cx="205.71" 
            cy="148.301" 
            r="8.74" 
            fill="#2C2C2C"
            style={{
              transformOrigin: '205.71px 148.301px',
              transform: isBlinking ? 'scaleY(0.1)' : 'scaleY(1)',
              transition: 'transform 0.1s ease-out'
            }}
          ></circle>
          
          <path
            fill="#2C2C2C"
            fillRule="evenodd"
            d="M224.95 132.132c-8.417-9.956-23.393-11.182-33.457-2.675a3.122 3.122 0 01-4.03-4.767c12.666-10.708 31.586-9.208 42.254 3.411a3.122 3.122 0 01-4.767 4.031zm-75.05-.269c-9.322-8.615-23.567-8.156-31.828.784a3.123 3.123 0 01-4.585-4.238c10.704-11.583 28.909-11.981 40.651-1.131a3.12 3.12 0 01.173 4.411 3.12 3.12 0 01-4.411.174z"
            clipRule="evenodd"
          ></path>
          <g filter="url(#filter3_d_514_3)">
            <path
              fill="#2C2C2C"
              d="M193.681 42.166h-63.108c-16.429 0-29.748 13.137-29.748 29.343s13.319 29.343 29.748 29.343H256.28s1.249-25.597-14.983-41.83c-16.233-16.232-47.616-16.856-47.616-16.856z"
            ></path>
          </g>
          <path
            fill="#BFBFBF"
            fillOpacity="0.148"
            fillRule="evenodd"
            d="M140.801 53.404a3.122 3.122 0 013.122-3.122h51.831l.135.012-.27 3.11c.27-3.11.271-3.11.272-3.11h.008l.019.003.066.006a42.62 42.62 0 011.14.12 98.91 98.91 0 013.235.427c2.714.402 6.458 1.06 10.581 2.085 8.087 2.01 18.244 5.575 24.628 11.876 6.12 6.041 9.277 12.108 10.897 16.735.808 2.308 1.232 4.25 1.454 5.645.111.697.171 1.258.205 1.661a16.803 16.803 0 01.038.632l.001.05.001.018v.011c0 .001 0 .003-3.121.052l3.121-.049a3.121 3.121 0 01-6.242.113l-.001-.013.001.007v.006c0 .003 0 .003 0 0l-.002-.044c-.003-.05-.008-.14-.018-.269a16.053 16.053 0 00-.149-1.194c-.17-1.067-.508-2.643-1.18-4.563-1.341-3.828-4.018-9.052-9.391-14.355-5.11-5.043-13.831-8.292-21.748-10.26a107.089 107.089 0 00-9.99-1.968 92.461 92.461 0 00-3.029-.4c-.355-.04-.628-.07-.809-.087l-.132-.014h-51.551a3.122 3.122 0 01-3.122-3.121z"
            clipRule="evenodd"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_514_3"
          width="319"
          height="319"
          x="10"
          y="14"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_514_3"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_514_3"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_514_3"
          width="66.113"
          height="55.84"
          x="171.095"
          y="257.244"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_514_3"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_514_3"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter2_d_514_3"
          width="66.113"
          height="55.84"
          x="104.571"
          y="257.244"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_514_3"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_514_3"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter3_d_514_3"
          width="155.478"
          height="62.686"
          x="100.825"
          y="42.166"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_514_3"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_514_3"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Face;