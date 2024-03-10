export default function DescriptionField({value}) {
    return (
        <li className="row w-100 p-0 m-0 mb-1 d-flex justify-content-start align-items-center">
            <div className="text-center w-100 p-0 m-0 border border-secondary rounded bg-body">{value}</div>
        </li>
    );
}
