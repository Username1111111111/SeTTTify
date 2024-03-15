export default function ItemNameField({ collectionName }) {
    return (
        <li className="row w-100 p-0 m-0 mb-1 d-flex justify-content-start align-items-center">
            {/* <td className=""></td> */}
            <div className="text-center border border-secondary rounded bg-body">{ collectionName }</div>
        </li>
    );
}
