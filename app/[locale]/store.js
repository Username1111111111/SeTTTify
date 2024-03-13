import { create } from "zustand";

const useStore = create((set, get) => ({
    collections: { collection1: { card1: { id: 1, name: "name" } } },
}));

export default useStore;

const dataStructure = {
    user: {
        id: "string",
        name: "string",
        email: "string",
        password: "string",
        signup_date: "date",
        last_login_date: "date",
        blocked: "boolean",
        admin: "boolean",
        personal_page: "string", //user id basicaly
        collections: ["collectionId1", "collectionId2", "collectionId3"],
        items: ["itemId1", "itemId2", "itemId3"],
        comments: ["commentId1", "commentId2", "commentId3"],
        likes: ["likeId1", "likeId2", "likeId3"]
    },
    collection: {
        id: "string",
        name: "string",
        description: "string",
        topic: "string",
        image_url: "string",
        items: ["itemId", "itemId2", "itemId3"],
        custom_int1_state:"bool",
        custom_int1_name: "string",
        custom_int2_state:"bool",
        custom_int2_name: "string",
        custom_int3_state:"bool",
        custom_int3_name: "string",
        custom_string1_state:"bool",
        custom_string1_name: "string",
        custom_string2_state:"bool",
        custom_string2_name: "string",
        custom_string3_state:"bool",
        custom_string3_name: "string",
        custom_text1_state:"bool",
        custom_text1_name: "string",
        custom_text2_state:"bool",
        custom_text2_name: "string",
        custom_text3_state:"bool",
        custom_text3_name: "string",
        custom_bool1_state:"bool",
        custom_bool1_name: "string",
        custom_bool2_state:"bool",
        custom_bool2_name: "string",
        custom_bool3_state:"bool",
        custom_bool3_name: "string",
        custom_date1_state:"bool",
        custom_date1_name: "string",
        custom_date2_state:"bool",
        custom_date2_name: "string",
        custom_date3_state:"bool",
        custom_date3_name: "string",
    },
    item: {
        id: "string",
        name: "string",
        custom_int1_value: "int",
        custom_int2_value: "int",
        custom_int3_value: "int",
        custom_string1_value: "string",
        custom_string2_value: "string",
        custom_string3_value: "string",
        custom_text1_value: "text",
        custom_text2_value: "text",
        custom_text3_value: "text",
        custom_bool1_value: "bool",
        custom_bool2_value: "bool",
        custom_bool3_value: "bool",
        custom_date1_value: "date",
        custom_date2_value: "date",
        custom_date3_value: "date",
        tags: ["tag1", "tag2", "tag3"],
        comments: ["comment1", "comment2", "comment3"],
        likes: ["likeId1", "likeId2", "likeId3"],
        collection: "collectionId",
    },
    topic: {
        id: "string",
        name: "string",
        collection: "collectionId1"
    },
    tag: {
        id: "string",
        name: "string",
        item: "itemId",
        author: "userId"
    },
    comment: {
        id: "string",
        text: "text",
        author: "userId",
        time: "date"
    },
    likee: {
        id: "string",
        author: "userId",
        item: "itemId"
    },
    
};
