import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bug, Play, FileCode, Settings, FolderOpen } from "lucide-react";
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { useTheme } from "next-themes";

const Code = () => {
  const { theme } = useTheme();
  const [code, setCode] = useState(`def sum_of_list(lst1):
    return sum(lst1)

def count_of_list(lst2):
    return len(lst2)

lst1 = [1,2,3,4,5,7,8,9,10]
lst2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p']

print(sum_of_list(lst1))
print(count_of_list(lst2))`);

  return (
    <div className="container py-8 space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Code Editor</h1>
          <p className="text-muted-foreground">Write and test your code</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Play className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Bug className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-3 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Explorer</h3>
            <Button variant="ghost" size="icon">
              <FolderOpen className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm p-2 hover:bg-muted rounded-md cursor-pointer">
              <FileCode className="h-4 w-4" />
              <span>script.py</span>
            </div>
          </div>
        </Card>

        <Card className="col-span-9 p-4">
          <CodeMirror
            value={code}
            height="500px"
            theme={theme === 'dark' ? 'dark' : 'light'}
            extensions={[python()]}
            onChange={(value) => setCode(value)}
            className="overflow-hidden rounded-md border"
          />
        </Card>
      </div>
    </div>
  );
};

export default Code;