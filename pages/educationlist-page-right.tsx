
"use client"

import { useRef, useState } from "react"
import Image from "next/image"

import styles from "@/styles/educationlist-page.module.css"
import originstyles from "@/styles/responsive-layout.module.css"

import Header from "@/components/header"
import {
  Info, DollarSign, Film, FileText, Landmark, Calendar,
  Facebook, Twitter, Linkedin, Youtube, Instagram, Star, Mail, Globe,
  Flag, Languages, Pencil, GraduationCap, Heart, Clock, Trophy, Building2
} from 'lucide-react';

interface AsianEscapesPageProps {
  onBackClick?: () => void
  onNextClick?: () => void
}

const accordionData = [
  { label: "Nationalities", icon: <Flag color="#000" size={20} />, content: "Nationalities content goes here." },
  { label: "Languages", icon: <Languages color="#000" size={20} />, content: "Languages content goes here." },
  { label: "Classroom", icon: <Pencil color="#000" size={20} />, content: "Classroom content goes here." },
  { label: "Academics", icon: <GraduationCap color="#000" size={20} />, content: "Academics content goes here." },
  { label: "Student support", icon: <Heart color="#000" size={20} />, content: "Student support content goes here." },
  { label: "Admissions", icon: <FileText color="#000" size={20} />, content: "Admissions content goes here." },
  { label: "School day", icon: <Clock color="#000" size={20} />, content: "School day content goes here." },
  { label: "Extracurricular activities", icon: <Trophy color="#000" size={20} />, content: "Extracurricular activities content goes here." },
  { label: "Facilities", icon: <Building2 color="#000" size={20} />, content: "Facilities content goes here." },
  { label: "About the school", icon: <Info color="#000" size={20} />, content: "About the school content goes here." },
];

