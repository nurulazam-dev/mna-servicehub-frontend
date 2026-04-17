"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogs } from "../../../constants/blogData";

const categories = [
  "All",
  "Maintenance",
  "Cleaning",
  "Repair Tips",
  "Smart Home",
  "Safety",
];

const BlogPosts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <div className=" min-h-screen pb-10">
      <section className="relative pt-20 pb-16 px-6 overflow-hidden bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="bg-indigo-600/10 text-indigo-600 border-none px-4 py-1 mb-6 rounded-full font-bold">
            MNA INSIGHTS
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-none">
            Expert Advice for a <br />
            <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-4">
              Smarter Home.
            </span>
          </h1>
          <div className="mt-10 max-w-xl mx-auto relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600" />
            <Input
              placeholder="Search for tips..."
              className="h-14 pl-12 rounded-2xl"
            />
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-lg"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col h-full bg-slate-50/50 dark:bg-slate-900/30 rounded-lg border border-transparent hover:border-indigo-500/20 hover:bg-white transition-all p-4"
            >
              <div className="relative rounded-lg overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  // fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="px-4 grow flex flex-col">
                <Badge className="w-fit mb-3">{post.category}</Badge>
                <h3 className="text-xl font-black mb-4 group-hover:text-indigo-600">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-6">
                  {post.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold">{post.author}</span>
                  <Link href={`/blogs/${post.id}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-indigo-600 font-black gap-2"
                    >
                      Read More <ChevronRight size={14} />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPosts;
