import { FC } from 'react';
import "./pageTitle.css";

interface PageTitleProps {
  page: string;
}


export const PageTitle:FC<PageTitleProps> = ({ page }) => {
  return (
    <div className="title">
          <h2>{page}</h2>
    </div>
  );
}
