import { 
  Stethoscope, 
  Microscope, 
  Pill, 
  HeartPulse, 
  Sparkles, 
  Shield, 
  Wrench,
  SmilePlus,
  Leaf,
  Users
} from "lucide-react";

const staffData = [
  { role: "Doctors", count: 5, icon: Stethoscope },
  { role: "Lab Technician Officer", count: 1, icon: Microscope },
  { role: "Pharmacy Officer", count: 2, icon: Pill },
  { role: "Nurses", count: 6, icon: HeartPulse },
  { role: "House Keeping", count: 6, icon: Sparkles },
  { role: "Security", count: 3, icon: Shield },
  { role: "Bio Medical", count: 1, icon: Wrench },
  { role: "Dentist", count: 1, icon: SmilePlus },
  { role: "Ayush Department", count: 1, icon: Leaf },
];

const Staff = () => {
  const totalStaff = staffData.reduce((sum, item) => sum + item.count, 0);

  return (
    <section id="staff" className="section-padding bg-card">
      <div className="container-medical">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Our Team</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Dedicated Staff
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of {totalStaff} professionals works tirelessly to provide 
            exceptional healthcare services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {staffData.map((staff, index) => {
            const Icon = staff.icon;
            return (
              <div
                key={staff.role}
                className="medical-card p-5 text-center group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:shadow-medical transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-1">
                  {staff.count}
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-tight">
                  {staff.role}
                </p>
              </div>
            );
          })}
        </div>

        {/* Total staff highlight */}
        <div className="mt-10 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="inline-flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-2xl px-8 py-4">
            <div className="w-12 h-12 rounded-xl gradient-medical flex items-center justify-center shadow-medical">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-3xl font-heading font-bold text-foreground">{totalStaff}</p>
              <p className="text-sm text-muted-foreground font-medium">Total Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
