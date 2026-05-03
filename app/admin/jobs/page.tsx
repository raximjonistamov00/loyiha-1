import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function page() {
  return (
    <div>
      <div className="p-8 bg-slate-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Jobs Management</h1>
        <p className="text-muted-foreground">Manage all your job postings</p>
      </div>

      <Button className="bg-[#1e3a8a] hover:bg-[#1e40af] mb-10">
        Create New Job
      </Button>

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-xl font-semibold mb-4">All Jobs 6</h2>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>

                <TableRow >
                  <TableCell>
                    <div className="font-medium">alo</div>
                    <div className="text-xs text-slate-400">buxoro</div>
                  </TableCell>
                  <TableCell>alo</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-normal">
                      tanla
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-normal">
                      salom
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="border-slate-300">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>

            </TableBody>
          </Table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
