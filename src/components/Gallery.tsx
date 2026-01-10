import { useState } from "react";
import { X, Loader2 } from "lucide-react";

const GALLERY_IMAGES = [
    { src: "gallery-1.jpg", caption: "Advanced Medical Equipment" },
    { src: "gallery-2.jpg", caption: "Dedicated Medical Team" },
    { src: "gallery-3.jpg", caption: "Patient Care Ward" },
    { src: "gallery-4.jpg", caption: "Community Health Camp" },
    { src: "gallery-5.jpg", caption: "Emergency Response Unit" },
    { src: "gallery-6.jpg", caption: "Modern Facilities" },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
    };

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {GALLERY_IMAGES.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-medical hover:shadow-medical-lg transition-all duration-300 bg-gray-200"
                            onClick={() => setSelectedImage(image)}
                        >
                            {!loadedImages[index] && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                                    <Loader2 className="w-8 h-8 text-primary/30 animate-spin" />
                                </div>
                            )}
                            <img
                                src={`/images/gallery/${image.src}`}
                                alt={image.caption}
                                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${loadedImages[index] ? "opacity-100" : "opacity-0"
                                    }`}
                                loading="lazy"
                                onLoad={() => handleImageLoad(index)}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2">
                                <span className="text-white font-medium px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">View</span>
                                <p className="text-white/90 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {image.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition-all"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
                        <img
                            src={`/images/gallery/${selectedImage.src}`}
                            alt={selectedImage.caption}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-in"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="mt-4 text-white text-lg font-medium animate-fade-in-up">
                            {selectedImage.caption}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
