import DescriptionField from "./descriptionField";
import TopicField from "./topicField";
import NameField from "./nameField";
import TaglistField from "./taglistField";
import ButtonGroup from "../buttonGroup";
import IdField from "./idField";
import ImageField from "./imageField";
import OptField from "./optField";

export default function ItemCard({ id }) {
    return (
        <li className="col-12 col-md-6 p-0 m-0">
            <div className="border border-secondary rounded m-2 p-1">
                <div className="d-flex flex-row justify-content-between align-items-center mt-2 mb-1">
                    <IdField id={id} />
                    {/* if authorized */}
                    <ButtonGroup />
                </div>
                <TaglistField />
                <ImageField src="/300.jpg"/>
                <NameField />
                <DescriptionField />
                <TopicField />
                <OptField type={'number'}/>
                <OptField type={'number'}/>
                <OptField type={'number'}/>
                <OptField type={'string'}/>
                <OptField type={'string'}/>
                <OptField type={'string'}/>
                <OptField type={'textarea'}/>
                <OptField type={'textarea'}/>
                <OptField type={'textarea'}/>
                <OptField type={'checkbox'}/>
                <OptField type={'checkbox'}/>
                <OptField type={'checkbox'}/>
                <OptField type={'date'}/>
                <OptField type={'date'}/>
                <OptField type={'date'}/>
            </div>
        </li>
    );
}
