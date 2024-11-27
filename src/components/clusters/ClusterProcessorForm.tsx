import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function ClusterProcessorForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    memory: "",
    type: "GPU",
    manufacturer: "nvidia"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cluster Processor Added",
      description: `Added ${formData.name} with ${formData.memory} memory`,
    });
    // Reset form
    setFormData({
      name: "",
      memory: "",
      type: "GPU",
      manufacturer: "nvidia"
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Processor Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="NVIDIA® GeForce™ RTX 3090"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="memory">Memory</Label>
        <Input
          id="memory"
          value={formData.memory}
          onChange={(e) => setFormData({ ...formData, memory: e.target.value })}
          placeholder="24GB"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="type">Type</Label>
        <Select
          value={formData.type}
          onValueChange={(value) => setFormData({ ...formData, type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GPU">GPU</SelectItem>
            <SelectItem value="CPU">CPU</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="manufacturer">Manufacturer</Label>
        <Select
          value={formData.manufacturer}
          onValueChange={(value) => setFormData({ ...formData, manufacturer: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select manufacturer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nvidia">NVIDIA</SelectItem>
            <SelectItem value="amd">AMD</SelectItem>
            <SelectItem value="intel">Intel</SelectItem>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">Add Processor</Button>
    </form>
  );
}