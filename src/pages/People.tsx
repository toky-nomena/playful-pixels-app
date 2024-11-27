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
import { Button } from "@/components/ui/button";
import { PersonForm } from "@/components/people/PersonForm";
import { usePeopleStore } from "@/store/peopleStore";
import { PersonFormValues } from "@/lib/schemas/person";
import { Plus, Pencil, Trash2 } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useToast } from "@/components/ui/use-toast";

const People = () => {
  const [search, setSearch] = useState("");
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const { people, addPerson, updatePerson, removePerson } = usePeopleStore();
  const { toast } = useToast();

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (data: PersonFormValues) => {
    if (selectedPerson) {
      updatePerson(selectedPerson, data);
      toast({
        title: "Person updated",
        description: "The person has been updated successfully.",
      });
    } else {
      addPerson(data);
      toast({
        title: "Person added",
        description: "The new person has been added successfully.",
      });
    }
    setSelectedPerson(null);
  };

  const handleDelete = (id: string) => {
    removePerson(id);
    toast({
      title: "Person removed",
      description: "The person has been removed successfully.",
      variant: "destructive",
    });
  };

  return (
    <div className="container py-8 space-y-8 fade-in">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">People</h1>
        <p className="text-muted-foreground">
          Manage and view all team members.
        </p>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between py-4">
          <Input
            placeholder="Search people..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
          <Drawer onClose={() => setSelectedPerson(null)}>
            <DrawerTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Person
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  {selectedPerson ? "Edit Person" : "Add New Person"}
                </DrawerTitle>
                <DrawerDescription>
                  {selectedPerson
                    ? "Edit the details of an existing person"
                    : "Add a new person to the team"}
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <PersonForm
                  onSubmit={handleSubmit}
                  initialData={
                    selectedPerson
                      ? people.find((p) => p.id === selectedPerson)
                      : undefined
                  }
                />
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
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
                <TableCell>
                  <div className="flex space-x-2">
                    <Drawer onClose={() => setSelectedPerson(null)}>
                      <DrawerTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedPerson(person.id)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>Edit Person</DrawerTitle>
                          <DrawerDescription>
                            Edit the details of an existing person
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4">
                          <PersonForm
                            onSubmit={handleSubmit}
                            initialData={person}
                          />
                        </div>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(person.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
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