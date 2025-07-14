"use client"

import PageLayout from "../components/page-layout"
import styles from "@/styles/history-page.module.css"
import contentstyles from "@/styles/table-of-contents.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
import { ChevronLeft, ChevronRight, Play, BookOpen, Info } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface HistoryPageProps {
  // onBackClick: () => void
  // onNextClick: () => void
}

export default function HistoryRightPage() {
  return (
    <div className={styles.historyWrapper} style={{ padding: "1rem", color: "black" }}>
      <div className={styles.contentLayout}>
        <div className={styles.textContent} style={{ columnCount: 2, columnFill: "auto", position: "relative" }}>
          <div className={styles.mainBody}>
            Chairman Mao's original social and economic plan, the Great Leap Forward, was a complete disaster for
            the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
            allies launched the Cultural Revolution, which sought to eradicate all traditional and capitalist elements from Chinese society.
            <br /><br />
            After Mao's death in 1976, reformers led by Deng Xiaoping gained prominence and most of the Maoist
            'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
            blossom under open market reforms and the welcoming of foreign investment.
            <br /><br />

            Shanghai emerged as a popular export center for the British East India Company in the 18th century as
            Chinese silk, porcelain and tea became popular in Great Britain. However, the isolationist Qing Dynasty
            had no desire for Western goods, thus creating an unsustainable trade imbalance.
            <br /><br />

            To rectify the situation, the British took advantage of the Chinese penchant for opium smoking by
            cultivating and importing a superior product from India. When China resisted by seizing the opium and
            restricting trade access, the industrialized British army overpowered the Chinese in what became known
            as the First Opium War.
            <br /><br />


            <h2 className={styles.paragraphSubheading}>A Brief History of Shanghai</h2>
            <div className={styles.dropCap}>
              <span className={styles.firstLetter}>S</span>
              hanghai's historical evolution from a sleepy fishing and textile port on the Yangtze Delta to a fully
              fledged world-class city has been formed by lucrative Chinese-Western trading relationships, cheap and
              plentiful labor from impoverished rural areas and the city's relative peace compared with the rest of
              China in the 19th and 20th centuries.
            </div>
            <br />

            In the resulting 1842 Treaty of Nanking, the Chinese ceded Hong Kong and extraterritorial concessions in
            five cities, including Shanghai. The British named their new autonomous settlement along the Huangpu
            River the Bund, which was later consolidated with the American community to form the International
            Settlement.
            <br /><br />

            <div style={{}}>
              In the resulting 1842 Treaty of Nanking, the Chinese ceded Hong Kong and extraterritorial concessions in
              five cities, including Shanghai. The British named their new autonomous settlement along the Huangpu
              River the Bund, which was later consolidated with the American community to form the International
              Settlement.
            </div>
            <br />

            In the resulting 1842 Treaty of Nanking, the Chinese ceded Hong Kong and extraterritorial concessions in
            five cities, including Shanghai. The British named their new autonomous settlement along the Huangpu
            River the Bund, which was later consolidated with the American community to form the International
            Settlement.
            <br />

            In the resulting 1842 Treaty of Nanking, the Chinese ceded Hong Kong and extraterritorial concessions in
            five cities, including Shanghai. The British named their new autonomous settlement along the Huangpu
            River the Bund, which was later consolidated with the American community to form the International
            Settlement.
            <br />

          </div>
          <div style={{ position: "absolute", bottom: "0" }}>
            <div className={`${styles.videoArea} ${styles.videoArea2}`}>
              <div>
                <div className="videoWrapper" style={{ height: "100%" }}>
                  <video src="videos/cover.mp4" style={{ height: "100%", margin: "auto" }} controls></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
