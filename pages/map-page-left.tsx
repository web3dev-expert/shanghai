
"use client"

import styles from "@/styles/map-page.module.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState, useRef, useEffect } from "react"
import { Share, Maximize, Minimize, ChevronLeft, ChevronRight, Play, Volume2, MoreHorizontal } from "lucide-react"

interface MapPageProps {
  onBackClick?: () => void
  onNextClick?: () => void
}

export default function MapLeftPage({ onBackClick, onNextClick }: MapPageProps) {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const mapContainerRef = useRef<HTMLDivElement>(null)

    const toggleFullscreen = () => {
        if (!mapContainerRef.current) return

        if (!isFullscreen) {
            // Enter fullscreen
            if (mapContainerRef.current.requestFullscreen) {
                mapContainerRef.current.requestFullscreen()
            } else if ((mapContainerRef.current as any).webkitRequestFullscreen) {
                (mapContainerRef.current as any).webkitRequestFullscreen()
            } else if ((mapContainerRef.current as any).msRequestFullscreen) {
                (mapContainerRef.current as any).msRequestFullscreen()
            }
            setIsFullscreen(true)
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if ((document as any).webkitExitFullscreen) {
                (document as any).webkitExitFullscreen()
            } else if ((document as any).msExitFullscreen) {
                (document as any).msExitFullscreen()
            }
            setIsFullscreen(false)
        }
    }
      // Listen for fullscreen changes (including Esc key)
    
    useEffect(() => {
        const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement)
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange)
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
        document.addEventListener('mozfullscreenchange', handleFullscreenChange)
        document.addEventListener('MSFullscreenChange', handleFullscreenChange)

        return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange)
        document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
        document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
        document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
        }
    }, [])

  return (
      <div className={`${styles.rightHalf} ${styles.pageContainer}`}>
        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Map Container */}
          <div className={styles.mapContainer} ref={mapContainerRef}>
            <div className={styles.mapHeader}>
              <div className={styles.mapTitleSection}>
                <div className={styles.mapIcon}>🗺️</div>
                <div className={styles.mapTitleText}>
                  <h2 className={styles.mapTitle}>Former French Concession Shanghai by Going Global</h2>
                  <p className={styles.mapSubtitle}>
                    ℹ️ Ta mapa została wykonana za pomocą Moich Map Google. Utwórz własną mapę
                  </p>
                </div>
              </div>
              <div className={styles.mapActions}>
                <button className={styles.shareBtn}>
                  <Share size={20} />
                </button>
                <button className={styles.fullscreenBtn} onClick={toggleFullscreen}>
                  {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                </button>
              </div>
            </div>

            {/* Interactive Map */}
            <div className={styles.mapView}>
              <div className={styles.mapInterface}>
                {/* Map Background */}
                <div className={styles.mapBackground}>
                  <img 
                    src="/images/shanghai-map.png" 
                    alt="Shanghai Map"
                    className={styles.mapImage}
                  />
                </div>

                {/* Map Pins and Markers */}
                <div className={styles.mapMarkers}>
                  {/* Sample markers - you can customize these */}
                  <div className={`${styles.marker} ${styles.markerRed}`} style={{top: '20%', left: '30%'}}>🏠</div>
                  <div className={`${styles.marker} ${styles.markerBlue}`} style={{top: '40%', left: '45%'}}>🏪</div>
                  <div className={`${styles.marker} ${styles.markerGreen}`} style={{top: '60%', left: '35%'}}>🏫</div>
                  <div className={`${styles.marker} ${styles.markerPurple}`} style={{top: '30%', left: '70%'}}>🏥</div>
                  <div className={`${styles.marker} ${styles.markerOrange}`} style={{top: '50%', left: '60%'}}>🏛️</div>
                  <div className={`${styles.marker} ${styles.markerYellow}`} style={{top: '70%', left: '50%'}}>🍽️</div>
                  
                  {/* Transportation markers */}
                  <div className={`${styles.marker} ${styles.markerTransport}`} style={{top: '25%', left: '40%'}}>✈️</div>
                  <div className={`${styles.marker} ${styles.markerTransport}`} style={{top: '55%', left: '75%'}}>🚇</div>
                  <div className={`${styles.marker} ${styles.markerTransport}`} style={{top: '45%', left: '25%'}}>🚌</div>
                </div>

                {/* Map Controls */}
                <div className={styles.mapControls}>
                  <button className={styles.zoomBtn}>+</button>
                  <button className={styles.zoomBtn}>-</button>
                </div>

                {/* Map Legend */}
                <div className={styles.mapLegend}>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.legendRed}`}></span>
                    <span className={styles.legendText}>Residential</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.legendBlue}`}></span>
                    <span className={styles.legendText}>Shopping</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.legendGreen}`}></span>
                    <span className={styles.legendText}>Education</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.legendPurple}`}></span>
                    <span className={styles.legendText}>Healthcare</span>
                  </div>
                </div>

                {/* Scale indicator */}
                <div className={styles.scaleIndicator}>
                  <div className={styles.scaleLine}></div>
                  <span className={styles.scaleText}>1 km</span>
                </div>

                {/* Copyright */}
                <div className={styles.mapCopyright}>
                  <span>Dane mapy ©2025</span>
                  <span>Warunki</span>
                  <span>1 km</span>
                  <span>Skróty klawiszy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
