import { create } from "zustand";

const useStore = create((set, get) => ({
    collections: { collection1: { card1: { id: 1, name: "name" } } },
}));

export default useStore;
