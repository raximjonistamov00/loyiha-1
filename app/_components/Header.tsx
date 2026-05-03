
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header=()=>{
    return (
        <header className="container fixed bg-gray-50/70 backdrop-blur-lg! z-50 px-40 pt-7 pb-5 flex border-b items-center justify-between">
            <Image src="/logo.svg" alt="" width={150} height={150}/>
            <ul className="flex items-center justify-center gap-3 cursor-pointer">
                <li>Home</li>
                <li>Jobs</li>
                <Button>Post a job</Button>
            </ul>

        </header>
    )
}

export default Header;