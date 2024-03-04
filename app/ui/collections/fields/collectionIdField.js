import ButtonGroup from "../../buttonGroup";

export default function CollectionIdField({colId}) {
    return (
        <tr>
            <td>#id {colId}</td>
            <td className="d-flex flex-row text-center justify-content-end align-items-center"><ButtonGroup colId={colId}/></td>
        </tr>
    );
}
