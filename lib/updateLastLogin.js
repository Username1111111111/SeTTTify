import prisma from '@/lib/prisma';

export async function updateLastLogin(userId) {
    return await prisma.user.update({
        where: { id: userId },
        data: { lastLoginDate: new Date() },
    });
}
