import prisma from "@/lib/prismaDB";
import getCurentUser from "../actions/getCurrentUser";
import BlogCard from "@/components/shared/BlogCard";
import { Key } from "react";

const page = async () => {
  const user = await getCurentUser();

  const posts = await prisma.blog.findMany({
    where: {
      userEmail: user?.email ?? undefined,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="w-full">
        <div className="max-w-[90%] mx-auto ">
            <div className="w-full text-center mb-10">
                <h1 className="text-3xl font-extrabold text-tertiary">Hello {user?.name}</h1>
                <span className="text-lg">You have published {posts.length} post(s)</span>
            </div>
            <div className="grid md:grid-col-2 grid-col-1 justify-center itens-center gap-10">
                {posts.map((post: any) =>
                <div key={post.id} className="relative">
                <BlogCard post={post as any}/>
            </div>)}
            </div>
        </div>
    </div>
  )
};

export default page;
