import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MedicalOfficer from "@/components/MedicalOfficer";

const doctors = [
    { name: "Dr. Saswat Sahu", specialty: "General Physician" },
    { name: "Dr. Sumanta Kumar Dhada", specialty: "Gynecologist" },
    { name: "Dr. Tanmay Kumar Acharya", specialty: "Pediatrician" },
    { name: "Dr. Biskha Nayak", specialty: "Dentist" },
    { name: "Dr. Rajat Kumar Das", specialty: "Orthopedic", image: "/images/dr-rajat-kumar-das.png" },
    { name: "Dr. Soumya Ranjan Behera", specialty: "General Doctor", image: "/images/dr-soumya-ranjan-behera.jpg" },
];

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow">
                <div className="bg-primary/5 py-12 md:py-20">
                    <div className="container-medical text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up">
                            Our Doctors
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            Meet our dedicated medical professionals committed to providing exceptional healthcare services.
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
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {doctors.map((doc, index) => (
                                <div key={index} className="medical-card p-6 text-center hover-lift group bg-background">
                                    {doc.image ? (
                                        <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary transition-all duration-300 bg-white">
                                            <img
                                                src={doc.image}
                                                alt={doc.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                                            <span className="text-2xl font-bold text-primary group-hover:text-white">Dr</span>
                                        </div>
                                    )}
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
