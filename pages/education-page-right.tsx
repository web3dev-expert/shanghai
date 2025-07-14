
"use client"

import Header from "@/components/header"
import PageLayout from "../components/page-layout"
import styles from "@/styles/education-page.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
import Footer from "@/components/footer"
import { Play, Volume2, Settings, Maximize, Quote } from "lucide-react"

interface EducationPageProps {
  onBackClick?: () => void
  onNextClick?: () => void
}

export default function EducationRightPage({ onBackClick, onNextClick }: EducationPageProps) {
  return (
    <div className={styles.educationPage}>
      {/* Well-Educated Section */}
      <div className={styles.wellQuoteSection}>
          {/* <p>”</p>
          <p className={styles.sectionText} style={{ position: "absolute", zIndex: 2 }}>
            THE STANDARD OF EDUCATION AT INTERNATIONAL SCHOOLS IN SHANGHAI VARIES FROM INSTITUTION TO INSTITUTION WITHIN A VERY NARROW BANDWIDTH AT THE TOP OF THE SCALE
          </p> */}
        <div className={`${styles.quotePart} relative`} style={{ position: "relative" }}>
          <p
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",  // centers the element exactly in the middle
              fontSize: "240px",  // big size for background effect
              color: "rgba(0,0,0,0.2)",  // light and subtle
              zIndex: 1,
              margin: 0,
              userSelect: "none",
              pointerEvents: "none",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            ”
          </p>

          <p
            className={styles.sectionText}
            style={{ position: "relative", zIndex: 2 }}
          >
            THE STANDARD OF EDUCATION AT INTERNATIONAL SCHOOLS IN SHANGHAI VARIES FROM INSTITUTION TO INSTITUTION WITHIN A VERY NARROW BANDWIDTH AT THE TOP OF THE SCALE
          </p>
        </div>
        


        <div className={styles.wellEducatedPart}>
          <h3 className={styles.sectionTitle}>WELL-EDUCATED</h3>
          <p className={styles.additionalText}>
            The standard of education at the majority of international schools in Shanghai varies from institution to institution within a very narrow bandwidth at the top of the scale. In other words, while there may be differences between schools, in terms of quality they are generally very good and staffed with western teachers and programs. This means you can be assured that your child will receive a top-quality international education during your time in Shanghai.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className={styles.videoSection}>
        <div className={styles.videoContainer}>
          <div className={styles.videoPlayer}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="A Look Inside Shanghai Community International School"
              className={styles.videoFrame}
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles.videoInfo}>
            <div className={styles.videoTitle}>
              A Look Inside Shanghai Community International...
            </div>
            <div className={styles.videoMeta}>
              <span className={styles.videoTime}>0:01 / 3:16</span>
              <div className={styles.videoControls}>
                {/* <ClosedCaptioning size={20} /> */}
                <Settings size={20} />
                <span className={styles.youtubeText}>YouTube</span>
                <Maximize size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
