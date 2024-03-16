import EditButtonGroup from "./editButtonGroup";
import { useTranslations } from "next-intl";

export default function DeletePage({ id, idType }) {
    const t = useTranslations("Sidebarplus");

    return (
        <div className="row w-100 p-0 m-0 d-flex flex-column justify-content-start align-items-center pt-2">
            <div className="col-6 border border-secondary rounded p-1 bg-body-secondary">
                <div className="text-center mb-1">
                    {t("are_you_sure")} {t(idType)} <br></br><u>{id}</u>?
                </div>
                <div className="d-flex flex-row text-center justify-content-center align-items-center">
                    <EditButtonGroup />
                </div>
            </div>
        </div>
    );
}
