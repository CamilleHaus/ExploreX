import Hero from "@/components/shared/Hero";
import LatestPost from "@/components/shared/LatestPost";
import TopPost from "@/components/shared/TopPost";
import prisma from "@/lib/prismaDB";

const Home = async () => {
  
  const post = await prisma.blog.findMany({
    include: {
      user: true,
    },
  });

  return (
    <>
      <Hero posts={post} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-[95%] mx:auto max-w-[1450px] overflow-y-hidden hit-fit mt-10">
        <LatestPost posts={post} />
        <TopPost posts={post} />
      </div>
    </>
  );
};

export default Home;
