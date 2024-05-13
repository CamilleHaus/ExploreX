"use client";

import { useState } from "react";
import { blogData } from "@/constants/blogData";
import BlogCard from "./BlogCard";
import Button from "../ui/Button";

const LatestPost = () => {

    const latestPost = blogData.filter((blog) => blog.latestPost === true)
    return (
    <section className="col-span-2"></section>
        )
}

export default LatestPost;