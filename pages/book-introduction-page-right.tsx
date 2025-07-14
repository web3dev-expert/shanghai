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

export default function BookIntroductionRightPage() {
  return (
    <div className={styles.pageContent}>

      {/* Main Content Area */}
      <div className={styles.contentArea}>
        <div className={styles.rightPage}>
          {/* Center Content */}
          <div className={styles.centerContent}>

            {/* Introduction Text */}
            <div className={styles.introductionText}>
              <h2 className={styles.introTitle}>Introduction</h2>
              <div className={styles.introContent}>
                <p>
                  As you progress through this section, your understanding of the city you will soon call home will
                  flourish; and while you may have visited Shanghai in the past or possess previous knowledge to some
                  degree, you can trust that you will be seeing things in a new light from now on.
                </p>
                <p>
                  Successful relocations begin with knowledge and are fuelled by planning and preparation. Start your
                  preparations early and be meticulous in your planning. This will develop your confidence, which is a
                  key element in reducing the stress that is often associated with a major life transition.
                </p>
                <p>Going Global is designed to make a difference – take advantage of it, and we know it will.</p>
              </div>
            </div>
          </div>
          {/* Right Sidebar - Contents */}
          <div className={styles.rightSidebar}>
            <div className={styles.contentsSection}>
              <div className={styles.contentsHeader}>Preparations</div>
              <div className={styles.contentsList}>
                {preparationsContent.map((item, index) => (
                  <div key={index} className={styles.contentsEntry}>
                    <span className={styles.entryTitle}>{item.title}</span>
                    <span className={styles.entryPage}>{item.page}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
