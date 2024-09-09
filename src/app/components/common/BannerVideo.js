"use client"
import React,{useEffect,useRef} from 'react'
import Link from 'next/link';

export default function BannerVideo() {

  const videoRef = useRef(null);
  const buttonRef = useRef(null);

  const handleVideoControl = (e) => {
      e.preventDefault();
      const video = videoRef.current;
      const button = buttonRef.current;

      if (video) {
        if (video.paused) {
          video.play();
          video.controls = true; // Show video controls
          button.style.display = 'none';
        } else {
          video.pause();
          video.controls = false; // Hide video controls
          button.style.display = 'block';
        }
      }
  };

  useEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add('home-page');

    // Cleanup class when component unmounts
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <div className="banner-video max-w-[640px] mx-auto xl:mx-0">
      <div className="video-outer relative">
        <video
          id="banner-video"
          className="object-cover w-full h-auto max-w-[640px]"
          loop
          muted
          playsInline
          controls={false}
        >
          <source src="https://loop3d.ai/wp-content/uploads/2024/08/Looped-Homepage-Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Link
          href="#"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer video-control-icon"
          onClick={handleVideoControl}
          ref={buttonRef}
        >
          <svg
            aria-hidden="true"
            className="w-[77px] max-w-[50px] text-[#174a6d] opacity-80"
            fill="currentColor"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
          </svg>
        </Link>

      </div>
    </div>
  )
}
