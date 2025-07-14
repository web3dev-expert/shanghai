import React from 'react';
import styles from '@/styles/page-controller.module.css'

interface PageControllerProps {
  clickNext: (value: boolean) => void
  clickFastNext: (value: boolean) => void
  clickPrevious: (value: boolean) => void
  clickFastPrevious: (value: boolean) => void
  click10Previous: (value: boolean) => void
  click10Next: (value: boolean) => void
  part: string
}

const PageControls = ({ clickNext, clickFastNext, clickPrevious, clickFastPrevious, click10Previous, click10Next, part }: PageControllerProps) => {
  return (
    <div 
      className={`bottom-4 transition-opacity duration-300 py-1 flex gap-3 z-100`}
    >
      {/* Center Controls */}
      <div className={`flex m-auto justify-evenly items-center`}>
        <div style={{cursor: "pointer"}} className={styles.btnSize} onClick={() => click10Previous(true)}>
          <img src="shanghai_master/images/btn/-10.png" />
        </div>
        <div style={{cursor: "pointer"}} className={styles.btnSize} onClick={() => clickFastPrevious(true)}>
          <img src="shanghai_master/images/btn/-5.png" />
        </div>
        <div style={{ cursor: "pointer"}} className={styles.btnSize} onClick={() => clickPrevious(true)}>
          <img src="shanghai_master/images/btn/previous.png" />
        </div>
        <div style={{cursor: "pointer"}} className={styles.btnSize} onClick={() => clickNext(true)}>
          <img src="shanghai_master/images/btn/next.png" />
        </div>
        
        <div style={{cursor: "pointer"}} className={styles.btnSize} onClick={() => clickFastNext(true)}>
          <img src="shanghai_master/images/btn/+5.png" />
        </div>
        
        <div style={{cursor: "pointer"}} className={styles.btnSize} onClick={() => click10Next(true)}>
          <img src="shanghai_master/images/btn/+10.png" />
        </div>
      </div>
    </div>
  );
};

export default PageControls;
