import prisma from "@/lib/prisma";
import catchResponse from "@/lib/catchResponse";
import { Storage } from "@google-cloud/storage";
import generateUniqueId from "@/lib/generateUniqueId";

async function handler(req) {
    const searchParams = req.nextUrl.searchParams;
    const collectionId = searchParams.get("collectionId");

    if (req.method === "POST") {
        const form = await req.formData();
        const file = form.get("file");
        if (!file) {
            throw new Error("No file here");
        } else if (file.size < 1) {
            throw new Error("File is empty");
        }

        try {
            // https://cloud.google.com/docs/authentication/application-default-credentials#GAC
            // https://community.render.com/t/docker-secrets-file-runtime-access-woes/3423

            const projectId = process.env.PROJECT_ID;
            const bucketName = process.env.BUCKET_NAME;
            const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;

            // if (process.env.NODE_ENV === "development") {
            //     keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;
            // } else {
            //     keyFilename = '/etc/secrets/elated-strength-418414-b1a132f261a6.json';
            // }
            
            console.log("keyFilename");
            console.log(keyFilename);

            const storage = new Storage({
                projectId: projectId,
                keyFilename: keyFilename,
            });

            const fileBuffer = await file.arrayBuffer();
            const newFilename = `${generateUniqueId()}_${file.name
                .toLowerCase()
                .replace(/ /g, "_")}`;

            const storageRes = await storage
                .bucket(bucketName)
                .file(newFilename)
                .save(Buffer.from(fileBuffer));
            // console.log(`${newFilename} uploaded to ${bucketName}`);
            console.log(storageRes);

            const image = await prisma.collection.update({
                where: {
                    id: collectionId,
                },
                data: {
                    imageUrl: newFilename,
                },
            });

            const resBody = JSON.stringify(image);

            const res = new Response(resBody, {
                status: 200,
                statusText: "Image have been uploaded",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        } catch (error) {
            const message = "Failed to upload file.";
            const res = catchResponse(error, message);

            return res;
        }
    }
}

export { handler as POST };
