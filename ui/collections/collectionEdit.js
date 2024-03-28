"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import EditButtonGroup from "../editButtonGroup";
import OptInput from "./inputs/optInput";
import FileInput from "./inputs/fileInput";
import TopicInput from "./inputs/topicInput";
import DescriptionInput from "./inputs/descriptionInput";
import NameInput from "./inputs/nameInput";
import getCollectionById from "@/lib/getCollectionById";
import getTopics from "@/lib/getTopics";
import createCollection from "@/lib/createCollection";
import updateCollection from "@/lib/updateCollection";
import uploadImage from "@/lib/uploadImage";

export default function CollectionEdit({ collectionId, userId, mode }) {
    const t = useTranslations("Collection");
    const router = useRouter();
    const { data: session } = useSession();
    const i = "integer",
        s = "string",
        ta = "textarea",
        c = "checkbox",
        d = "date";
    const [topics, setTopics] = useState([]);
    const [inputStates, setInputStates] = useState({
        custom_int1_state: false,
        custom_int2_state: false,
        custom_int3_state: false,
        custom_string1_state: false,
        custom_string2_state: false,
        custom_string3_state: false,
        custom_text1_state: false,
        custom_text2_state: false,
        custom_text3_state: false,
        custom_bool1_state: false,
        custom_bool2_state: false,
        custom_bool3_state: false,
        custom_date1_state: false,
        custom_date2_state: false,
        custom_date3_state: false,
    });
    const [inputValues, setInputValues] = useState({
        name: "",
        description: "",
        topicId: "",
        custom_int1_name: "",
        custom_int2_name: "",
        custom_int3_name: "",
        custom_string1_name: "",
        custom_string2_name: "",
        custom_string3_name: "",
        custom_text1_name: "",
        custom_text2_name: "",
        custom_text3_name: "",
        custom_bool1_name: "",
        custom_bool2_name: "",
        custom_bool3_name: "",
        custom_date1_name: "",
        custom_date2_name: "",
        custom_date3_name: "",
    });
    const [image, setImage] = useState();
    

    useEffect(() => {
        if (!session || session?.user?.id !== userId) {
            if (!session?.user?.admin) {
                router.back();
            }
        }
        async function fetchItem() {
            const topics = await getTopics();
            setTopics(topics);

            if (mode == "edit") {
                const collection = await getCollectionById(collectionId);

                let newState = {},
                    newValue = {};

                for (const key in collection) {
                    if (
                        collection.hasOwnProperty(key) &&
                        key.match(/custom_.*_state/)
                    ) {
                        newState[key] = collection[key];
                    }
                }

                for (const key in collection) {
                    if (
                        collection.hasOwnProperty(key) &&
                        key.match(/custom_.*_name/)
                    ) {
                        newValue[key] = collection[key];
                    }
                }

                newValue["name"] = collection.name;
                newValue["description"] = collection.description;
                newValue["topicId"] = collection.topicId;

                setInputValues(newValue);
                setInputStates(newState);
            }
        }
        fetchItem();
    }, [userId, collectionId, mode]);

    async function handleSubmit() {
        const data = { ...inputValues, ...inputStates };
        // console.log(data);

        if (mode == "create") {
            async function postCollectionData() {
                const res = await createCollection(userId, data);
                const res2 = await uploadImage(image, collectionId);
                // console.log(res);
                // console.log(res2);
                if (res.status === 200 && res2.status === 200) {
                    router.back();
                }
            }
            postCollectionData();
        } else if (mode == "edit") {
            async function updateCollectionData() {
                const res = await updateCollection(collectionId, data);
                const res2 = await uploadImage(image, collectionId);
                // console.log(res);
                // console.log(res2);
                if (res.status === 200 && res2.status === 200) {
                    router.back();
                }
            }
            updateCollectionData();
        }
    }

    return (
        <div className="col-12 col-md-10 col-lg-8 p-0 m-0 pt-2">
            {session?.user?.admin || session?.user?.id == userId ? (
                <div className="border border-secondary rounded m-2 mt-0 p-1 bg-body-secondary">
                    <ul className="w-100 p-0 m-0 p-1">
                        <NameInput
                            name={t("name")}
                            placeholder={t("name_of_collection")}
                            collectionName={inputValues.name}
                            collectionId={collectionId}
                            onChange={(newName) =>
                                setInputValues({
                                    ...inputValues,
                                    name: newName,
                                })
                            }
                        />
                        <DescriptionInput
                            name={t("description")}
                            description={inputValues.description}
                            collectionId={collectionId}
                            onChange={(newDescription) =>
                                setInputValues({
                                    ...inputValues,
                                    description: newDescription,
                                })
                            }
                        />
                        <TopicInput
                            name={t("topic")}
                            topics={topics}
                            choosenTopic={inputValues.topicId}
                            collectionId={collectionId}
                            onChange={(newTopicId) =>
                                setInputValues({
                                    ...inputValues,
                                    topicId: newTopicId,
                                })
                            }
                        />
                        <FileInput
                            name={t("image")}
                            imageUrl={inputValues.imageUrl}
                            placeholder={t("choose_file")}
                            collectionId={collectionId}
                            // onChange={(newImageUrl) =>
                            //     setInputValues({
                            //         ...inputValues,
                            //         imageUrl: newImageUrl,
                            //     })
                            // }
                            setImage={setImage}
                        />

                        <hr></hr>

                        <OptInputList
                            fieldType={i}
                            fieldPrefix="custom_int"
                            fieldCount={3}
                            collectionId={collectionId}
                            inputStates={inputStates}
                            inputValues={inputValues}
                            setInputStates={setInputStates}
                            setInputValues={setInputValues}
                        />
                        <OptInputList
                            fieldType={s}
                            fieldPrefix="custom_string"
                            fieldCount={3}
                            collectionId={collectionId}
                            inputStates={inputStates}
                            inputValues={inputValues}
                            setInputStates={setInputStates}
                            setInputValues={setInputValues}
                        />
                        <OptInputList
                            fieldType={ta}
                            fieldPrefix="custom_text"
                            fieldCount={3}
                            collectionId={collectionId}
                            inputStates={inputStates}
                            inputValues={inputValues}
                            setInputStates={setInputStates}
                            setInputValues={setInputValues}
                        />
                        <OptInputList
                            fieldType={c}
                            fieldPrefix="custom_bool"
                            fieldCount={3}
                            collectionId={collectionId}
                            inputStates={inputStates}
                            inputValues={inputValues}
                            setInputStates={setInputStates}
                            setInputValues={setInputValues}
                        />
                        <OptInputList
                            fieldType={d}
                            fieldPrefix="custom_date"
                            fieldCount={3}
                            collectionId={collectionId}
                            inputStates={inputStates}
                            inputValues={inputValues}
                            setInputStates={setInputStates}
                            setInputValues={setInputValues}
                        />
                    </ul>

                    <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0 mb-1">
                        <EditButtonGroup onConfirm={handleSubmit} />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

const OptInputList = ({
    fieldType,
    fieldPrefix,
    fieldCount,
    collectionId,
    inputStates,
    inputValues,
    setInputStates,
    setInputValues,
}) => {
    const inputComponents = [];

    for (let i = 1; i <= fieldCount; i++) {
        const stateKey = `${fieldPrefix}${i}_state`;
        const nameKey = `${fieldPrefix}${i}_name`;

        inputComponents.push(
            <OptInput
                key={i}
                fieldType={fieldType}
                state={inputStates[stateKey]}
                name={inputValues[nameKey]}
                fieldNumber={i}
                collectionId={collectionId}
                onChange={(newState, newName) => {
                    setInputStates({
                        ...inputStates,
                        [stateKey]: newState,
                    });
                    setInputValues({
                        ...inputValues,
                        [nameKey]: newName,
                    });
                }}
            />
        );
    }

    return <>{inputComponents}</>;
};
