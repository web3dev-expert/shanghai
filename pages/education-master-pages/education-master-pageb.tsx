"use client"

import { splitTextByHeight } from "@/lib/splitText-util";
import styles from "@/styles/education-master-page.module.css"
import { BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react";

const text = `Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly`

export default function EducationMasterPageB() {
    const hiddenRef = useRef<HTMLDivElement>(null);
    const divRef1 = useRef<HTMLDivElement>(null);
    const divRef2 = useRef<HTMLDivElement>(null);
    const divRef3 = useRef<HTMLDivElement>(null);
    const divRef4 = useRef<HTMLDivElement>(null);
    const divRef5 = useRef<HTMLDivElement>(null);

    const [part, setPart] = useState([""])
    const [fontSize, setFontSize] = useState("1dvw")
    const [size, setSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            const entry = entries[0];
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });

        if (divRef1.current) {
            resizeObserver.observe(divRef1.current);
        }

        return () => resizeObserver.disconnect();
    }, [])

    useEffect(() => {
        if (!hiddenRef.current) return;

        const hidden = hiddenRef.current;

        hidden.style.width = `${size.width}px`;

        // const measure = (testText: string): number => {
        //   hidden.textContent = testText;
        //   return hidden.scrollHeight;
        // };

        let temp = splitTextByHeight(text, divRef1.current?.offsetHeight, size.width, hiddenRef.current)
        let temp1 = splitTextByHeight(temp[1], divRef2.current?.offsetHeight, size.width, hiddenRef.current)
        let temp2 = splitTextByHeight(temp1[1], divRef3.current?.offsetHeight, size.width, hiddenRef.current)
        let temp3 = splitTextByHeight(temp2[1], divRef4.current?.offsetHeight, size.width, hiddenRef.current)
        let temp4 = splitTextByHeight(temp3[1], divRef5.current?.offsetHeight, size.width, hiddenRef.current)

        setPart([temp[0], temp1[0], temp2[0], temp3[0], temp4[0]])
    }, [size])

    return (
        <div className="lg:text-base md:text-lg sm:text-sm flex lg:flex-row flex-col p-[2rem] gap-[2rem] lg:h-[100%]">
            {/* Left Column */}
            <div className="flex lg:flex-row flex-col flex-1 justify-between lg:w-1/2 gap-[1rem]">
                <div className="flex flex-col lg:w-[50%]  gap-[1rem]">
                    <div className="flex flex-col flex-1">
                        <h1 className="pt-[0.5rem] pb-[0.5rem]" style={{ fontSize: "2rem", color: "black", fontWeight: "700", textTransform: "uppercase", borderTop: "5px solid black", borderBottom: "1px solid black" }}>
                            Education
                        </h1>
                        <div className="text-justify mt-[1rem] h-[100%]" ref={divRef1}>
                            {part[0]}
                        </div>
                    </div>
                    <div className={`${styles.videoArea}`}>
                        <div className="bg-black" style={{ height: "", bottom: 0 }}>
                            <video src="shanghai_master/videos/cover.mp4" style={{ width: "100%", height: "100dvw * 9 / 16", margin: "auto" }} controls></video>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%]  gap-[1rem] text-justify h-[100%]" ref={divRef2}>
                    {part[1]}
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col flex-1 justify-between lg:w-1/2 gap-[1rem]">
                <div className="flex lg:flex-row flex-col gap-[1rem]" style={{ height: "calc(100% - 50dvw * 9 / 16)" }}>
                    <div className="flex flex-col lg:w-[50%] gap-[1rem] h-full" style={{ margin: "auto" }}>
                        <div className="border-t-4 border-b-4 border-r-0 border-l-0 m-auto p-[2rem] h-full justify-between">
                                <div className={`flex-1 text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                    <p
                                        style={{
                                            position: "absolute",
                                            top: "70%",
                                            left: "50%",
                                            transform: "translate(-50%, -40%)",  // centers the element exactly in the middle
                                            fontSize: "450px",  // big size for background effect
                                            color: "rgba(0,0,0,0.2)",  // light and subtle
                                            zIndex: 1,
                                            margin: 0,
                                            userSelect: "none",
                                            pointerEvents: "none",
                                            fontWeight: "bold",
                                            lineHeight: 1,
                                        }}
                                    >
                                        ”
                                    </p>
                                    <p className={`${styles.quoteSection}`} style={{bottom: "1rem"}}>
                                        THE STANDARD OF EDUCATION AT INTERNATIONAL SCHOOLS IN SHANGHAI VARIES FROM INSTITUTION TO INSTITUTION WITHIN A VERY NARROW BANDWIDTH AT THE TOP OF THE SCALE
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%] text-justify h-full" ref={divRef3}>
                        {part[2]}
                    </div>
                </div>
                <div className="flex flex-row gap-[1rem]">
                    <div className={`${styles.videoArea} ${styles.videoArea1}`}>
                        <div className="bg-black" style={{ height: "100%" }}>
                            <video src="shanghai_master/videos/cover.mp4" style={{ width: "100%", height: "100dvw * 9 / 16", margin: "auto" }} controls></video>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hidden div for measuring text height */}
            <div
                ref={hiddenRef}
                className="invisible absolute leading-normal p-4 text-black text-justify"
                style={{
                    height: '0px',
                    padding: '0px',
                    position: 'absolute',
                    visibility: 'hidden',
                    zIndex: -1,
                    pointerEvents: 'none',
                }}
            />
        </div>
    )
}
