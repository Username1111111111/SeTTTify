import CancelButton from "./cancelButton";
import ConfirmButton from "./confirmButton";

export default function EditButtonGroup({onSubmit}) {
    return (
        <>
            <ConfirmButton onSubmit={onSubmit}/>
            <CancelButton/>
        </>
    );
}
