import prisma from "@/lib/prismaDB"
import { auth } from "@/auth"

export async function getSession() {
    return await auth()
}

async function getCurrentUser() {
    try {
        const session = await auth()

        if (!session?.user?.email) {
            return null
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if (!currentUser) {
            return null
        }

        return {
            ...currentUser
        }

    } catch (error) {
        return null
    }
}

export default getCurrentUser;