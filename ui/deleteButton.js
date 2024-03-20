import { BsTrash } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function DeleteButton({ id, idType }) {
    const router = useRouter();
    const t = useTranslations("Item");
    
    const handleDelete = () => {
        router.push(`/${idType}/${id}/delete`);
        // console.log(`Deleting ${idType} with ID: ${id}`);
    };

    return (
        <>
            <button
                type="button"
                className="btn border-0 text-nowrap p-0 m-0"
                title={t('delete')}
                onClick={handleDelete}
            >
                <BsTrash size="1.4em" color={`darkred`} className="m-0 p-0" />
            </button>
        </>
    );
}
