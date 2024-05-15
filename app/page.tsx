import Hero from "@/components/shared/Hero";
import LatestPost from "@/components/shared/LatestPost";
import TopPost from "@/components/shared/TopPost";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-[95%] mx:auto max-w-[1450px] overflow-y-hidden hit-fit mt-10">
        <LatestPost />
        <TopPost />
      </div>
    </>
  );
};

export default Home;
