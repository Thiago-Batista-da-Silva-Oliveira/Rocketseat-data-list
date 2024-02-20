import { FileDown, MoreHorizontal, Plus, Search } from "lucide-react";
import { Header } from "./components/header";
import { Tabs } from "./components/tabs";
import { Button } from "./components/ui/button";
import { Control, Input } from "./components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";

function App() {
  return (
    <div className="py-10 space-y-8">
      <Header />
      <Tabs />
      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Tags</h1>
          <Button variant="primary">
            <Plus className="size-3" />
            Create new
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <Input variant="filter">
            <Search className="size-3" />
            <Control placeholder="Search tags..." />
          </Input>
          <Button>
            <FileDown className="size-3" />
            Export
          </Button>
        </div>
        <Table>
          <TableHeader>
             <TableRow>
                <TableHead></TableHead>
                <TableHead>Tag</TableHead>
                <TableHead>Amount of videos</TableHead>
                <TableHead></TableHead>
             </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-zinc-100">
                    React
                  </span>
                  <span className="text-xs text-zinc-500">9E09880-3FC23-ASC-232</span>
                </div>
              </TableCell>
              <TableCell className="text-zinc-300">
                13 vídeo(s)
              </TableCell>
              <TableCell className="text-right">
                <Button size="icon">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>        
        </Table>
      </main>
    </div>
  );
}

export default App;
