import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function JobApplications() {
  return (
    <div className="p-8 w-full bg-white min-h-screen">
      {/* Sarlavha qismi */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Job Applications</h1>
        <p className="text-muted-foreground mt-1">
          Review and manage all job applications (1 total)
        </p>
      </div>

      {/* Jadval o'ralgan oq blok (Card stili) */}
      <div className="rounded-md border p-4 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black">Name</TableHead>
              <TableHead className="font-bold text-black">Email</TableHead>
              <TableHead className="font-bold text-black">Job</TableHead>
              <TableHead className="font-bold text-black">Applied Date</TableHead>
              <TableHead className="text-right font-bold text-black">Actions</TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            <TableRow>
              <TableCell>nozim</TableCell>
              <TableCell className="text-muted-foreground">kozim@gmail.com</TableCell>
              <TableCell className="text-muted-foreground">Senior Frontend Engineer - TechCorp</TableCell>
              <TableCell className="text-muted-foreground">Apr 30, 2026, 08:51 AM</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="ghost" size="sm">
                  View
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}