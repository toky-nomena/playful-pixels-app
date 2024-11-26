import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Person {
  id: number;
  name: string;
  role: string;
  department: string;
  status: string;
}

const people: Person[] = [
  {
    id: 1,
    name: "Adam Doe",
    role: "Marketing Technologist",
    department: "Front-end",
    status: "Active",
  },
  {
    id: 2,
    name: "Arlene McCoy",
    role: "Business Systems Analyst",
    department: "Digital",
    status: "Away",
  },
  {
    id: 3,
    name: "Barrett Richards",
    role: "Senior Product Designer",
    department: "Digital",
    status: "Active",
  },
];

const People = () => {
  const [search, setSearch] = useState("");

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-8 space-y-8 fade-in">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">People</h1>
        <p className="text-muted-foreground">
          Manage and view all team members.
        </p>
      </div>

      <Card className="p-6">
        <div className="flex items-center py-4">
          <Input
            placeholder="Search people..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPeople.map((person) => (
              <TableRow key={person.id}>
                <TableCell className="font-medium">{person.name}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{person.department}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={person.status === "Active" ? "default" : "secondary"}
                  >
                    {person.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default People;