const collapseTableData = [
  {
    label: "About",
    icon: <Info color="#000" size={20} />,
    innerData: [
      {
        subTitle: "Qualities and characteristics best defining the school",
        body: ["Wellington College International Shanghai is a premium, fully co-educational day school with over 1600 pupils, aged 2 to 18 years old. Consistent with the ethos of its prestigious partner in the UK, the College encourages its pupils to be Inspired, Intellectual, Independent, Individual and Inclusive. The school follows the English National Curriculum supplemented by the International Primary Curriculum as well as the IGSCE and IB Diploma Programme for its Senior School pupils. Pupils in its Early Years Centre learn according to the UK’s Early Years Foundation Stage. Boasting a state-of-the-art campus, Wellington offers a vibrant community where all pupils strive for academic excellence and engage in a range of opportunities in music, performing arts and sports."]
      },
      {
        subTitle: "Teaching approach of the school",
        body: ["Nursery to year 9: English National Curriculum and International Primary Curriculum", "Years 10 and 11: IGCSE", "Years 12 and 13: IB Diploma Programme"]
      }
    ]
  },
  {
    label: "Languages",
    icon: <Languages color="#000" size={20} />,
    innerData: [
      {
        subTitle: "Native English-speaking teachers",
        body: ["Yes"]
      },
      {
        subTitle: "Language support for students not fluent in English: ",
        body: ["English is the language of instruction. Wellington has an EAL, English as an Additional Language Programme, for a small number of pupils for whom English is not their first language and who need some extra support in being academically fluent in reading, writing, listening and speaking."]
      },
      {
        subTitle: "Additional language classes offered by the school:",
        body: ["English, Chinese, French and Spanish"]
      }
    ]
  },
  {
    label: "Classroom",
    icon: <Pencil color="#000" size={20} />,
    innerData: [
      {
        subTitle: "Maximum number of students per class: ",
        body: ["Nursery: 16; Reception: 18; Year 1 to 13: 22"]
      },
      {
        subTitle: "Does the school employ teaching assistants?",
        body: ["Yes, there is 1 TA per class from Nursery to year 5."]
      },
      {
        subTitle: "Use of technology in the classroom	: ",
        body: ["Classrooms are equipped with interactive whiteboards and projectors."]
      },
      {
        subTitle: "Is the school ready to use virtual classrooms when needed? (e.g. teaching lessons online if the school is closed, e.g. during COVID-19 closures)",
        body: ["Yes"]
      },
      {
        subTitle: "Do students practice religion at the school? What religion?",
        body: ["Wellington is a secular school."]
      },
    ]
  },
  {
    label: "Academics",
    icon: <GraduationCap color="#000" size={20} />,
    innerData: [
      {
        subTitle: "External examinations or assessments available:",
        body: ["IB Diploma and IGCSE"]
      },
      {
        subTitle: "Results in these examinations: ",
        body: [
          "IB Diploma The results of the 2021 IB exams have been released, and, once again, our leavers have given a stellar performance. Their scores mark the culmination of two years of hard work and dedication that will yield massive dividends in the future. Over 1/3 of pupils achieved a score of 40+ (out of maximum 45) with 1/3 also earning a bilingual diploma.",
          "IGCSE The 2019 IGCSE results were Wellington’s fourth set of excellent outcomes. This was the first year working with a mixed economy of CIE grades (A*-G) and Edexcel (9-1). 72% of all 2019 IGCSE grades were grade 9-7, or equivalent A*/A. 92% of all 2019 IGCSE grades were 9-6 or A*-B."
        ]
      },
      {
        subTitle: "Do teachers assign homework to their students? ",
        body: ["Yes"]
      },
      {
        subTitle: "Approximate hours of homework given: ",
        body: ["There is a homework timetable to ensure that homework is planned and managed. The suggested time varies according to age from around 20 minutes in Early Years to 2 hours per night in year 11."]
      },
      {
        subTitle: "Percentage of students who pursue further education post-graduation: ",
        body: ["95 "]
      }
    ]
  },
  {
    label: "Student Support",
    icon: <Heart color="#000" size={20} />,
    innerData: [
      {
        subTitle: "Dedicated staff/programs for students with special learning needs Learning Support: ",
        body: ["Wellington's Special Educational Needs (SEN) department provides support to pupils with emergent learning difficulties. In order to help pupils reach their full potential, we work closely with teachers and parents identifying needs, assessing the child, planning the right support, and implementing and reviewing SEN support."]
      },
      {
        subTitle: "Learning support offered: ",
        body: ["Children’s experiences and baselines vary greatly. Some pupils are capable learners but may need special educational provision to access the curriculum at some point in their school lives. At Wellington, we are committed to developing children’s academic achievement as well as personal and social growth. We want all pupils to make progress, recognising ability and potential as well as celebrating high attainment."]
      },
      {
        subTitle: "The school supports gifted, able and talented students: ",
        body: ["Wellington has high academic expectation for all our pupils. Our aim is to help every child reach his or her potential through developing a love of learning and an inquiring, creative, yet critical mind which looks beyond what is taught in the classroom. In addition to the challenging curriculum, many of the subjects also offer ‘stretch and challenge’ activities."]
      },
      {
        subTitle: "Student access to education psychologist: ",
        body: ["Pupils at Wellington have access to our two experienced onsight school counsellors."]
      }
    ]
  },
  {
    label: "Admissions",
    icon: <FileText color="#000" size={20} />,
    innerData: [
      {
        subTitle: "Entry evaluation for students: ",
        body: ["Admissions assessments are undertaken for all prospective pupils, tailored to the age of the child."]
      },
      {
        subTitle: "Waiting list	: ",
        body: ["Depends on the grade level."]
      },
      {
        subTitle: "	Pukhovskaya 2",
        body: ["As an international school serving the needs of the international community in Shanghai we admit pupils throughout the academic year ."]
      }
    ]
  },
  {
    label: "School Day",
    icon: <Clock color="#000" size={20} />,
    innerData: [
      {
        subTitle: "School start time: ",
        body: ["8:30"]
      },
      {
        subTitle: "School finish time: ",
        body: ["Nursery to year 1: 15:30 Years 2 to 13: Monday through Thursday 16:45, Friday 15:30"]
      },
      {
        subTitle: "Supervised care before/after school: ",
        body: ["Wellington believes in a holistic approach to education and offers an extensive Co-Curricular Activity (CCA) programme after the end of formal lessons. These are compulsory and included in the school fee. The Wellington Academy Programme offers further activities after the end of the school day."]
      },
      {
        subTitle: "School bus service available: ",
        body: ["Yes. For the convenience of our pupils and parents, Wellington provides a daily school bus service in cooperation with Shanghai Peixing Transportation Service Co.Ltd. The service operates more than 130 pickup points in Puxi and a further 70 in Pudong, with the aim of maximising coverage and convenience."]
      },
      {
        subTitle: "School provided lunches: ",
        body: ["Yes. All pupils are required to eat school lunches, except for those who have special exceptions, such as religious or medical reasons."]
      },
      {
        subTitle: "Food alternatives for special dietary needs (ie. vegan, kosher, halal etc): ",
        body: ["The offered standard lunch provides one of the following options:", "– Western or Asian set menus", "– Customised sandwich set menu", "– 'La Piazza' (Mediterranean themed) set menu", "– Noodle set menu", "Each set menu is completed with a drink, a dessert and access to free flow salad bar."]
      },
      {
        subTitle: "Uniform required:",
        body: ["Yes"]
      },
      {
        subTitle: "Extra-curricular activities",
        body: ["Extracurricular activities or clubs offered: (STYLE: MAIN BODY) The CCA programme is an integral part of our school day. Pupils create a be-spoke timetable choosing from a wide range of activities including sport, performing arts and an academic selection. Pupils also have opportunities for self-study during their CCA time. Further activities are available in the evenings and weekends through the Wellington Academy."]
      },
      {
        subTitle: "Sports activities included:",
        body: ["Rugby, football, netball, cricket, basketball, volleyball, swimming, water polo, table tennis, tennis, fencing, archery, gymnastics, cross country and athletics."]
      },
      {
        subTitle: "Sports teams or sport competitions available for students: ",
        body: ["Yes"]
      }
    ]
  },
  {
    label: "Facilities",
    icon: <Building2 color="#000" size={20} />,
    innerData: [
      {
        subTitle: "Facilities at the school: ",
        body: ["Library, science labs, art classrooms, dance room, music room"]
      },
      {
        subTitle: "Sports facilities at the school: ",
        body: ["Sport is another major priority and Wellington's facilities are second to none, including the state-of-the-art indoor sports dome, the sports hall, three football pitches, a 400-metre all-weather synthetic running track, tennis and basketball courts and two swimming pools, one of which is a 25-metre, six-lane competition pool."]
      }
    ]
  }
]

