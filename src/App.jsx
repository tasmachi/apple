import ActionButton from "./components/ActionButton";
import Emergency from "./components/Emergency";
import Example from "./components/Example";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black ">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <HowItWorks />
      <Example />
      <ActionButton />
      <Emergency />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
