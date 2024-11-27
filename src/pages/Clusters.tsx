import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Cpu, Microchip } from "lucide-react";
import { Link } from "react-router-dom";
import { ClusterProcessorForm } from "@/components/clusters/ClusterProcessorForm";

interface ClusterOption {
  id: string;
  name: string;
  memory: string;
  usage: number;
  type: string;
  manufacturer: string;
}

const clusters: ClusterOption[] = [
  {
    id: "1",
    name: "NVIDIA® GeForce™ RTX 3090",
    memory: "24GB",
    usage: 70,
    type: "GPU",
    manufacturer: "nvidia"
  },
  {
    id: "2",
    name: "NVIDIA® GeForce™ RTX 4090",
    memory: "24GB",
    usage: 50,
    type: "GPU",
    manufacturer: "nvidia"
  },
  {
    id: "3",
    name: "AMD Radeon™ RX 6900 XT",
    memory: "16GB",
    usage: 60,
    type: "GPU",
    manufacturer: "amd"
  },
  {
    id: "4",
    name: "Apple M1 Max",
    memory: "32GB",
    usage: 20,
    type: "GPU",
    manufacturer: "apple"
  },
  {
    id: "5",
    name: "Intel® Xeon® Platinum 8380",
    memory: "64GB",
    usage: 45,
    type: "CPU",
    manufacturer: "intel"
  },
  {
    id: "6",
    name: "AMD EPYC™ 7763",
    memory: "128GB",
    usage: 30,
    type: "CPU",
    manufacturer: "amd"
  },
];

const Clusters = () => {
  const [selectedType, setSelectedType] = useState<string>("GPU");
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("nvidia");
  const [showForm, setShowForm] = useState(false);

  const filteredClusters = clusters.filter(
    (cluster) => 
      cluster.type === selectedType && 
      (selectedManufacturer === "all" || cluster.manufacturer === selectedManufacturer)
  );

  return (
    <div className="container py-8 space-y-8 fade-in">
      <div className="flex items-center space-x-4 text-sm">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/" className="flex items-center space-x-2">
            <ChevronLeft className="h-4 w-4" />
            <span>Back to clusters</span>
          </Link>
        </Button>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">Ray App - End-to-End Encrypted - 03c0d560</h1>
          <div className="flex items-center space-x-8 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span>Memory</span>
              <Badge variant="secondary">20 GB</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span>CPUs GHz</span>
              <Badge variant="secondary">4.4</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span>Connectivity</span>
              <Badge variant="secondary">Low Speed (53MB/s)</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">4. Select Your Cluster Processor</h2>
              <p className="text-sm text-muted-foreground">
                Browse from a wide range of Chips suitable for different use cases. You Can Either Select a CPU Only Cluster or a GPU Only Cluster.
              </p>
            </div>

            <Tabs value={selectedManufacturer} onValueChange={setSelectedManufacturer} className="w-full">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="apple">Apple</TabsTrigger>
                <TabsTrigger value="nvidia">Nvidia</TabsTrigger>
                <TabsTrigger value="amd">AMD</TabsTrigger>
                <TabsTrigger value="intel">Intel</TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs value={selectedType} onValueChange={setSelectedType} className="w-full">
              <TabsList>
                <TabsTrigger value="GPU" className="flex items-center space-x-2">
                  <Microchip className="h-4 w-4" />
                  <span>GPU</span>
                </TabsTrigger>
                <TabsTrigger value="CPU" className="flex items-center space-x-2">
                  <Cpu className="h-4 w-4" />
                  <span>CPU</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 gap-4">
              {filteredClusters.map((cluster) => (
                <div
                  key={cluster.id}
                  className="border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">{cluster.name}</h3>
                      <p className="text-sm text-muted-foreground">{cluster.memory}</p>
                    </div>
                    <div className="h-4 w-4 rounded-full border"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{cluster.usage}% Busy</span>
                      <span className="text-muted-foreground">
                        {100 - cluster.usage}% Free
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${cluster.usage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Add New Processor</h3>
            <Button
              variant="outline"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Hide Form' : 'Show Form'}
            </Button>
          </div>
          {showForm && <ClusterProcessorForm />}
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Available GPUs:</span>
              <span className="text-xl font-semibold text-primary">400</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Clusters;
