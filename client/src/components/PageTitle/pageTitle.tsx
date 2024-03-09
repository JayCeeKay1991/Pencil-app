import "./pageTitle.css";

interface PageTitleProps {
  page: string;
}

export const PageTitle = ( props:PageTitleProps ) => {
  return (
    <div className="title" data-testid="title">
          <h2>{props.page}</h2>
    </div>
  );
}
