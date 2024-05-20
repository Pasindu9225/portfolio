import Hero from "@/components/ui/Hero";
import React from "react";
import { ThemeProvider } from "next-themes";
import AboutMe from "./AboutMe/page";
import MyProject from "./MyProject/page";
import ContactMe from "./ContactMe/page";
import Footer from "./Footer/page";

const page = () => {
  return (
    <div>
      <ThemeProvider attribute="class">
        <Hero />
        <AboutMe />
        <MyProject />
        <ContactMe />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default page;
