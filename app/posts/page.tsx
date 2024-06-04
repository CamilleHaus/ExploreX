import Post from "@/components/shared/Post";
import TopPost from "@/components/shared/TopPost";
import prisma from "@/lib/prismaDB"

const Page = async () => {

  const posts = await prisma.blog.findMany({
    include: {
      user: true
    }
  })

  return (
    <div>
      <div className="grid lg:grid-cols-3 lg:gap-10 grid-col-1 w-[95%] max-w-[1450px] mx-auto overflow-y-hidden h-fit mt-10 max-lg:space-y-7">
        <Post posts={posts}/>
        <TopPost posts={posts}/>
      </div>
    </div>
  );
};

export default Page;
