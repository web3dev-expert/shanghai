"use client"

import Footer from "@/components/footer"
import PageLayout from "../components/page-layout"
import styles from "@/styles/book-introduction-page.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
import contentstyles from "@/styles/table-of-contents.module.css"
import { Play, Volume2, Maximize, List, Settings } from "lucide-react"
import Header from "@/components/header"

interface BookIntroductionPageProps {
  onBackClick: () => void
  onNextClick: () => void
}

const preparationsContent = [
  { title: "History", page: 30 },
  { title: "People and culture", page: 36 },
  { title: "Language", page: 48 },
  { title: "Geography", page: 50 },
  { title: "Climate", page: 54 },
  { title: "Police and crime", page: 56 },
  { title: "Books and films", page: 58 },
  { title: "Health preparations", page: 60 },
  { title: "Financial preparations", page: 62 },
  { title: "Visas", page: 64 },
  { title: "Relocation checklist", page: 70 },
  { title: "Pet relocation", page: 74 },
  { title: "Look-see trip", page: 82 },
  { title: "Pre-move survey", page: 84 },
  { title: "Shipping and packing", page: 85 },
  { title: "Education", page: 86 },
]

export default function BookIntroductionLeftPage() {
  return (
    <div className={styles.leftPage}>
      {/* Left Sidebar - Introduction */}
      <div className={styles.leftSidebar}>
        <div className={styles.lionStatue}></div>
      </div>
      <div className={styles.videoSection}>
        <div className={styles.verticalTitle}>INTRODUCTION</div>
        {/* Video/Image Area */}
        <div className={styles.videoArea}>
          <div className={styles.videoOverlay}></div>
          <div className={styles.videoControls}>
            <button className={styles.playButton}>
              <Play size={20} fill="white" />
            </button>
            <span className={styles.timeDisplay}>0:00</span>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
            <div className={styles.volumeControls}>
              <Volume2 size={20} />
              <Maximize size={20} />
              <Settings size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
