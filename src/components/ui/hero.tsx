import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/ui/video-player";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <>
            <section
                className="relative flex flex-col max-w-6xl mx-auto items-center justify-center gap-8 px-10 text-center py-16 pt-24 
        bg-gradient-to-b from-green-50 via-green-100/40 to-white 
        rounded-[4rem] shadow-sm"
            >
                <div className="flex items-center justify-center gap-4 flex-col">
                    <Badge
                        className="rounded-full cursor-pointer font-medium"
                        variant={"secondary"}
                        onClick={() => {
                            window.open("https://ruixen.com", "_blank");
                        }}
                    >
                        Discover the Animal World
                    </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 flex-col">
                    <h1 className="text-6xl max-sm:text-4xl font-medium tracking-tighter">
                        Explore nature’s most fascinating creatures
                    </h1>
                    <p className="max-sm:text-sm text-gray-500">
                        Learn about wildlife, their habitats, and amazing facts. From the
                        tiniest insects to the largest mammals — dive into the beauty of the
                        animal kingdom.
                    </p>
                </div>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                    <Button asChild className="grow rounded-xl" size={"sm"}>
                        <Link
                            to="/docs/ui/getting-started/introduction"
                            className="font-normal"
                        >
                            Start Exploring <span className="opacity-70">- It's free</span>
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="grow rounded-xl"
                        size={"sm"}
                    >
                        <Link
                            to="https://ruixen.com/components"
                            className="font-normal flex items-center justify-between gap-2"
                        >
                            <span className="flex items-center gap-2">
                                <FaGithub />
                                Animal Data
                            </span>
                        </Link>
                    </Button>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 shadow-lg rounded-3xl overflow-hidden w-full ">
                    <VideoPlayer
                        src="https://videos.pexels.com/video-files/26772138/12003967_1920_1080_30fps.mp4"
                        poster="https://videos.pexels.com/video-files/26772138/12003967_1920_1080_30fps.jpg"
                        size={"full"}
                        className="w-full h-auto rounded-3xl"
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
