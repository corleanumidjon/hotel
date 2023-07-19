import React from "react";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import Feature from "../../Components/Feature/Feature";
import PropertyList from "../../Components/PropertyList/PropertyList";
import FeatureProperties from "../../Components/FeatureProperties/FeatureProperties";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Feature />
      <PropertyList />
      <FeatureProperties />
      <MailList />
      <Footer />
    </div>
  );
};

export default Home;
