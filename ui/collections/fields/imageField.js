import Image from "next/image";
import styles from "./imageField.module.css";

export default function ImageField({ collectionImageUrl }) {
    return (
        <li className="row mb-1 w-100 p-0 m-0 d-flex flex-column justify-content-start align-items-center">
            <div className={`col-6 p-0 m-0 ${styles.imageContainer}`}>
                <Image
                    alt="Cat"
                    // src={`https://${collectionImageUrl}`}
                    src={"https://picsum.photos/id/237/200/300"}
                    // layout="responsive"
                    width={100}
                    height={100}
                    style={{
                        objectFit: "contain",
                        height: "100%",
                        width: "auto",
                    }}
                    className={styles.roundedImage}
                />
            </div>
        </li>
    );
}
