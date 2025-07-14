
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

export default function AsianEscapesLeftPage() {
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
      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h1 className={styles.mainTitle}>ASIAN ESCAPES</h1>
          <div>
            <div className={styles.textContent}>
              <p>
                <strong>One of the best fringe benefits of moving to Hong Kong is its proximity to some of the best vacation spots and most exotic adventure destinations in the world.</strong> The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
              </p>
              
              <p>
                We've designed our travel section with the needs of travellers in mind. For those who prefer the beaten path we provide destinations that are well known to everyone, and while they may be full of tourists and the consumerism that inevitably follows them around the world, you can't leave Asia without stopping to have a look, have destinations for those who prefer a road less travelled. In Asia, the road less travelled means that there is still a road (good), there are still tourists on the road and there are still people willing to help you get back on the right road. This, however, is hard to escape in Asia if you travel to any popular tourist area, even one that's hard to get to. These suggestions may require longer travel times, as they're not in major cities, but won't disappoint you.
              </p>

              <p>
                We also have a few recommendations for people who want the experience of a lifetime in Asia. In fact, if you follow our suggestions exactly, you'll probably arrive back at home in better shape than you were before you departed. Asia has some of the most remote and extreme destinations on the planet.
              </p>

              <p>
                We chose our primary sponsor carefully and with our reader in mind. <strong>Banyan Tree offers</strong>
              </p>
            </div>
          </div>

          {/* Small Video Thumbnail */}
          <div className={styles.smallVideoContainer}>
            <div className={styles.videoThumbnail}>
              <Image 
                src="/images/shanghai-skyline-night.png" 
                alt="Video thumbnail"
                width={200}
                height={120}
                className={styles.thumbnailImage}
              />
              <div className={styles.playOverlay}>
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
