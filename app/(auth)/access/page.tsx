"use client"

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Page = () => {

    const session = useSession();

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(session?.status === "authenticated") {
            console.log("authenticated")
            router.push("/")
        }
    }, [session?.status, router])

    return <div>Access</div>
};

export default Page;