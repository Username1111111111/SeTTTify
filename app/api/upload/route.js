import prisma from '@/lib/prisma';
import catchResponse from '@/lib/catchResponse';

async function handler(req) {
    if (req.method === "POST") {

        try {
            

        } catch (error) {
            const message = 'Failed to upload file.';
            const res = catchResponse(error, message)

            return res;
        }
    } 
}

export { handler as POST}; 