import React from 'react';

const Gallery = () => {
    // Mock images from Unsplash
    const images = [
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
    ];

    return (
        <div className="min-h-screen bg-background pt-24 text-foreground">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-2">Trip Gallery</h1>
                <p className="text-muted-foreground mb-10">Snapshots from recent adventures.</p>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, idx) => (
                        <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:scale-[1.01]">
                            <img src={src} alt={`Travel ${idx}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
