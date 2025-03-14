import Image from "next/image";
import { SOCIALS } from "../data/socials";
import { SocialLink } from "@/components/social-link";
import { BlogCard } from "@/components/blog-card";
import React from "react";
import { LINKS } from "@/lib/constants";
import Link from "next/link";
import { fetchArticles } from "@/utils";

export default async function Home() {
    const allMediumArticles = await fetchArticles();
    const mediumArticles = allMediumArticles.slice(0, 2); 
  return (
    <React.Fragment>
      <section className="mb-5">
        <Image
          src={'https://i.postimg.cc/g2f4g6kH/me.jpg'}
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full cursor-pointer hover:grayscale mb-5"
          unoptimized
        />
        <h1 className="text-2xl font-bold">Augustine Joseph</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I’m a fullstack software engineer specializing in building scalable
            web applications having rich user interface using javascript.
          </p>
          <p className="mt-4 mb-4">
            Over the years, I&apos;ve worked on multiple projects to build
            end-to-end products in manufacturing, dashcams, and banking.
            {/* Currently, I&apos;m building iGaming solutions at &nbsp; */}
            {/* <a
              href="https://mindworks.xyz/"
              target="_blank"
              className="border-b inline-block"
            >
              mindworks.xyz
            </a>
            . */}
          </p>

          <p className="mb-4">
            If you&apos;d like to collaborate, please&nbsp;
            <a
              href="mailto:developer.augustine@gmail.com"
              className="border-b inline-block"
            >
              send me an email
            </a>
            &nbsp;or reach out on any of my social handles.
          </p>
        </div>

        <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
        <p className="mt-4 border-b inline-block cursor-pointer">
          <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </p>
      </section>

      <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" />

      <div>
        <h2 className="mb-6 text-2xl font-bold">Latest posts</h2>
        <ul>
          {mediumArticles.map((blog:any,index:number) => (
            <li key={blog.slug} className="py-1">
              <Link href={`${blog.link}`}>
                <BlogCard blog={blog} key={blog.slug} isLast={index === mediumArticles.length - 1} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
