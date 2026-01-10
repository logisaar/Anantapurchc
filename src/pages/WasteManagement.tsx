import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, TrendingUp, AlertTriangle, ShieldCheck, Syringe, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WasteManagement = () => {
    const wasteCategories = [
        {
            color: "Yellow",
            weight: "1425 Kg",
            items: [
                "Human/Animal anatomical waste",
                "Soiled waste, Expired medicine",
                "Chemical waste, Body fluid, Clinical waste"
            ],
            themeColor: "bg-yellow-100 border-yellow-300 text-yellow-800",
            icon: <AlertTriangle className="w-5 h-5" />
        },
        {
            color: "Red",
            weight: "1566 Kg",
            items: [
                "Contaminated waste (Recyclable)",
                "Plastic Bags, Bottles",
                "Pipes, Container, Catheters"
            ],
            themeColor: "bg-red-100 border-red-300 text-red-800",
            icon: <Trash2 className="w-5 h-5" />
        },
        {
            color: "White",
            weight: "522 Kg",
            items: [
                "Scalpels, Blades, Needles",
                "Syringes with fixed needle",
                "Sharp metals, Needle tip cutter"
            ],
            // White on white is invisible, so using a gray/neutral theme for "White" category
            themeColor: "bg-gray-100 border-gray-300 text-gray-800",
            icon: <Syringe className="w-5 h-5" />
        },
        {
            color: "Blue",
            weight: "1088 Kg",
            items: [
                "Broken Glassware, Cytotoxic waste",
                "Metallic body implant",
                "contaminated glasses including medicine vials"
            ],
            themeColor: "bg-blue-100 border-blue-300 text-blue-800",
            icon: <ShieldCheck className="w-5 h-5" />
        }
    ];

    const reports = [
        { title: "Annual Report of BMW-2024", date: "2024" },
        { title: "Annual Report of BMW-2023", date: "2023" },
        { title: "Authorisation Order of CHC SORO 2024", date: "2024" },
        { title: "Annual Report of BMW-2022", date: "2022" },
        { title: "Authorisation Order of CHC SORO 2019", date: "2019" },
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow">
                <div className="bg-primary/5 py-12 md:py-20">
                    <div className="container-medical text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up">
                            Waste Management
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            Ensuring safe and scientific segregation, collection, and treatment of biomedical waste for a healthier community.
                        </p>
                    </div>
                </div>

                <div className="container-medical py-12 md:py-16">
                    {/* Introduction Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-foreground">Overview</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
                            <p>
                                The waste generated in various hospitals and healthcare facilities, including the waste of industries, can be grouped under biomedical waste (BMW). The constituents of this type of waste are various infectious and hazardous materials. This waste is then identified, segregated, and treated scientifically.
                            </p>
                            <p>
                                There is an inevitable need for healthcare professionals to have adequate knowledge and a proper attitude towards BMW and its management. BMW generated can either be solid or liquid waste comprising infectious or potentially infectious materials, such as medical, research, or laboratory waste. There is a high possibility that inappropriate management of BMW can cause infections to healthcare workers, the patients visiting the facilities, and the surrounding environment and community.
                            </p>
                            <p>
                                BMW can also be classified into general, pathological, radioactive, chemical, infectious, sharps, pharmaceuticals, or pressurized wastes. Biomedical Waste Management Rules, 2016 (BMWM Rules, 2016) specify that every healthcare facility shall take all necessary steps to ensure that BMW is handled without any adverse effect on human and environmental health.
                            </p>
                        </div>
                    </section>

                    {/* Waste Categories Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-foreground flex items-center gap-2">
                            <TrendingUp className="w-8 h-8 text-primary" />
                            Waste Collection Data
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {wasteCategories.map((category) => (
                                <Card key={category.color} className={`border-2 ${category.themeColor.split(' ')[1]} shadow-sm hover:shadow-md transition-shadow`}>
                                    <CardHeader className={`pb-3 ${category.themeColor} bg-opacity-20 rounded-t-lg`}>
                                        <div className="flex justify-between items-center">
                                            <CardTitle className="text-xl font-bold">{category.color} Category</CardTitle>
                                            {category.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="text-3xl font-bold text-foreground mb-4">{category.weight}</div>
                                        <p className="text-sm font-medium text-muted-foreground mb-2">Collected Wastes:</p>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                            {category.items.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Reports Section */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-foreground">Annual Reports & Orders</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reports.map((report, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group cursor-pointer">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                            {report.title}
                                        </h3>
                                        <span className="text-xs text-muted-foreground">Published: {report.date}</span>
                                    </div>
                                    <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default WasteManagement;
