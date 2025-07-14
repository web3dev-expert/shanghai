"use client"

import React, { ComponentType, ReactNode, useEffect, useRef, useState } from "react"
import VideoIntro from "@/pages/video-intro"
import ShanghaiPage from "@/pages/shanghai-page"
import LeftTableOfContents from "@/pages/table-of-contents-left"
import HistoryLeftPage from "@/pages/history-page-left"
import HistoryLeftPage2 from "@/pages/history-page-2-left"
import PeopleCultureLeftPage from "@/pages/people-culture-page-left"

// import HTMLFlipBook from 'react-pageflip';
import HTMLFlipBook, { HTMLFlipBookElement } from 'react-pageflip';
import SinglePage from '@/pages/singlepage';

import sidebarStyle from '@/styles/sidebar.module.css'

import PeopleCultureRightPage from "@/pages/people-culture-page-right"
import HistoryRightPage2 from "@/pages/history-page-2-right"
import HistoryRightPage from "@/pages/history-page-right"
import RightTableOfContents from "@/pages/table-of-contents-right"
import BookIntroductionRightPage from "@/pages/book-introduction-page-right"
import BookIntroductionLeftPage from "@/pages/book-introduction-page-left"
import AsianEscapesLeftPage from "@/pages/asian-escape-page-left"
import AsianEscapesRightPage from "@/pages/asian-escape-page-right"
import EducationLeftPage from "@/pages/education-page-left"
import EducationRightPage from "@/pages/education-page-right"
import MapLeftPage from "@/pages/map-page-left"
import MapRightPage from "@/pages/map-page-right"
import MapPage from "@/pages/map-page"

import { ThemeProvider, useTheme } from "next-themes";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer"
import EducationListLeftPage from "@/pages/educationlist-page-left"
import EducationListRightPage from "@/pages/educationlist-page-right"
import Header from "@/components/header"
import educationMainPage from "@/pages/education-main-page"
import SecondMasterPage from "@/pages/history-master-pages/second-master-page"
import ThirdMasterPage from "@/pages/history-master-pages/third-master-page"
import FirstMasterPage from "@/pages/history-master-pages/first-master-page"
import EducationMasterPageA from "@/pages/education-master-pages/education-master-pagea"
import EducationMasterPageB from "@/pages/education-master-pages/education-master-pageb"
import EducationMasterPageC from "@/pages/education-master-pages/education-master-pagec"
import AsianMasterPage from "@/pages/asianescape-master-pages/asian-master-page"
import MultiColumnText from "@/pages/temp"
import TextSplitter from "@/pages/temp"
import SplitText from "@/components/SplitText"
import AsianMasterCityPage from "@/pages/asianescape-master-pages/asian-master-city-page"
import { Menu } from "lucide-react"

