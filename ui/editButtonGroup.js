import CancelButton from "./cancelButton";
import ConfirmButton from "./confirmButton";

export default function EditButtonGroup({onConfirm}) {
    return (
        <>
            <ConfirmButton onConfirm={onConfirm}/>
            <CancelButton/>
        </>
    );
}
