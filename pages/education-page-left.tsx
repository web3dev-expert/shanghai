
"use client"

import Header from "@/components/header"
import PageLayout from "../components/page-layout"
import styles from "@/styles/education-page.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
import Footer from "@/components/footer"
import { Play, Volume2, Settings, Maximize } from "lucide-react"

interface EducationPageProps {
  onBackClick?: () => void
  onNextClick?: () => void
}

export default function EducationLeftPage() {
  return (
    <div className={styles.educationPage}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        {/* Main Title */}
        <div className={styles.titleSection}>
          <h1 className={styles.mainTitle}>EDUCATION</h1>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Main Text Content */}
        <div className={styles.textContent}>
          <p className={styles.dropCap}>
            <span className={styles.firstLetter}>
              A
            </span>
            s a soon-to-be expat, one of the most important and difficult decisions you will make is where your child will go to school. While there will be a host of concerns and questions that arise during your search for a school for your child in Shanghai, generally speaking, international assignees have three main concerns: the safety of their children; the happiness of their children; and the quality of their children's education.
          </p>

          <div className={styles.sectionHeader}>
            <h3>SAFE</h3>
          </div>
          <p>
            International schools operating in Shanghai can be considered very safe by almost any assessment. These schools invariably employ high-quality accredited staff from the Americas, Europe and the UK (among many other countries) and have excellent and secure facilities and highly qualified Western management. The vast majority of expats arriving in Shanghai report that the international schools are actually safer than those they are used to in their home countries.
          </p>

          <div className={styles.sectionHeader}>
            <h3>HAPPY</h3>
          </div>
          <p>
            Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging, especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school programs are specifically designed to meet the challenges of moving to an international environment. In the sections that follow we will provide you with the tools and guidance to find the best fit for your child's education, to ensure that they are the beneficiaries of the type of education you want for them, in an environment offering them the best opportunity to be happy and successful in their new school.
          </p>
        </div>
      </div>
    </div>
  )
}
