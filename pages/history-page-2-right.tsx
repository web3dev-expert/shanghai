"use client"

import Header from "@/components/header"
import PageLayout from "../components/page-layout"
import styles from "@/styles/history-page.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
import contentstyles from "@/styles/table-of-contents.module.css"
import { ChevronLeft, ChevronRight, Share, Info } from "lucide-react"
import Footer from "@/components/footer"

interface HistoryPage2Props {
  // onBackClick: () => void
  // onNextClick: () => void
}

export default function HistoryRightPage2() {
  return (
    <div className={styles.historyWrapper} style={{ padding: "1rem", paddingBottom: "0" }}>
      <div>
      </div>
      <div className={styles.contentLayout}>
        <div className={styles.textContent} style={{ columnCount: 2, columnFill: "auto" }}>
          <div className={styles.mainBody}>
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
                      While at times spectacular, Shanghai’s incredibly rapid rise can make it feel like the latest thing,
                      a city about the here and now rather than a place with its own character; and at times it just feels
                      like a giant construction site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            By the time Shanghai was awarded the 2010 World Expo in 2002, it was a modern megalopolis with a
            population approaching 20 million. The city spared no expense to impress visitors to the 2010 Expo,
            inspiring a building frenzy that resulted in a new terminal at Pudong International Airport, upgrades to
            the Nanjing Lu Pedestrian Mall and the Yan'an Elevated Expressway, new bridges and an underground public
            transportation system that has now overtaken London's in size. Shanghai has truly regained what many
            feel is its rightful place on the world stage.
            <br /><br />

            For a visitor from the recent past, Shanghai would be virtually unrecognizable. Basking in its boomtown
            exuberance, 21st-century Shanghai emanates a feeling of energy and adventure. This is a city which has
            no time for nostalgia as it blasts off into the future, never slowing and certainly not stopping for a
            moment to smell the roses. Then again, making money through economic adventure and old-fashioned
            industriousness is nothing new to the Shanghainese. The original characteristics that created Shanghai
            prosperity are still prevalent today: Chinese-Western trading relationships,
            innovative and entrepreneurial Chinese and Asian migrants, cheap, hard-working and plentiful labor and
            relatively hands-off government policy.
            <br /><br />

            Behind Shanghai's modern glitz, there are plenty of relics of the past. The architecture and street
            ambience of the Bund and the French Concession offer visitors a glimpse of Shanghai's colorful past, and
            any visitor who compares the elegant villas of the French Concession to the crowded quarters of the Old
            City can quickly imagine the historic income disparities of 1920s Shanghai. Those disparities still
            exist today of course and are also worth noting.
            <br /><br />

            Shanghai is sure to dazzle and intrigue any visitor, and it is worth taking a moment to reflect on where
            it came from, and where it might be going – since it's evolving daily and what remains of its past is
            fast disappearing amidst a sea of change.
          </div>
          <div className={`${styles.videoArea}`} style={{top: "32rem"}}>
            <div>
              <div className="videoWrapper" style={{height: "100%"}}>
                <video src="videos/cover.mp4" style={{height: "100%", margin: "auto"}} controls></video>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
