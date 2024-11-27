import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export interface Person {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: "Active" | "Away" | "Offline";
}

interface PeopleStore {
  people: Person[];
  addPerson: (person: Omit<Person, "id">) => void;
  updatePerson: (id: string, person: Omit<Person, "id">) => void;
  removePerson: (id: string) => void;
}

export const usePeopleStore = create<PeopleStore>()(
  persist(
    (set) => ({
      people: [],
      addPerson: (person) =>
        set((state) => ({
          people: [...state.people, { ...person, id: uuidv4() }],
        })),
      updatePerson: (id, person) =>
        set((state) => ({
          people: state.people.map((p) =>
            p.id === id ? { ...person, id } : p
          ),
        })),
      removePerson: (id) =>
        set((state) => ({
          people: state.people.filter((p) => p.id !== id),
        })),
    }),
    {
      name: "people-storage",
    }
  )
);