export default function TopicField({value}) {
    return (
        <tr className="">
            {/* <td className="">Topic: </td> */}
            <td colSpan="2" className="text-center">{value}</td>
        </tr>
    );
}
