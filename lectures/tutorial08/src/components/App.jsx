import React from "react";
import { Image } from "antd";
import { Carousel } from "antd";
import { ColorPicker } from "antd";
import { TimePicker } from "antd";
import NavBar from "./NavBar";
import 'antd/dist/reset.css'; // Make sure Ant Design styles are applied

// custom components:
export default function App() {
    return (
        <>
            <NavBar />

            <main className="min-h-screen max-w-[1000px] mt-24 mx-auto">
                <p>Put your design system components in the space below...</p>

                {/* Ant Design Components */}
                <div className="my-6 space-y-4">
                    <ColorPicker />
                    <TimePicker />
                </div>

                {/* Photo Gallery using AntD Image */}
                <h2 className="font-Comfortaa my-4 font-bold text-xl">
                    Photo Gallery
                </h2>
                <div className="flex flex-wrap content-start">
                    <Image src="https://picsum.photos/600/600?id=1" width={200} />
                    <Image src="https://picsum.photos/600/600?id=2" width={200} />
                    <Image src="https://picsum.photos/600/600?id=3" width={200} />
                    <Image src="https://picsum.photos/600/600?id=4" width={200} />
                    <Image src="https://picsum.photos/600/600?id=5" width={200} />
                    <Image src="https://picsum.photos/600/600?id=6" width={200} />
                    <Image src="https://picsum.photos/600/600?id=7" width={200} />
                    <Image src="https://picsum.photos/600/600?id=8" width={200} />
                    <Image src="https://picsum.photos/600/600?id=9" width={200} />
                    <Image src="https://picsum.photos/600/600?id=10" width={200} />
                </div>

                {/* Carousel Component */}
                <h2 className="font-Comfortaa my-4 font-bold text-xl">
                    Bonus Carousel
                </h2>
                <div className="w-[600px] mx-auto my-4">
                    <Carousel autoplay>
                        <div>
                            <img src="https://picsum.photos/600/200?1" alt="1" />
                        </div>
                        <div>
                            <img src="https://picsum.photos/600/200?2" alt="2" />
                        </div>
                        <div>
                            <img src="https://picsum.photos/600/200?3" alt="3" />
                        </div>
                        <div>
                            <img src="https://picsum.photos/600/200?4" alt="4" />
                        </div>
                    </Carousel>
                </div>
            </main>

            <footer className="p-5 bg-white">footer goes here</footer>
        </>
    );
}
