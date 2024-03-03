import Image from "next/image";

export default function ImageField({ src }) {
    return (
        <div
            style={{
                position: "relative",
                height: "200px",
            }}
            className="mb-1"
        >
            <Image
                alt="Mountains"
                src={src}
                fill
                sizes="100vw"
                style={{
                    objectFit: "contain",
                }}
                className={``}
            />
        </div>
    );
}
