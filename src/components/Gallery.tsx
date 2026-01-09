import { useState } from "react";
import { X } from "lucide-react";

// List of all images moved to public/images/gallery/
const GALLERY_IMAGES = [
    "WhatsApp Image 2026-01-09 at 3.30.12 PM.jpeg",
    "WhatsApp Image 2026-01-09 at 3.30.13 PM (1).jpeg",
    "WhatsApp Image 2026-01-09 at 3.30.13 PM (2).jpeg",
    "WhatsApp Image 2026-01-09 at 3.30.13 PM.jpeg",
    "WhatsApp Image 2026-01-09 at 3.30.14 PM (1).jpeg",
    "WhatsApp Image 2026-01-09 at 3.30.14 PM.jpeg",
    "WhatsApp Image 2026-01-09 at 3.30.15 PM.jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.25 PM (1).jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.25 PM.jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.26 PM (1).jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.26 PM (2).jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.26 PM.jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.27 PM (1).jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.27 PM (2).jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.27 PM.jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.28 PM (1).jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.28 PM (2).jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.28 PM.jpeg",
    "WhatsApp Image 2026-01-09 at 3.37.29 PM.jpeg",
    "WhatsApp Image 2026-01-09 at 3.51.25 PM (1).jpeg",
    "WhatsApp Image 2026-01-09 at 3.51.25 PM.jpeg",
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="gallery" className="py-20 bg-muted/30">
            <div className="container-medical">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                        Our Gallery
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                        Glimpses of Anantapur Hospital
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A visual tour of our facilities, events, and community outreach programs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {GALLERY_IMAGES.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-medical hover:shadow-medical-lg transition-all duration-300"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={`/images/gallery/${image}`}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">view</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={`/images/gallery/${selectedImage}`}
                        alt="Gallery view"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;