function InfoRow({ label, value, isLink = false, isRange = false }: { label: string; value: string; isLink?: boolean; isRange?: boolean }) {
  return (
    <div className="flex items-start">
      <span className="font-semibold w-40">{label}:</span>
      {isLink ? (
        <a href="#" className="text-blue-600 underline">{value}</a>
      ) : isRange ? (
        <span>
          <span className="text-blue-600">from: </span>元170,500<br />
          <span className="text-blue-600">to: </span>元275,600
        </span>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export default function EducationListRightPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
      <div className={styles.mainContent} style={{color: "black"}}>
        <div style={{flex: "1", display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto"}}>
          <div className="mb-6" style={{flex: "1"}}>
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <section className="overflow-hidden bg-black h-full">
                <video
                  className="h-full inset-0 object-contain mx-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  controls
                >
                  <source src="shanghai_master/videos/cover.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </section>
            </div>
          </div>
          <div style={{flex: "1"}}>
            <AccordionTable />
          </div>
        </div>
        <div style={{flex: "1", display: "flex", flexDirection: "column"}}>
          <div className="max-w-4xl" style={{flex: "1"}}>
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 rounded">
                  <a href="#">
                    <img src="shanghai_master/images/westernSchool.png" alt="no image" />
                  </a>
                </div>
                <h1 className="text-l font-semibold">
                  Western International School of Shanghai
                </h1>
              </div>

              {/* Icons Row */}
              <div className="grid grid-cols-6 gap-2 text-2xl mb-3">
                <div className={styles.iconBox}><Info size={20} /></div>
                <div className={styles.iconBox}><DollarSign size={20} /></div>
                <div className={styles.iconBox}><Film size={20} /></div>
                <div className={styles.iconBox}><FileText size={20} /></div>
                <div className={styles.iconBox}><Landmark size={20} /></div>
                <div className={styles.iconBox}><Calendar size={20} /></div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-sm text-gray-800">
                <InfoRow label="City" value="Shanghai" />
                <InfoRow label="Curriculum" value="IB" isLink />
                <InfoRow label="Leaving qualification" value="IB Diploma" isLink />
                <InfoRow label="Language of instruction" value="English" />
                <InfoRow label="Age Range" value="Ages 2 to 18" />
                <InfoRow label="Yearly fees" value="元170,500 to 元275,600" isRange />
                
              </div>

              {/* Buttons */}
              {/* <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center">Visit website</a>
                <a href="#" className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 text-center">Contact the school</a>
              </div> */}

              {/* Social Media */}
              <div className="mt-2 flex space-x-4 text-gray-700 text-xl">
                <Facebook size={20} />
                <Twitter size={20} />
                <Linkedin size={20} />
                <Youtube size={20} />
                <Instagram size={20} />
                <a href="#">
                  <Mail size={20} />
                </a>
                <a href="#">
                  <Globe size={20} />
                </a>
              </div>
            </div>
            <div>
              <img src={"shanghai_master/images/world.jpg"} />
            </div>
          </div>
        </div>
      </div>
  );
}

function AccordionTable() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {collapseTableData.map((item, idx) => (
        <div key={item.label} className="border-b last:border-b-0">
          <button
            className="w-full flex items-center gap-3 py-3 px-2 hover:bg-pink-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            {item.icon}
            <span className="flex-1 text-left font-medium">{item.label}</span>
            <span className="ml-auto">{openIndex === idx ? "▲" : "▼"}</span>
          </button>
          {openIndex === idx && (
            <div className="pt-8 pb-8 pb-3 text-gray-700 text-sm">
              <Content data={item.innerData} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

type subData = {
  subTitle: string;
  body: string[];
}

function Content({data}:{data: subData[]}) {
  return (
    <div className="bg-gray-50 rounded p-4 space-y-4">
      {
        data.map((item, idx) => {
          return <div key={item.subTitle + idx}>
            <div className="font-semibold text-gray-700 mb-1">
              {item.subTitle}
            </div>
            <div className="text-gray-800">
              {
                item.body.map((line, index) => {
                  return <div key={line + index}>
                    {line}
                  </div>
                })
              }
            </div>
          </div>
        })
      }
    </div>
  )
}