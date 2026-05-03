import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

function page() {
  return (
    <div>
      <div className="p-10 bg-slate-50 min-h-screen">
        <Link href={"/admin/jobs"}>
      <Button variant="outline" size="lg" className="mb-6 rounded-sm gap-2">
        Back to Jobs
      </Button>
        </Link>


      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create New Job</h1>
        <p className="text-muted-foreground">Fill in the form below to create a new job posting</p>
      </div>
    <div className="p-8 bg-white max-w-4xl rounded-xl">
              <div className="bg-white p-4 rounded-xl border shadow-sm max-w-4xl">
        <h2 className="text-xl font-semibold mb-6">Add New Job</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title *</Label>
            <Input className="rounded-sm" id="title" placeholder="e.g., Senior Frontend Engineer" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company *</Label>
            <Input className="rounded-sm" id="company" placeholder="e.g., TechCorp" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input className="rounded-sm" id="location" placeholder="e.g., San Francisco, CA" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">Salary (Optional)</Label>
            <Input className="rounded-sm" id="salary" placeholder="e.g., $100,000 - $150,000" />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Technology" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Technology</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Job Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Full-time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full-time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea 
              id="description" 
              placeholder="Job description and responsibilities..." 
              className="min-h-37.5 bg-gray-50 border-none"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="salary">Requirements (comma-separated)</Label>
            <Input className="w-full" id="salary" placeholder="e.g., React, TypeScript, 5+ years experience, Node.js" />
          </div>

           <Button className=" bg-[#1e3a8a] w-full">
          Add Job
        </Button>
        <Button variant={"outline"} className="w-full">reset</Button>
  
        </div>


      </div>
    </div>
    </div>
    </div>
  )
}

export default page
