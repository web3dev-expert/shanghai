import styles from '@/styles/education-main-page.module.css';
import { SchoolIcon } from 'lucide-react';

interface SchoolCardProps {
  name: string;
  description: string;
  curriculum: string;
  languages: string[];
  ages: string;
  fees: string;
  linkpage: number,
  onClick: (value: number) => void
};

interface educationMainProps {
    linkClick: (value: number) => void
}

const SchoolCard = ({
  name,
  description,
  curriculum,
  languages,
  ages,
  linkpage,
  onClick
}: SchoolCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div 
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 gap-[1rem]' 
          style={{padding: "1rem", fontSize: "1rem", display: "flex", cursor: "pointer"}} 
          onClick={() => {
            if(window.innerWidth > 768){
              onClick(linkpage); 
            } else {
              onClick(Math.floor(linkpage / 2));
            }
          }}
        > 
          <SchoolIcon size={20} /> 
          {name}
        </div>
        <p style={{paddingTop: "1rem", marginTop: "1rem", paddingBottom: "1rem", paddingLeft: "1rem", paddingRight: "1rem", height: "8rem", overflowY: "auto", textAlign: "justify"}}>{description}</p>
      </div>
      <div className={styles.cardRight}>
        <div style={{display: "flex", borderBottom: "1px dashed red"}}>
            <p style={{left:0, flex: "1"}}><strong>Curriculum</strong></p>
            <p style={{right:0}}>{curriculum}</p>
        </div>
        <div style={{display: "flex", borderBottom: "1px dashed red"}}>
            <p style={{left:0, flex: "1"}}><strong>Languages of instruction</strong></p>
            <p style={{right:0}}>{languages.join(', ')}</p>
        </div>
        <div style={{display: "flex", borderBottom: "1px dashed red"}}>
            <p style={{left:0, flex: "1"}}><strong>Ages</strong></p>
            <p style={{right:0}}><span className={styles.age}>{ages}</span></p>
        </div>
      </div>
    </div>
  );
};

export default function educationMainPage({linkClick}: educationMainProps) {
  const schools = [
    {
      name: 'Shanghai Pinghe School',
      description: 'Shanghai Pinghe Bilingual School is a boarding school established in September 1996 with full operational and financial independence Shanghai Pinghe Bilingual School is a boarding school established in September 1996 with full operational and financial independence',
      curriculum: 'IB, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'This school does not make their fees public.',
      linkpage: 17
    },
    {
      name: 'Beijing International School',
      description: 'Beijing International School offers bilingual education in a multicultural environment...',
      curriculum: 'IB, AP',
      languages: ['English', 'Mandarin'],
      ages: '5 to 18',
      fees: 'Tuition: Not publicly available',
      linkpage: 15
    },
    {
      name: 'Guangzhou Global Academy',
      description: 'Guangzhou Global Academy focuses on academic excellence and character development...',
      curriculum: 'British, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'Contact school for tuition details.',
      linkpage: 15
    },
    {
      name: 'Shenzhen Future School',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      linkpage: 15
    },
  ];

  return (
    <main className={styles.grid}>
      {schools.map((school, index) => (
        <SchoolCard key={index} {...school} onClick={linkClick} />
      ))}
    </main>
  );
}
