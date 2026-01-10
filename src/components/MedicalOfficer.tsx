import { Award, Stethoscope } from "lucide-react";

const MedicalOfficer = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-medical">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Stethoscope className="w-4 h-4" />
              <span>Leadership</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              M.O. Incharge
            </h2>
          </div>

          <div className="medical-card-highlight p-8 md:p-10 text-center animate-scale-in transition-all duration-500 hover:-translate-y-2 hover:shadow-medical-lg group cursor-default">
            <div className="w-32 h-32 rounded-full border-4 border-primary/20 mx-auto mb-6 shadow-medical overflow-hidden">
              <img
                src="/images/doc.png"
                alt="Dr. Satya Swarup Singh"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Dr. Satya Swarup Singh
            </h3>

            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MBBS
            </div>

            <p className="text-muted-foreground max-w-md mx-auto">
              Leading our dedicated medical team with expertise and compassion,
              ensuring the highest standards of patient care at Anantapur Hospital.
            </p>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Medical Officer Incharge • Anantapur Community Health Center
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalOfficer;
