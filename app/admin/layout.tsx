import Link from "next/link";
import type { ReactNode } from "react";
import { MdCampaign, MdGroup, MdChat} from "react-icons/md";
import { LiaRobotSolid } from "react-icons/lia";
import { FaTelegram } from "react-icons/fa";
import Image from "next/image";

export default function TelegramLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex bg-gray-400/hover:bg-[#1A1A1A]">
      <div className="w-64 bg-black border-r border-gray-200 p-6">
        <div className="mb-6 flex items-center">
            <Image src="/logo.svg" width={150} height={150} alt={""}></Image>
        </div>
        <h3 className="text-gray-300 pl-3 text-[12px] font-bold pt-2 pb-4">ADMIN MENU</h3>

        <nav className="space-y-1">
          <Link
            href="/admin/jobs"
            className="flex items-center px-5 py-4 text-md font-bold text-white rounded-md hover:bg-[#1A1A1A] transition-colors"
          >
            📋 Jobs
          </Link>

          <Link
            href="/telegram/group"
            className="flex items-center px-5 py-4 text-md font-bold text-white rounded-md hover:bg-[#1A1A1A] transition-colors"
          >
           ➕ Create Job
          </Link>

          <Link
            href="/telegram/personal"
            className="flex items-center px-5 py-4 text-md font-bold text-white rounded-md hover:bg-[#1A1A1A] transition-colors"
          >
            📧 Applications
          </Link>
        </nav>
      </div>

      <div className="flex-1 p-4 bg-gray-50">{children}</div>
    </div>
  );
}