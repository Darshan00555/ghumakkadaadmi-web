import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-background pt-24 text-foreground"> {/* pt-24 to offset fixed header */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-8">About Ghumakkad Aadmi</h1>

                <div className="prose prose-lg dark:prose-invert">
                    <p className="mb-6">
                        Welcome to <strong>Ghumakkad Aadmi</strong>. I am a traveler, storyteller, and filmmaker exploring the hidden gems of India.
                        From the bustling streets of Delhi to the serene mountains of Himachal, my journey is about discovering the soul of this incredible country.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                        alt="Traveling"
                        className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg"
                    />

                    <h2 className="text-2xl font-bold mb-4">My Mission</h2>
                    <p className="mb-6">
                        To inspire you to pack your bags and explore. I believe travel is not just about visiting places, but about connecting with people, culture, and nature.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Gear I Use</h2>
                    <ul className="list-disc pl-6 mb-6 spacing-y-2">
                        <li>Sony Alpha series for Video</li>
                        <li>GoPro for Action Shots</li>
                        <li>DJI Mini 3 Pro for Aerials</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
