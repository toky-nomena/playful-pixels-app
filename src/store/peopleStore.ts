import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Person {
  id: string;
  name: string;
  role: string;
  department: string;
  status: "Active" | "Away" | "Offline";
  email: string;
}

interface PeopleStore {
  people: Person[];
  addPerson: (person: Omit<Person, "id">) => void;
  updatePerson: (id: string, person: Partial<Person>) => void;
  removePerson: (id: string) => void;
}

export const usePeopleStore = create<PeopleStore>()(
  persist(
    (set) => ({
      people: [
        {
          id: "1",
          name: "Adam Doe",
          role: "Marketing Technologist",
          department: "Front-end",
          status: "Active",
          email: "adam@example.com"
        },
        {
          id: "2",
          name: "Arlene McCoy",
          role: "Business Systems Analyst",
          department: "Digital",
          status: "Away",
          email: "arlene@example.com"
        },
        {
          id: "3",
          name: "Barrett Richards",
          role: "Senior Product Designer",
          department: "Digital",
          status: "Active",
          email: "barrett@example.com"
        }
      ],
      addPerson: (person) =>
        set((state) => ({
          people: [...state.people, { ...person, id: crypto.randomUUID() }],
        })),
      updatePerson: (id, updatedPerson) =>
        set((state) => ({
          people: state.people.map((p) =>
            p.id === id ? { ...p, ...updatedPerson } : p
          ),
        })),
      removePerson: (id) =>
        set((state) => ({
          people: state.people.filter((p) => p.id !== id),
        })),
    }),
    {
      name: 'people-storage',
    }
  )
);