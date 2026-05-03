import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div>
      <section className="py-20 bg-[#0a3279] text-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Trusted by Job Seekers Worldwide
    </h2>
    <p className="text-blue-100 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
      Our platform has helped thousands of professionals find their ideal career opportunities.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-extrabold mb-2">500+</span>
        <span className="text-blue-200 text-sm md:text-base">Active Job Listings</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-extrabold mb-2">200+</span>
        <span className="text-blue-200 text-sm md:text-base">Top Companies</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-extrabold mb-2">50K+</span>
        <span className="text-blue-200 text-sm md:text-base">Successful Placements</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-extrabold mb-2">98%</span>
        <span className="text-blue-200 text-sm md:text-base">User Satisfaction</span>
      </div>

    </div>
  </div>
</section>
<section className="w-full py-20 bg-linear-to-b from-[#113a85] to-[#0a2a61] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to Advance <br className="hidden md:block" /> Your Career?
        </h2>

        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
          Discover hundreds of job opportunities from leading companies. 
          Start your journey to your next role today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="bg-white text-[#113a85] hover:bg-blue-50 px-10 py-6 text-lg font-semibold rounded-lg w-full sm:w-auto transition-colors"
          >
            Explore Jobs
          </Button>
          <Button className="border-2 border-white px-10 py-5.5" variant={"ghost"}>Post a Job</Button>
        </div>

      </div>
    </section>
    </div>
  )
}
