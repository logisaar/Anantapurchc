import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MedicalOfficer from "@/components/MedicalOfficer";
import Departments from "@/components/Departments";
import Staff from "@/components/Staff";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MedicalOfficer />
        <Departments />
        <Staff />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
