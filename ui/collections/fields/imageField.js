import Image from "next/image";
import styles from "./imageField.module.css";

export default function ImageField({ collectionImageUrl }) {

    const placeholderImageUrl = '/placeholder.png';
    const imageUrl = collectionImageUrl ? `https://storage.googleapis.com/setttify/${collectionImageUrl}` : placeholderImageUrl;

    return (
        <li className="row mb-1 w-100 p-0 m-0 d-flex flex-column justify-content-start align-items-center">
            <div className={`col-6 p-0 m-0 ${styles.imageContainer}`}>
                <Image
                    alt="Cat"
                    src={imageUrl}
                    width={100}
                    height={100}
                    style={{
                        objectFit: "contain",
                        height: "100%",
                        width: "auto",
                    }}
                    className={styles.roundedImage}
                    referrerPolicy="no-referrer"
                    priority={true}
                />
                {/* <img src={imageUrl} className="w-75" referrerPolicy="no-referrer"/> */}
            </div>
        </li>
    );
}
