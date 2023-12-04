import { Fragment } from "react";
import CategoryAccordion from "@/components/CategoryAccordion";

const Home = () => {
  const categories = [
    { name: 'First Category', color: '#FAFAFA' },
    { name: 'Second Category', color: '#FAFAFA' },
    { name: 'Third Category', color: '#FAFAFA' },
    { name: 'Forth Category', color: '#FAFAFA' },
    { name: 'Fifth Category', color: '#FAFAFA' },
    { name: 'Sixth Category', color: '#FAFAFA' }
  ];

  return (
    <Fragment>
      <CategoryAccordion />
    </Fragment>
  );
}

export default Home;