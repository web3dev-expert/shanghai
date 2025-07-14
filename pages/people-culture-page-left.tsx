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

export default function PeopleCultureLeftPage() {
  return (
    <div>
      <div>
        <div className={styles.globeLogo}>
          <img
            src="images/newGlobe.jpeg"
            alt="Fantasy Globe"
            style={{
              height: '40px',
              objectFit: 'cover',
              position: 'relative',
              left: '15%'
            }}
          />
        </div>
      </div>
      <div className={styles.contentLayout}>
        <div className={styles.column1}>
          <div className={styles.textContent}>
            {/* Section Header */}
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIcon}>
                <User size={20} />
              </div>
              <h1 className={styles.sectionHeaderTitle}>People and Culture</h1>
            </div>


            <p className={styles.mainBodyIntro}>
              Becoming familiar with a new people and culture is one of the most exciting aspects of travelling and
              working abroad. With a population of over 20 million, Shanghai is one of the world's biggest, most
              vibrant and most diverse cities. Getting to know and understand people in Shanghai will no doubt be a
              source of endless wonderment. On the other hand, it will also be a challenge that will require effort,
              patience, respect and, at times, a good sense of humor. Overall, Shanghainese are very friendly and
              welcoming to foreigners, eager to share their culture and learn from yours, and you won't have trouble
              meeting new people and building short- and long-term friendships and business relationships.
            </p>

            <p className={styles.mainBody}>
              Before 1843, Shanghainese culture came from the ancient kingdoms of the Wu and the Yue, from Jiangsu and
              Zhejiang provinces. Since Shanghai emerged as a commercial center in the 19th century, the city has
              always been a melting pot, drawing people from all over China and the world.
            </p>
          </div>
          <div className={styles.textContent}>
            <p className={styles.mainBody}>
              Its port location and
              infamy as a commercial hub have attracted migrants from the countryside for decades. And since foreign
              companies were welcomed in the 1990s, the number of foreign visitors has ballooned. Today, there are at
              least 100,000 foreign nationals on temporary residence visas living in the city.
            </p>
            <p className={styles.mainBody}>
              Shanghai has long been known throughout China – and much of the world – as the nexus of East and West.
              Indeed, the city became known for its haipai (literally 'ocean culture') well over a century ago after
              the Treaty of Nanking, when the first British traders settled on a muddy riverbank along the Huangpu.
              The reputation of Shanghainese as welcoming to foreigners and foreign customs gained currency during the
              century of Western control over the city from 1842 to 1937, when the city was considered a 'foreigners'
              playground'. The Shanghainese are still proud of their international and cosmopolitan history, although
              Chinese from other parts of the country interpret this pride as arrogant, and even patriotic. On the
              other hand, other Chinese people can be considered by Shanghainese as waidiren (outlanders) or tubaozi
              (country bumpkins). Indeed, many of the throngs of newcomers that have migrated to Shanghai over the
              past few decades have arrived from impoverished rural areas.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
