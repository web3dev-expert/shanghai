"use client"

import PageLayout from "../components/page-layout"
import styles from "@/styles/table-of-contents.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
// import { ChevronLeft, ChevronRight, SkipBack, SkipForward, Play, Volume2, Maximize, MoreHorizontal } from "lucide-react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Volume2, Maximize, MoreHorizontal } from "lucide-react"
import Footer from "@/components/footer"
import Header from "@/components/header"

interface TableOfContentsProps {
  // onBackClick: () => void
  // onStartReading: () => void
  colorMode: string
}

const tableOfContentsData = {
  softLanding: [
    { title: "When you arrive", page: 146 },
    { title: "Health care", page: 148 },
    { title: "Getting around", page: 166 },
    { title: "Money and banking", page: 174 },
    { title: "Getting connected", page: 180 },
    { title: "Culture shock", page: 184 },
    { title: "Hotels", page: 188 },
    { title: "Serviced apartments", page: 198 },
    { title: "Serviced offices", page: 206 },
    { title: "Finding housing", page: 210 },
    { title: "Former French Concession", page: 214 },
    { title: "Jing'an and Zhongshan Park", page: 222 },
  ],
  livingTheLife1: [
    { title: "Xintiandi and People's Square", page: 230 },
    { title: "Xujiahui", page: 238 },
    { title: "Hongqiao and Gubei", page: 244 },
    { title: "Huacao and Xujing", page: 252 },
    { title: "Jinqiao and Kangqiao", page: 260 },
    { title: "Lujiazui and Century Park", page: 268 },
    { title: "Establishing your home", page: 276 },
    { title: "Food shopping", page: 280 },
    { title: "Eating and drinking", page: 292 },
    { title: "Nightlife", page: 316 },
    { title: "Shopping", page: 322 },
    { title: "Fitness and recreation", page: 342 },
    { title: "Day trips", page: 360 },
    { title: "Family activities", page: 370 },
    { title: "Health and wellness", page: 378 },
    { title: "Shanghai attractions", page: 386 },
    { title: "Community", page: 390 },
    { title: "Dating and marriage", page: 400 },
    { title: "Pets", page: 402 },
    { title: "Language courses", page: 406 },
    { title: "Asian escapes", page: 412 },
  ],
  maps: [
    { title: "Shanghai map", page: 12 },
    { title: "Education", page: 138 },
    { title: "Former French Concession", page: 220 },
    { title: "Jing'an and Zhongshan Park", page: 226 },
    { title: "Xintiandi and People's Square", page: 234 },
    { title: "Xujiahui", page: 240 },
    { title: "Hongqiao and Gubei", page: 248 },
    { title: "Huacao and Xujing", page: 256 },
    { title: "Jinqiao and Kangqiao", page: 264 },
    { title: "Lujiazui and Century Park", page: 272 },
    { title: "Subway map", page: 432 },
  ],
}

export default function RightTableOfContents({ colorMode }: TableOfContentsProps) {
  const renderSection = (title: string, entries: Array<{ title: string; page: number }>, maincolor: string, pagecolor: string, pageNumber?: string) => (
    <div className={styles.section}>
      <div style={{display: "flex"}}>
        <span style={{backgroundColor: maincolor, color: "white", padding: "0.5rem", width: "100%", textAlign: "right", textDecoration: "underline"}}>{title}</span>
        {<span style={{width: "3rem", backgroundColor: pagecolor, padding: "0.5rem", color: "white", fontWeight: "600", textAlign: "right"}}>{pageNumber}</span>}
      </div>
      <ul className={styles.entryList}>
        {entries.map((entry, index) => (
          <li key={index} className={styles.entry}>
            <span className={styles.entryTitle}>{entry.title}</span>
            <span className={styles.entryPage}>{entry.page}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className={styles.rightpage}>
      {/* Column 4 */}
        {renderSection("SOFT LANDING", tableOfContentsData.softLanding, "#3a4c63", "#9e9277", "142")}
        {renderSection("LIVING THE LIFE", tableOfContentsData.livingTheLife1, "#282a40", "#2da5d2", "288")}
        {renderSection("MAPS", tableOfContentsData.maps,"#675950", "#a1ac99")}
    </div>
  )
}
