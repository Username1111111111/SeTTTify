import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./descriptionField.module.css";

export default function DescriptionField({ collectionDescription }) {
    return (
        <li className="row w-100 p-0 m-0 mb-1 d-flex justify-content-start align-items-center">
            <div
                className={`text-center w-100 p-0 m-0 border border-secondary rounded bg-body ${styles.markdownContainer}`}
            >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {collectionDescription}
                </ReactMarkdown>
            </div>
        </li>
    );
}
