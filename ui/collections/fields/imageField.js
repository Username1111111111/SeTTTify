import Image from "next/image";
import styles from "./imageField.module.css";

export default function ImageField({ collectionImageUrl }) {
// export default function ImageField({ }) {

    // let collectionImageUrl = 'lu9xezbk31cq5-soywojak.png';

    return (
        <li className="row mb-1 w-100 p-0 m-0 d-flex flex-column justify-content-start align-items-center">
            <div className={`col-6 p-0 m-0 ${styles.imageContainer}`}>
                <Image
                    alt="Cat"
                    src={`https://storage.googleapis.com/setttify/${collectionImageUrl}`}
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
