import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MedicalOfficer from "@/components/MedicalOfficer";

const doctors = [
    { name: "Dr. Rajesh Kumar", specialty: "General Physician" },
    { name: "Dr. Priya Sharma", specialty: "Gynecologist" },
    { name: "Dr. Amit Patel", specialty: "Pediatrician" },
    { name: "Dr. Sneha Gupta", specialty: "Dentist" },
    { name: "Dr. Vikram Singh", specialty: "Orthopedic Surgeon" },
];

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow">
                <div className="bg-primary/5 py-12 md:py-20">
                    <div className="container-medical text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up">
                            About Us
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            Learn more about our mission, leadership, and commitment to community health.
                        </p>
                    </div>
                </div>
                <MedicalOfficer />

                {/* Doctors Section */}
                <section className="section-padding bg-medical-soft-gray">
                    <div className="container-medical">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Meet Our Specialist Doctors</h2>
                            <p className="text-muted-foreground">Experienced professionals dedicated to your well-being</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {doctors.map((doc, index) => (
                                <div key={index} className="medical-card p-6 text-center hover-lift group bg-background">
                                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                                        <span className="text-2xl font-bold text-primary group-hover:text-white">Dr</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-1">{doc.name}</h3>
                                    <p className="text-sm text-primary font-medium">{doc.specialty}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
