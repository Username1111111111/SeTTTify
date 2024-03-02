import Image from "next/image";
import DescriptionField from "./descriptionField";
import TopicField from "./topicField";
import NumberFieldOpt from "./numberFieldOpt";
import StringFieldOpt from "./stringFieldOpt";
import TextareaFieldOpt from "./textareaFieldOpt";
import CheckboxFieldOpt from "./checkboxFieldOpt";
import DateFieldOpt from "./dateFieldOpt";
import NameField from "./nameField";
import TaglistField from "./taglistField";
import ButtonGroup from "../buttonGroup";
import IdField from "./idField";

export default function ItemCard({ children }) {
    return (
        <li className="col-12 col-md-6 d-flex flex-column justify-content-between">
            <div className="d-flex flex-row justify-content-between align-items-center mt-2 mb-1">
                <IdField id={children}/>
                {/* if authorized */}
                <ButtonGroup/>
            </div>
            <TaglistField/>
            <Image width="200" height="100" src="/300.jpg" className="mb-1" alt="hello"/>
            <NameField/>
            <DescriptionField/>
            <TopicField/>
            <NumberFieldOpt/>
            <NumberFieldOpt/>
            <NumberFieldOpt/>
            <StringFieldOpt/>
            <StringFieldOpt/>
            <StringFieldOpt/>
            <TextareaFieldOpt/>
            <TextareaFieldOpt/>
            <TextareaFieldOpt/>
            <CheckboxFieldOpt/>
            <CheckboxFieldOpt/>
            <CheckboxFieldOpt/>
            <DateFieldOpt/>
            <DateFieldOpt/>
            <DateFieldOpt/>
        </li>
    );
}
