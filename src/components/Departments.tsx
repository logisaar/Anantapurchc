import {
  Bed,
  ClipboardList,
  Baby,
  SmilePlus,
  Microscope,
  Pill,
  Eye,
  Syringe,
  HeartPulse
} from "lucide-react";

const departments = [
  {
    name: "IPD",
    fullName: "In-Patient Department",
    icon: Bed,
    description: "Comprehensive inpatient care with comfortable facilities",
    image: "/images/gallery/ipd.jpeg",
  },
  {
    name: "OPD",
    fullName: "Out-Patient Department",
    icon: ClipboardList,
    description: "Walk-in consultations and follow-up care",
    image: null,
  },
  {
    name: "Obstetrics & Gynaecology",
    fullName: "Women's Health",
    icon: Baby,
    description: "Complete maternal and women's healthcare services",
    image: null,
  },
  {
    name: "Dental",
    fullName: "Dental Care",
    icon: SmilePlus,
    description: "Comprehensive dental treatments and oral health",
    image: "/images/gallery/Dental.jpeg",
  },
  {
    name: "Pathology",
    fullName: "Laboratory Services",
    icon: Microscope,
    description: "Accurate diagnostic testing and analysis",
    image: "/images/gallery/patho.jpeg",
  },
  {
    name: "Pharmacy",
    fullName: "Medical Store",
    icon: Pill,
    description: "Essential medicines and pharmaceutical care",
    image: null,
  },
  {
    name: "Eye",
    fullName: "Ophthalmology",
    icon: Eye,
    description: "Vision care and eye health treatments",
    image: null,
  },
  {
    name: "ILR Vaccination",
    fullName: "Immunization",
    icon: Syringe,
    description: "Vaccination programs and immunization services",
    image: null,
  },
  {
    name: "Nursing Station",
    fullName: "Patient Care",
    icon: HeartPulse,
    description: "Round-the-clock nursing care and support",
    image: null,
  },
];

const Departments = () => {
  return (
    <section id="departments" className="section-padding bg-medical-soft-gray">
      <div className="container-medical">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HeartPulse className="w-4 h-4" />
            <span>Our Services</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Departments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services across multiple specialties to meet all your medical needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.name}
                className="medical-card-highlight group cursor-pointer hover-lift animate-fade-in-up overflow-hidden p-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {dept.image ? (
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-white mb-0 text-shadow">
                        {dept.name}
                      </h3>
                    </div>
                  </div>
                ) : null}

                <div className={`p-6 ${dept.image ? 'pt-4' : ''}`}>
                  {!dept.image && (
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-medical transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {dept.name}
                        </h3>
                        <p className="text-xs text-primary font-medium">{dept.fullName}</p>
                      </div>
                    </div>
                  )}

                  {dept.image && (
                    <p className="text-xs text-primary font-medium mb-2">{dept.fullName}</p>
                  )}

                  <p className="text-sm text-muted-foreground">
                    {dept.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Departments;
