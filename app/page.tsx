import { Suspense } from "react";
import WordDisplay from "./components/WordDisplay";
import LightPillar from "./components/LightPillar";
import { isDesktop } from "react-device-detect";

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isDesktop && (
        <LightPillar
          topColor="#fffffff"
          bottomColor="#000000"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      )}
      <WordDisplay />
    </Suspense>
  );
};

export default Home;
