import EditButtonGroup from "./editButtonGroup";
import { useTranslations } from "next-intl";

export default function DeletePage({ id, idType }) {
    const t = useTranslations("Sidebarplus");

    return (
        <div className="row w-100 m-0 d-flex flex-column justify-content-start align-items-center p-2">
            <div className="col-12 col-md-6 border border-secondary rounded p-1 bg-body-secondary p-2">
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
