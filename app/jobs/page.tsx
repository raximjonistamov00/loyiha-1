import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "../_components/Header";
import { Label } from "@/components/ui/label";

export default function JobsPage() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mt-30 mx-auto p-6 bg-white">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Find Your Next Opportunity
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            Explore our curated list of job openings and find the perfect match
            for your career.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-80 space-y-6 p-6 border rounded-xl h-fit">
            <h2 className="font-bold text-lg">Filter Jobs</h2>

            <div className="space-y-2">
              <label className="text-sm font-medium">Search by keyword</label>
              <Input placeholder="Job title, company, or skills..." />
            </div>

          <div className="space-y-2 mt-5!">
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

            <Button variant="outline" className="w-full">
              Reset Filters
            </Button>

            <p className="text-xs text-slate-400">Category: All Categories</p>
          </aside>

          <main className="flex-1 space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Available Jobs</h2>
              <span className="text-slate-500">6 positions</span>
            </div>

            <Card className="border-2 shadow-none rounded-xl overflow-hidden">
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">
                    Senior Frontend Engineer
                  </h3>
                  <p className="text-slate-500">TechCorp</p>
                </div>
                <div className="bg-[#0f172a] text-white w-10 h-10 flex items-center justify-center rounded-md font-bold">
                  T
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  We are looking for an experienced Frontend Engineer to join
                  our growing team. You will work on modern web applications
                  using React and TypeScript.
                </p>

                <div className="flex gap-2">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 shadow-none border-none">
                    Technology
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 shadow-none border-none">
                    Full-time
                  </Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    📍 San Francisco, CA
                  </div>
                  <div className="flex items-center gap-1">
                    💰 $120,000 - $160,000
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase">
                    Requirements:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">5+ years experience</Badge>
                    <Badge variant="outline">+1 more</Badge>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-2">
                <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b] h-12">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
