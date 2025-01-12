import { BlogCard } from "@/components/blog-card";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import { generatePageMetadata } from "../seo";
import Link from "next/link";
import { ENV } from "@/lib/env";
import { LINKS } from "@/lib/constants";
import { fetchArticles } from "@/utils";
import { BlogCardProps } from "@/types";

export const metadata = generatePageMetadata({
  title: "Blog",
  description: "Read my blogs on web development, design and more.",
});


export default async function Blog() {
  const mediumArticles: BlogCardProps[] = await fetchArticles();

  return (
    <section>
      <ul>
        
        {mediumArticles.map((blog, index:number) => (
          <li
            key={blog.link}
            className="py-1 divide-y divide-gray-200 dark:divide-gray-700"
          >
            <Link href={`${blog.link}`}>
              <BlogCard blog={blog} isLast={index === mediumArticles.length - 1} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
