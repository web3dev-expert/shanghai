
"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Play, Volume2, Maximize, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"
import styles from "@/styles/asian-escape-page.module.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface AsianEscapesPageProps {
  onBackClick?: () => void
  onNextClick?: () => void
}

export default function AsianEscapesRightPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.rightColumn}>
        <div className={styles.textBlock}>
          <p>
            'experiences' that you will remember for a lifetime as they are woven into the story of your assignment in Asia and they do it with industry-leading adherence to global ethical and sustainability standards.
          </p>
          
          <p>
            The Banyan Tree Global Foundation serves as the Group's corporate social responsibility arm and directs and guides Banyan Tree Holdings in its pursuit of responsible and sustainable business.Banyan Tree Holdings is a founding member and signatory of the UN Global Compact and actively promotes and supports the protection and fulfillment of a comprehensive set of rights, labour, the environment and anti-corruption. The Group supports the UN World Tourism Organisation Global Code of Ethics to support sustainable development, safeguard cultural and natural heritage, integrate locals, and support workers' and children's rights.
          </p>
        </div>

        {/* Main Video Player */}
        <div className={styles.mainVideoContainer}>
          <div className={styles.videoPlayer}>
            <video
              ref={videoRef}
              className={styles.video}
              // poster="/images/introduction.png"
              onClick={handlePlayPause}
              controls
            >
              <source src="/shanghai_master/videos/cover.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay */}
            <div className={styles.videoOverlay}>
              <div className={styles.eventInfo}>
                <h2 className={styles.eventTitle}>EARTH HOUR</h2>
                <p className={styles.eventDate}>24 March 2018</p>
                <p className={styles.eventTime}>20:30 to 21:30</p>
              </div>
            </div>

            {/* Video Controls */}
            <div className={styles.videoControls}>
              <button onClick={handlePlayPause} className={styles.playButton}>
                {isPlaying ? '⏸' : '▶'}
              </button>
              <span className={styles.timeDisplay}>0:00 / 2:04</span>
              <div className={styles.controlsRight}>
                <Volume2 className="w-5 h-5" />
                <Maximize className="w-5 h-5" />
                <MoreHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
