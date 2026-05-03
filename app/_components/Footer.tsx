import { Link } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#020817] text-gray-400 py-5 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About JobPortal</h3>
            <p className="leading-relaxed text-sm">
              Your trusted platform for connecting with career opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                  Browse Jobs
              </li>
              <li>
                  Post a Job
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm">support@jobportal.com</p>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} JobPortal. All rights reserved.</p>
        </div>

      </div>
    </footer>
    </div>
  )
}
