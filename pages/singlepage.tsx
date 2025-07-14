import React, { ForwardedRef } from 'react';
import styles from'@/styles/singlepage.module.css'

interface PageProps {
  number: string;
  children?: React.ReactNode;
}

const SinglePage = React.forwardRef<HTMLDivElement, PageProps>(
  ({ number, children }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={`demoPage ${styles.page} page-cover bg-white border-1 border border-red`} ref={ref}>
        <div>{children}</div>
      </div>
    );
  }
);

SinglePage.displayName = 'SinglePage'; // avoid React warning in dev

export default SinglePage;