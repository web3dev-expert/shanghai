"use client"

import originstyles from "@/styles/responsive-layout.module.css"
import contentstyles from "@/styles/table-of-contents.module.css"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface EdgeNavigationProps {
  onBackClick: () => void
  onNextClick: () => void
}

export default function EdgeNavigation({ onBackClick, onNextClick }: EdgeNavigationProps) {
  return (
    <div className={originstyles.bookLayout}>        
        <div className={`${contentstyles.edgeNavigation} ${contentstyles.leftEdgeNav}`}>
            <div className={`${contentstyles.edgeTrigger} ${contentstyles.leftEdgeTrigger}`}></div>
            <button
                className={`${contentstyles.edgeNavButton} ${contentstyles.leftEdgeNavButton}`}
                onClick={onBackClick}
                aria-label="Previous page"
            >
                <ChevronLeft size={24} />
            </button>
            <div className={`${contentstyles.pageIndicator} ${contentstyles.leftPageIndicator}`}>Previous Page</div>
        </div>
        <div className={`${contentstyles.edgeNavigation} ${contentstyles.rightEdgeNav}`}>
            <div className={`${contentstyles.edgeTrigger} ${contentstyles.rightEdgeTrigger}`}></div>
            <button
                className={`${contentstyles.edgeNavButton} ${contentstyles.rightEdgeNavButton}`}
                onClick={onNextClick}
                aria-label="Next page"
            >
                <ChevronRight size={24} />
            </button>
            <div className={`${contentstyles.pageIndicator} ${contentstyles.rightPageIndicator}`}>Next Page</div>
        </div>
    </div>
  )
}
