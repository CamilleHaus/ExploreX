import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import Link from "next/link";
import Image from "next/image";
import { IPostTypes } from "@/types/postTypes";
import { formatDate } from "@/utils/formatDate";

const Hero: React.FC<{posts: IPostTypes[]}> = ({ posts }) => {

  const featuredPost = posts.filter((post) => post.featured === true);

  const topFeature = featuredPost.slice(0, 1);
  const bottomFeature = featuredPost.slice(1, 4);

  return (
    <section className="relative">
      <div className="w-[95%] mx-auto max-w-[1450px] z-1">
        {topFeature.map((post, id) => (
          <article
            key={id}
            className="flex flex-col gap-5 mb-5 text-center relative"
          >
            <Tag text={post.category} />
            <h2 className="text-6xl font-extrabold uppercase text-tertiary">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 font-light text-tertiary justify-center">
              {post.user.image && (
                <Image src={post.user.image} height={50} width={50} alt={`Image of ${post.user.name}`}
                className="rounded-full drop-shadow-lg"/>
              )}
              <span>{post.user.name}</span>
              <span className="italic">{formatDate(post.createdAt)}</span>
            </div>
            <Link
              href={`/blog/${post.id}`}
            >
              <div className="relative max-h-[600px] overflow-hidden shadow-xl">
                <img
                  src={post.img}
                  alt={`image for ${post.title}`}
                  className="object-cover w-full h-full"
                />
                <Overlay />
              </div>
            </Link>
          </article>
        ))}
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
          {bottomFeature.map((post, id) => (
            <article
              key={id}
              className="flex flex-col gap-3 items-center text-center relative"
            >
              <Link
                className="w-full"
                href={`/blog/${post.id}`}
              >
                <div className="overflow-hidden h-72 shadow-xl w-full">
                  <img
                    src={post.img}
                    alt={`image for ${post.title}`}
                    className="object-cover w-full h-full"
                  />
                  <Overlay />
                </div>
              </Link>
              <Tag text={post.category} />
              <h3 className="text-sm font-extrabold uppercase text-tertiary px-5">
                {post.title}
              </h3>
              <span className="font-light italic">By: {post.user.name} {formatDate(post.createdAt)}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
