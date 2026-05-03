import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <div>
      <section className=" lg:grid pt-10 lg:place-content-center">
        <div className="mx-auto w-screen max-w-7xl px-4 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto  text-center">
            <span className="text-md font-bold text-amber-700">
              CAREER OPPORTUNITES
            </span>
            <h1 className="text-[70px]! font-bold mt-10 text-gray-900 sm:text-5xl">
              Find Your Perfect
              <strong className="text-indigo-600"> career</strong>
            </h1>

            <p className="mt-4 max-w-prose mx-auto text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Discover career opportunities from top companies. Search, filter,
              and apply to roles that match your skills and aspirations.
            </p>
            <div className="mt-10! flex justify-center gap-4 sm:mt-6">
              <Input
                className="max max-w-prose h-10"
                placeholder="Search byjob title, company, or keyword..."
              />
              <Button className="px-8 py-5">Search</Button>
            </div>

            <div className="mt-10! flex justify-center gap-4 sm:mt-6">
              <Button className="px-8 py-5">Browse All Jobs</Button>
              <Button className="px-8 py-5" variant={"outline"}>
                Post a Job
              </Button>
            </div>
            <div className="mt-20! flex justify-center gap-20 sm:mt-6">
                <div className="w-20 text-center">
                    <h1 className="text-[30px]! font-bold text-blue-900">500+</h1>
                    <span className="text-[12px]">Active Jobs</span>
                </div>
                <div className="w-20 text-center">
                    <h1 className="text-[30px]! font-bold text-blue-900">200+</h1>
                    <span className="text-[12px]">Active Jobs</span>
                </div>
                <div className="w-20 text-center">
                    <h1 className="text-[30px]! font-bold text-blue-900">50K+</h1>
                    <span className="text-[12px]">Active Jobs</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
