/*import React from 'react';*/
import "../../App.css";
import Cards from "../Cards";
import Footer from '../Footer';

/*i added the cards from the home page to this page as well incase
 a user didnt scroll down on the homepage*/
function Services() {
  return (
    <>
      <Cards />
      <Footer />
    </>
  );
}

export default Services;

/*export default function Services() {
  return <h1 className="services">CAMPGROUNDS</h1>;
}*/
