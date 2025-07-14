"use client"

import Header from "@/components/header"
import PageLayout from "../components/page-layout"
import styles from "@/styles/people-culture-page.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
import contentstyles from "@/styles/table-of-contents.module.css"
import { ChevronLeft, ChevronRight, User, Info, Volume2, Maximize, MoreHorizontal } from "lucide-react"
import Footer from "@/components/footer"

interface PeopleCulturePageProps {
  // onBackClick: () => void
  // onNextClick: () => void
}

export default function PeopleCultureRightPage() {
  return (
    <div style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
      <div>
        <div className={styles.infoSection}>
          <div className={styles.infoButtonContainer}>
            <button className={styles.infoButton} aria-label="Information">
              <Info size={20} />
            </button>
            <div className={styles.infoBoxContainer}>
              <div className={styles.infoBoxContent}>
                <div className={styles.infoIcon}>
                  <Info size={20} />
                </div>
                <p className={styles.infoBoxText}>
                  Foreigners are often referred to as laowai or waiguoren, which literally mean old foreigner and foreign
                  country person respectively. Though sometimes used with derision, they have no specific negative
                  connotation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Columns 3-4 with video at bottom */}
      <div className={styles.columnsWithVideo}>
        {/* Text content for columns 3-4 */}
        <div className={styles.textRow}>
          <div className={styles.textColumn3}>
            <div className={styles.textContent}>
              <p className={styles.mainBody}>
                First impressions often lead Westerners to falsely believe that Shanghai is
                a city blindly enamored by all things foreign. The common presentation of Shanghai as a rapidly
                Westernizing city where designer labels and KFC are the new face of the town is simplistic. There is
                a contrast between Shanghai's outward shell and the people that prop it up. Just scratch below the
                surface and the underlying adherence to Chinese tradition is obvious. Most Westerners, with
                significant experience interacting with the locals will testify that there is far more to Shanghai
                than glittery new shopping malls and swanky restaurants.
              </p>

              <p className={styles.mainBody}>
                This stereotype has been exacerbated by the emergence of a relatively affluent middle class,
                comprised primarily of white-collar middle managers, who go to great lengths to
              </p>
            </div>
          </div>

          <div className={styles.textColumn4}>
            <div className={styles.textContent}>
              <p className={styles.mainBody}>
                appear wealthy and Western. The business boom in Shanghai, both domestic and foreign, has made
                Shanghai quite wealthy by Chinese and even western standards. But this is an example of a
                superficial Shanghai masking a reality. Ordinary Shanghainese are better classified as residents of
                a developing rather than a developed nation. The government's own figures, which are widely
                criticized as inflated, calculate the city's average disposable income at around RMB20,000: higher
                than the national average, but not enough to compete in Shanghai's inflated housing market. Many of
                the sleek apartment towers are owned by outside investors or sit empty while rural migrants toil
                away during the night for a pittance to erect them as fast as possible.
              </p>

              <p className={styles.mainBody}>
                The pace of life in Shanghai is quite as fast as Hong Kong but not quite as materialistic, but this
                is a city on the move and more and more.
              </p>
            </div>
          </div>
        </div>

        {/* Video Area - Bottom of columns 3-4 */}
        <div className={`${styles.videoArea} ${styles.videoBackground}`}>
          <div className={styles.videoOverlay}>
            <div className={styles.videoControls}>
              <button className={styles.playButton}>▶</button>
              <span className={styles.timeDisplay}>0:00</span>
              <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
              </div>
              <div className={styles.volumeControls}>
                <Volume2 size={20} />
                <Maximize size={20} />
                <MoreHorizontal size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