const BookList = [
  { page: LeftTableOfContents, sectionTitle: "PREPARATIONS", subTitle: "Table of contents", pageNubmer: "86" },
  { page: RightTableOfContents, sectionTitle: "PREPARATIONS", subTitle: "Table of contents", pageNubmer: "87" },
  // { page: BookIntroductionLeftPage, sectionTitle: "PREPARATIONS", subTitle: "", pageNubmer: "28" },
  // { page: BookIntroductionRightPage, sectionTitle: "PREPARATIONS", subTitle: "", pageNubmer: "29" },
  // { page: HistoryLeftPage, sectionTitle: "PREPARATIONS", subTitle: "History", pageNubmer: "30" },
  // { page: HistoryRightPage, sectionTitle: "PREPARATIONS", subTitle: "History", pageNubmer: "31" },
  { page: FirstMasterPage, sectionTitle: "Preparations", subTitle: "History", pageNubmer: "30", type: "master" },
  { page: FirstMasterPage, sectionTitle: "Preparations", subTitle: "History", pageNubmer: "31", type: "master" },
  { page: SecondMasterPage, sectionTitle: "Preparations", subTitle: "History", pageNubmer: "223", type: "master" },
  { page: SecondMasterPage, sectionTitle: "Preparations", subTitle: "History", pageNubmer: "223", type: "master" },
  { page: ThirdMasterPage, sectionTitle: "Preparations", subTitle: "History", pageNubmer: "223", type: "master" },
  { page: ThirdMasterPage, sectionTitle: "Preparations", subTitle: "History", pageNubmer: "223", type: "master" },
  { page: EducationMasterPageA, sectionTitle: "Preparations", subTitle: "Education", pageNubmer: "224", type: "master" },
  { page: EducationMasterPageA, sectionTitle: "Preparations", subTitle: "Education", pageNubmer: "225", type: "master" },
  { page: EducationMasterPageB, sectionTitle: "Preparations", subTitle: "Education", pageNubmer: "224", type: "master" },
  { page: EducationMasterPageB, sectionTitle: "Preparations", subTitle: "Education", pageNubmer: "225", type: "master" },
  { page: EducationMasterPageC, sectionTitle: "Preparations", subTitle: "Education", pageNubmer: "224", type: "master" },
  { page: EducationMasterPageC, sectionTitle: "Preparations", subTitle: "Education", pageNubmer: "225", type: "master" },
  { page: AsianMasterPage, sectionTitle: "Preparations", subTitle: "Asian Escapes", pageNubmer: "224", type: "master" },
  { page: AsianMasterPage, sectionTitle: "Preparations", subTitle: "Asian Escapes", pageNubmer: "225", type: "master" },
  { page: AsianMasterCityPage, sectionTitle: "Preparations", subTitle: "Asian Escapes", pageNubmer: "224", type: "master" },
  { page: AsianMasterCityPage, sectionTitle: "Preparations", subTitle: "Asian Escapes", pageNubmer: "225", type: "master" },
  // { page: HistoryLeftPage2, sectionTitle: "PREPARATIONS", subTitle: "History", pageNubmer: "32" },
  // { page: HistoryRightPage2, sectionTitle: "PREPARATIONS", subTitle: "History", pageNubmer: "33" },
  // { page: PeopleCultureLeftPage, sectionTitle: "PREPARATIONS", subTitle: "People and culture", pageNubmer: "36" },
  // { page: PeopleCultureRightPage, sectionTitle: "PREPARATIONS", subTitle: "People and culture", pageNubmer: "37" },
  // { page: AsianEscapesLeftPage, sectionTitle: "LIVING THE LIFE", subTitle: "Asian escapes", pageNubmer: "412" },
  // { page: AsianEscapesRightPage, sectionTitle: "LIVING THE LIFE", subTitle: "Asian escapes", pageNubmer: "413" },
  // { page: EducationLeftPage, sectionTitle: "PREPARATIONS", subTitle: "Education", pageNubmer: "86" },
  // { page: EducationRightPage, sectionTitle: "PREPARATIONS", subTitle: "Education", pageNubmer: "87" },
  { page: educationMainPage, sectionTitle: "Preparations", subTitle: "Education Main", pageNubmer: "224", link: 10 },
  { page: educationMainPage, sectionTitle: "Preparations", subTitle: "Education Main", pageNubmer: "225", link: 10 },
  { page: EducationListLeftPage, sectionTitle: "PREPARATIONS", subTitle: "Education Listing", pageNubmer: "222" },
  { page: EducationListRightPage, sectionTitle: "PREPARATIONS", subTitle: "Education Listing", pageNubmer: "223" },
  // { page: MapLeftPage, sectionTitle: "SOFT LANDING", subTitle: "Former French Concession", pageNubmer: "220" },
  // { page: MapRightPage, sectionTitle: "SOFT LANDING", subTitle: "Former French Concession", pageNubmer: "221" },
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 1920, height: 1080 * 2.2 });

  const [currentPage, setCurrentPage] = useState<"video" | "shanghai" | "next" | "contents" | "history" | "history2" | "culture" | "reading" | "introduction">("video")
  const [next, setNext] = useState(false);
  const [fastnext, setFastNext] = useState(false);
  const [previous, setPrevious] = useState(false);
  const [fastprevious, setFastPrevious] = useState(false);
  const [previous10, setPrevious10] = useState(false);
  const [next10, setNext10] = useState(false);
  const [viewmode, setViewMode] = useState("");
  const [contentColor, setContentColor] = useState("");

  const [specificPage, setSpecPage] = useState(-1);

  const bookRef = useRef<HTMLFlipBookElement | null>(null);
  const bookRef1 = useRef<HTMLFlipBookElement | null>(null);

  useEffect(() => {
    let mobPageNum = 0;
    let lapPageNum = 0;

    if (!bookRef1.current?.pageFlip()) return;

    if (bookRef1.current?.pageFlip()) {
      lapPageNum = bookRef1.current.pageFlip().getCurrentPageIndex();
    }

    if (next === true) {
      bookRef1.current?.pageFlip().flipNext();
      setNext(false)
    }
    if (fastnext === true) {
      setFastNext(false)
      bookRef1.current?.pageFlip().turnToPage(lapPageNum + 4);
    }
    if (previous === true) {
      bookRef1.current?.pageFlip().flipPrev();
      setPrevious(false)
    }
    if (fastprevious === true) {
      if (lapPageNum > 3) bookRef1.current?.pageFlip().turnToPage(lapPageNum - 3);
      setFastPrevious(false)
    }
    if (previous10 === true) {
      if (lapPageNum > 9) bookRef1.current?.pageFlip().turnToPage(lapPageNum - 9);
      setPrevious10(false)
    }
    if (next10 === true) {
      // console.log("fast10Next", mobPageNum, lapPageNum)
      bookRef1.current?.pageFlip().turnToPage(lapPageNum + 10);
      setNext10(false)
    }
  }, [next, fastnext, previous, fastprevious, next10, previous10])

  useEffect(() => {
    if (!bookRef1.current?.pageFlip()) return;

    if (specificPage > 0) {
      bookRef1.current?.pageFlip().turnToPage(specificPage);
      // console.log("specific page:", specificPage, bookRef1.current?.pageFlip)
      setSpecPage(-1)
    }
  }, [specificPage])

  useEffect(() => {
    console.log(window.innerHeight, window.innerWidth)
  }, []);

  const { theme, resolvedTheme } = useTheme();

  const handleVideoEnd = () => {
    setCurrentPage("shanghai")
  }

  const handlePowerButtonClick = () => {
    setCurrentPage("next")
  }

  const handleNavigateToContents = () => {
    if (bookRef.current) bookRef.current?.pageFlip().turnToPage(0);
    if (bookRef1.current) bookRef1.current?.pageFlip().turnToPage(0);
  };

  if (currentPage === "video") {
    return <VideoIntro onVideoEnd={handleVideoEnd} />
  }

  if (currentPage === "shanghai") {
    return <ShanghaiPage onPowerButtonClick={handlePowerButtonClick} />
  }

  const PageLayout = (Page: ComponentType<any>, sectionTitle: string, subTitle: string, pageNubmer: number, part: string, type?: string) => {
    if (type === "master") {
      return (
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc" }}>
          <div style={{ height: "5dvh" }}>
            <Header sectionTitle={sectionTitle} subTitle={subTitle} pageNumber={pageNubmer} part={part} />
          </div>
          {
            part === "left" ?
              <div style={{ height: "90dvh", width: "200%" }}>
                <Page linkClick={setSpecPage} />
              </div> :
              <div style={{ height: "90dvh", width: "200%", clipPath: 'inset(0 0 0 50%)', transform: 'translateX(-50%)' }}>
                <Page linkClick={setSpecPage} />
              </div>
          }
          <div style={{ height: "5dvh", overflow: "hidden", display: "flex", backgroundColor: "black", justifyContent: "center" }}>
            <Footer
              part={part}
              clickNext={setNext}
              clickFastNext={setFastNext}
              clickPrevious={setPrevious}
              clickFastPrevious={setFastPrevious}
              click10Previous={setPrevious10}
              click10Next={setNext10}
            />
          </div>
        </div>
      )
    }
    // return <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc" }} className="sm:h-[100vh] md:h-[100vh] lg:h-[100vh] xs:h-[100vh] h-[calc(100vh-50px)]">
    else return <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", height: "100dvh" }}>
      <div style={{ height: "5dvh" }}>
        <Header sectionTitle={sectionTitle} subTitle={subTitle} pageNumber={pageNubmer} part={part} />
      </div>
      <div style={{ height: "90dvh" }}>
        <Page linkClick={setSpecPage} />
      </div>
      <div style={{ height: "5dvh", overflow: "hidden", display: "flex", backgroundColor: "black", justifyContent: "center" }}>
        <Footer
          part={part}
          clickNext={setNext}
          clickFastNext={setFastNext}
          clickPrevious={setPrevious}
          clickFastPrevious={setFastPrevious}
          click10Previous={setPrevious10}
          click10Next={setNext10}
        />
      </div>
    </div>
  }

  const PageMobileLayout = (LeftPage: ComponentType<any>, RightPage: ComponentType<any>, sectionTitle: string, subTitle: string, pageNubmer: number, part: string, type?: string) => {
    return <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", height: "100dvh" }} className="h-dvh">
      <div style={{ height: "6dvh" }}>
        <Header sectionTitle={sectionTitle} subTitle={subTitle} pageNumber={pageNubmer} part={part} />
      </div>
      <div style={{ height: "100%", overflow: "auto" }}>
        {
          type !== "master" ? <>
            <LeftPage linkClick={setSpecPage} />
            <RightPage linkClick={setSpecPage} />
          </> :
            <LeftPage />
        }
      </div>
      <div style={{ height: "6dvh", overflow: "hidden", display: "flex", backgroundColor: "black", justifyContent: "center" }}>
        <Footer
          part={part}
          clickNext={setNext}
          clickFastNext={setFastNext}
          clickPrevious={setPrevious}
          clickFastPrevious={setFastPrevious}
          click10Previous={setPrevious10}
          click10Next={setNext10}
        />
      </div>
    </div>
  }

  const chooseView = () => {
    if (window.innerWidth > 768) {
      return BookList.map((page, index) => {
        // console.log(window.innerWidth)
        return <SinglePage number={`${index + 1}`} key={index}>
          {index % 2 == 0 ? PageLayout(page.page, page.sectionTitle, page.subTitle, index + 1, "left", page.type) : PageLayout(page.page, page.sectionTitle, page.subTitle, index + 1, "right", page.type)}
        </SinglePage>
      })
    } else {
      // console.log(window.innerWidth)
      let div = []
      for (let index = 0; index < BookList.length; index += 2) {
        div.push(<SinglePage number={`${index / 2}`} key={index / 2}>
          {PageMobileLayout(BookList[index].page, BookList[index + 1].page, BookList[index].sectionTitle, BookList[index].subTitle, index / 2, "left", BookList[index].type)}
        </SinglePage>)
      }
      return div
    }
  }

  return (
    // <RightTableOfContents colorMode={""} />
    // <SecondMasterPage />
    // <FirstMasterPage />
    // <EducationMasterPageA />
    // <AsianMasterPage2 />
    // <div className="flex items-center justify-center p-4">
    // <div className="aspect-[16/9] w-full max-w-[1500px] bg-white rounded-2xl shadow-lg">
    // <div className="flex items-center justify-center min-h-screen p-4">
    // <div className="aspect-[16/9] w-full max-w-[1200px] bg-white rounded-2xl shadow-lg">
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={false} >
          <AppSidebar onNavigateToContents={handleNavigateToContents} getColorMode={setContentColor} />
          <SidebarInset>
            <div className={`flex h-2 items-center gap-2 px-4 pt-4 absolute ${sidebarStyle.sidebarForMob}`} style={{ zIndex: 100, translate: "1.4rem 96dvh" }}>
              <SidebarTrigger size={"lg"} className="-ml-1 w-12 h-12 bg-transparent p-2 rounded-full shadow-md hover:opacity-80 transition">
                <img
                  src="shanghai_master/images/btn/side_btn.jpg" // <-- Update with your actual image path
                  alt="Toggle Sidebar"
                  className="w-[300px] h-[300px] object-contain"
                />
              </SidebarTrigger>
            </div>
            <div className="overflow-hidden">
              <div className={`w-full h-full`}>
                <div className="mx-auto" ref={containerRef}>
                  <div>
                    <HTMLFlipBook
                    className="shadow-lg rounded-md mx-auto"
                      width={300}
                      height={1500}
                      size="stretch"
                      minWidth={315}
                      maxWidth={1000}
                      minHeight={400}
                      maxHeight={1533}
                      mobileScrollSupport={true}
                      disableFlipByClick={false}
                      onChangeOrientation={e => setViewMode(e.data)}
                      flippingTime={1000}
                      usePortrait={true}
                      useMouseEvents={false}
                      ref={bookRef1}
                    >
                      {
                        chooseView()
                      }
                    </HTMLFlipBook>
                  </div>
                </div>
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </div>
    // </div>
    //  </div>
  )
}
