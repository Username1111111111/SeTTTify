import { create } from "zustand";

const useStore = create((set, get) => ({
    collections: { collection1: { card1: { id: 1, name: "name" } } },
}));

export default useStore;


const dataStructure = {
    collection: {
        id: "string",
        name: "string",
        description: "string",
        topic: "string",
        image: "string (optional)",
        fields: {
            fixed: ["id", "name", "tags"],
            optional: {
                integer: ["int1", "int2", "int3"],
                string: ["string1", "string2", "string3"],
                text: ["text1", "text2", "text3"],
                boolean: ["bool1", "bool2", "bool3"],
                date: ["date1", "date2", "date3"],
            },
        },
        items: ["itemId", "itemId2", "itemId3"]
    },
    item: {
        id: "string",
        name: "string",
        tags: ["tag1", "tag2", "tag3"],
        customFields: {
            integer: "int",
            string: "string",
            text: "text",
            boolean: "bool",
            date: "date",
        },
        comments: ["comment1", "comment2", "comment3"],
        likes: "int",
    },
    user: {
        id: "string",
        name: "string",
        email: "string",
        password: "string",
        signup_date: "date",
        last_login_date: "date",
        authenticated: "boolean",
        blocked: "boolean",
        admin: "boolean",
        personal_page: "string",
        language: "string",
        collections: ["collectionId1", "collectionId2", "collectionId3"],
        items: ["itemId1", "itemId2", "itemId3"],
        comments: ["commentId1", "commentId2", "commentId3"],
        likes: ["likeId1", "likeId2", "likeId3"]
    },
};
