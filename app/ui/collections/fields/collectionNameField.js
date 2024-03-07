export default function ItemNameField({ value }) {
    return (
        <tr className="">
            {/* <td className=""></td> */}
            <td colSpan="2" className="text-center">{ value }</td>
        </tr>
    );
}
