import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
    const audioRef = (useRef(new Audio(sakura)));
    audioRef.current.volume = .25;
    audioRef.current.loop = true;
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false)

    useEffect(() => {
        isPlayingMusic && audioRef.current.play();
        return () => {
            audioRef.current.pause();
        }
    }, [isPlayingMusic])
    const setIslandModelForScreen = () => {
        let screenscale = null
        let screenPosition = [0, -6.5, -43]
        let rotation = [.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenscale = [0.9, 0.9, 0.9];
            // screenPosition = [0, -6.5, 43];
        } else {
            screenscale = [1, 1, 1];
            // screenPosition = [0, -6.5, 43];
        }

        return [screenscale, screenPosition, rotation]
    }

    const setPlaneModelForScreen = () => {
        let screenscale, screenPosition;

        if (window.innerWidth < 768) {
            screenscale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenscale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenscale, screenPosition]
    }

    const [islandScale, islandPosition, islandRotation] = setIslandModelForScreen()
    const [planeScale, planePosition] = setPlaneModelForScreen()

    return (
        <section className='w-full h-screen relative'>
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight
                        position={[1, 1, 1]}
                        intensity={0.5}
                    />
                    <ambientLight
                        intensity={1}
                    />
                    <hemisphereLight
                        skyColor="#ffb1ba" groundColor="#000000" intensity={1.5}
                    />
                    <Bird />
                    <Plane
                        scale={planeScale}
                        position={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 20, 0]}
                    />
                    <Sky
                        isRotating={isRotating}
                    />
                    <Island
                        setCurrentStage={setCurrentStage}
                        position={islandPosition}
                        rotation={[0.1, 4.7077, 0]}
                        scale={islandScale}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                </Suspense>
            </Canvas>
            <div className="absolute bottom-2 left-2">
                <img
                src={!isPlayingMusic? soundoff:soundon}
                alt="sound"
                className="w-10 h-10 cursor-pointer object-contain"
                onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                />
            </div>
        </section>
    )
}

export default Home