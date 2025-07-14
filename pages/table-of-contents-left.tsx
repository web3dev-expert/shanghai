"use client"

import PageLayout from "../components/page-layout"
import styles from "@/styles/table-of-contents.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
// import { ChevronLeft, ChevronRight, SkipBack, SkipForward, Play, Volume2, Maximize, MoreHorizontal } from "lucide-react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Volume2, Maximize, MoreHorizontal } from "lucide-react"
import Footer from "@/components/footer"
import Header from "@/components/header"
import PageControls from "@/components/pagecontroller"

interface TableOfContentsProps {
  // onBackClick: () => void
  // onStartReading: () => void
  colorMode: string
}

const tableOfContentsData = {
  preparations: [
    { title: "History", page: 30 },
    { title: "People and culture", page: 36 },
    { title: "Language", page: 48 },
    { title: "Geography", page: 50 },
    { title: "Cityscape", page: 51 },
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
  ],
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
  ],
  livingTheLife2: [
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

export default function LeftTableOfContents() {
  const renderSection = (title: string, entries: Array<{ title: string; page: number }>, pageNumber?: string) => (
    <div className={styles.section}>
      <div style={{display: "flex"}}>
        {title !== "" && <span style={{color: "white", backgroundColor: "black", padding: "0.5rem", width: "100%", textAlign: "right", textDecoration: "underline"}}>{title}</span>}
        {<span style={{backgroundColor: "#ccc", width: "3rem", wordWrap: "break-word", padding: "0.5rem", color: "white", fontWeight: "600", textAlign: "right"}}>{pageNumber}</span>}
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
      <div className={styles.leftpage}>
        {/* Featured Image - Spans columns 1-2 */}
        <div className="videoWrapper" style={{height: "100%"}}>
          <video src="shanghai_master/videos/cover.mp4" style={{height: "100%", margin: "auto"}} controls></video>
        </div>
        <div className={styles.dividerow}>
          {/* Column 1 - Below image */}
          {renderSection("PREPARATIONS", tableOfContentsData.preparations, "26")}
          {/* <div>
            <img
              src="images/newGlobe.jpeg"
              alt="Fantasy Globe"
              style={{
                height: '100px',
                objectFit: 'cover',
                margin: "auto"
              }}
            />
          </div> */}
        </div>
      </div>
  )
}
