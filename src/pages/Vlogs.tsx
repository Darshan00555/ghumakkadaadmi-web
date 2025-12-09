import React from 'react';

const Vlogs = () => {
    const vlogs = [
        {
            id: 1,
            title: "Exploring Hidden Waterfalls",
            thumb: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=800&auto=format&fit=crop",
            date: "2 days ago",
            views: "1.2k views"
        },
        {
            id: 2,
            title: "Street Food Tour in Delhi",
            thumb: "https://images.unsplash.com/photo-1563292694-60ae2f19389c?q=80&w=800&auto=format&fit=crop",
            date: "1 week ago",
            views: "5.5k views"
        },
        {
            id: 3,
            title: "Camping in the Himalayas",
            thumb: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800&auto=format&fit=crop",
            date: "2 weeks ago",
            views: "10k views"
        },
        {
            id: 4,
            title: "Solo Trip to Rajasthan",
            thumb: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
            date: "1 month ago",
            views: "8.2k views"
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-24 text-foreground">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-2">Latest Vlogs</h1>
                <p className="text-muted-foreground mb-10">Follow the journey, one video at a time.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vlogs.map((vlog) => (
                        <div key={vlog.id} className="group cursor-pointer">
                            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
                                <img src={vlog.thumb} alt={vlog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    12:40
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{vlog.title}</h3>
                            <div className="text-sm text-muted-foreground">
                                <span>{vlog.views}</span> • <span>{vlog.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vlogs;
