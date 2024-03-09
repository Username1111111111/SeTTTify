import Image from "next/image";
import styles from './imageField.module.css'; 

export default function ImageField({ src }) {
    return (
        <li className="row mb-1 w-100 p-0 m-0 d-flex flex-column justify-content-start align-items-center">
            <div className={`col-6 p-0 m-0 ${styles.imageContainer}`}>
                <Image
                    alt="Cat"
                    src={src}
                    layout="responsive"
                    width={100}
                    height={100}
                    style={{
                        objectFit: "contain",
                    }}
                    className={styles.roundedImage}
                />
            </div>
        </li>
    );
}
