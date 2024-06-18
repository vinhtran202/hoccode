import Navbar from "./component/layouts/Navbar";
import HeaderSection from "./layouts/HeaderSection";
import ClientSection from "./layouts/ClientSection";
import MySkillSection from "./layouts/MySkillSection";
import MyProjectsSection from "./layouts/MyProjectsSection";
import MyResumeSection from "./layouts/MyResumeSection";
import WhatClientSaySection from "./layouts/WhatClientSaySection";
import PopularClientsSection from "./layouts/PopularClientsSection";
import ContactSection from "./layouts/ContactSection";
import Footer from "./component/layouts/Footer";

export default function App() {
  return (
    <div className="__className_09a922">
      <Navbar />
      <HeaderSection />
      <ClientSection />
      <MySkillSection />
      <MyProjectsSection />
      <MyResumeSection />
      <WhatClientSaySection />
      <PopularClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
