export default function TaglistField({ value }) {
    return (
        <tr className="">
            <td className="bg-body-secondary">Tags:</td>
            <td className="bg-body-secondary">{ value }</td>
        </tr>
    );
}
