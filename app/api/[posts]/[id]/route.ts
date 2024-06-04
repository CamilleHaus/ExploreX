import prisma from "@/lib/prismaDB";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
    id: string
}

export const GET = async (req: NextRequest, { params }: { params: IParams }) => {

    const { id } = params;

    try {
        const post = await prisma.blog.findUnique({
            where: {
                id
            },
            include: {
                user: true
            }
        })

        return new NextResponse(JSON.stringify(post, null, 2), { status: 200 })
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, null, 2),
            { status: 500 }
        );
    }
}