"use client"

import type React from "react"
import styles from "@/styles/responsive-layout.module.css"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
      <div className={styles.pageLayout}>
        <div className={`${styles.contentArea} ${className}`}>{children}</div>
      </div>
  )
}
