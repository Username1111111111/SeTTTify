"use client";
import EditButton from "./editButton";
import DeleteButton from "./deleteButton";

export default function ButtonGroup({id, idType}) {
    return (
        <div className="d-flex justify-content-end align-items-center p-0 m-0">
            <EditButton id={id} idType={idType}/>
            <DeleteButton id={id} idType={idType}/>
        </div>
    );
}
