import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Component() {
  return (
    <footer className="relative">
      {/* Dark section with title */}
      <div className="bg-gray-900 text-white py-16 px-4 text-center relative">
        <h2 className="text-4xl md:text-6xl font-bold">Website Footers</h2>

        {/* Wavy divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-20"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-blue-600"
            ></path>
          </svg>
        </div>
      </div>

      {/* Blue gradient section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="text-center">
            <ul className="flex flex-wrap justify-center space-x-8 text-lg">
              <li>
                <Link href="#" className="hover:text-blue-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-200 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
