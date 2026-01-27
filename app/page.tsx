import { Suspense } from "react";
import WordDisplay from "./components/WordDisplay";

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WordDisplay />
    </Suspense>
  );
};

export default Home;
