import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Departments from "@/components/Departments";

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow">
                <div className="bg-primary/5 py-12 md:py-20">
                    <div className="container-medical text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up">
                            Our Services
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            Comprehensive healthcare services tailored to your needs.
                        </p>
                    </div>
                </div>
                {/* Reusing Departments component as Services for now, as they are similar in this context */}
                <Departments />
            </main>
            <Footer />
        </div>
    );
};

export default ServicesPage;
