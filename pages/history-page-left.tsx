"use client"

import PageLayout from "../components/page-layout"
import styles from "@/styles/history-page.module.css"
import contentstyles from "@/styles/table-of-contents.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
import { ChevronLeft, ChevronRight, Play, BookOpen, Info } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HistoryLeftPage() {
  return (
    <div className={styles.historyWrapper} style={{ padding: "1rem", color: "black" }}>
      <div className={styles.contentLayout}>

        {/* Text Content */}
        <div className={styles.textContent} style={{ columnCount: 2, columnFill: "auto" }}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <BookOpen size={16} />
            </div>
            <h1 style={{ fontSize: "2rem", borderTop: "5px solid black", borderBottom: "1px solid black" }} className={styles.sectionHeaderTitle}>History</h1>
          </div>

          {/* Paragraph Subheading */}
          <h2 className={styles.paragraphSubheading}>A Brief history of China</h2>
          <div className={styles.mainBody}>
            <div className={`${styles.videoArea} ${styles.videoArea1}`}>
              <div>
                <div className="videoWrapper" style={{height: "100%"}}>
                  <video src="videos/cover.mp4" style={{height: "100%", margin: "auto"}} controls></video>
                </div>
              </div>
            </div>
            {/* Main Body Content */}
            <div>
              <div className={styles.dropCap}>
                <span className={styles.firstLetter}>
                  C
                </span>
                hina is one of the world's oldest civilizations, with thousands of years of continuous history. The
                first concrete evidence of civilization, dating back to the Neolithic era, was discovered in various
                regional centres along the Yangtze River and Yellow River valleys, although the Yellow River is said to
                be the cradle of Chinese civilization.
              </div>
              <br />

              In between eras of multiple kingdoms and warlords, Chinese dynasties, or more recently republics, have
              ruled a China of varying shapes and sizes. This began with the Qin Dynasty in 221 BC, when Qinshihuang
              united the various warring kingdoms, thus creating the first Chinese empire and beginning construction
              of the Great Wall.
              <br /><br />

              The Han Dynasty (202 BC-220 AD) was the first to embrace the philosophy of Confucianism, the tenets of
              which are still pervasive throughout modern Chinese society. Emperor Wu, the seventh of the Han
              emperors, extended the Chinese empire by pushing the invading Huns back into what is now Inner Mongolia.
              This enabled the first opening of trade connections between China and the West along the Silk Road.
              <br /><br />

              Successive Chinese dynasties used their sophisticated bureaucratic systems to control vast territories.
              In alternating periods of disunity, China was occasionally dominated by inner Asian peoples, most of
              whom were eventually assimilated into the Han Chinese population. Political and cultural influences from
              many parts of Asia, brought by waves of immigration, periods of expansion and cultural assimilation,
              formed the modern culture of China.
              <br /><br />
              The Qing Dynasty (1644-1911), founded by the Manchus, was the last dynasty and only the second not
              dominated by ethnic Hans, although the Manchus adopted the Confucian norms of traditional Chinese
              government. By the 19th century, the Qing empire had economically stagnated and was threatened by
              Western imperial powers.
              <br /><br />
              The Qing were soundly defeated in the First Opium War (1842) by the British, resulting in the ceding of
              Hong Kong and the legalization of opium imports. By 1870, opium accounted for over 40 percent of all
              goods imported to China.
              <br /><br />
              Subsequent civil wars and military defeats to outsiders continually weakened the government until it was
              overthrown by several factions united under the revolutionary ideas of Sun Yat-sen. After Sun's death in
              1925, Chiang Kai-shek seized control of the Kuomintang (Nationalist Party or KMT) and brought most of
              China under his control, eventually turning on the Communist Party.
              <br /><br />
              This drove them across China's most desolate terrain to Yan'an on the Long March. From there, the
              Communist Party regrouped under the leadership of a young Mao Zedong, returned north and succeeded in
              toppling the KMT and forcing them to the island of Taiwan in 1949 where they remain an active political
              party to this day.

              This drove them across China's most desolate terrain to Yan'an on the Long March.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
