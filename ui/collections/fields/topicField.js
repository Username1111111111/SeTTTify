export default function TopicField({collectionTopic}) {
    return (
        <li className="row w-100 p-0 m-0 mb-1 d-flex justify-content-start align-items-center">
            <div className="text-center  border border-secondary rounded bg-body">{collectionTopic}</div>
        </li>
    );
}
