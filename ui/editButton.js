"use client"
import { BiSolidEditAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function EditButton({ id, idType }) {
    const router = useRouter();
    const t = useTranslations("Item");

    const handleEdit = () => {
        router.push(`/${idType}/${id}/edit`);
        // console.log(`Editing ${idType} with ID: ${id}`);
    };

    return (
        <button
            type="button"
            className="btn border-0 text-nowrap p-0 m-0 me-2"
            title={t('edit')}
            onClick={handleEdit}
        >
            <BiSolidEditAlt size="1.4em" className="m-0 p-0" />
        </button>
    );
}
