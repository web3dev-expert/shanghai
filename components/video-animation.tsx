"use client"

import { useEffect, useRef } from "react"

export default function VideoAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Ensure video plays on load
      video.play().catch(console.error)
    }
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        controls
      >
        <source src="shanghai_master/videos/going-global-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/20">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Going Global</h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-md">Expand Your Horizons</p>
        </div>
      </div>

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
    </section>
  )
}
