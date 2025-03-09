// import Link from 'next/link';
import { SocialIcon } from 'react-social-icons'

export default function Footer () {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">About KindKloset</h3>
            <ul className="space-y-2">
              {/* <li><Link href="/about"><a className="text-gray-400 hover:text-white">About Us</a></Link></li>
              <li><Link href="/careers"><a className="text-gray-400 hover:text-white">Careers</a></Link></li>
              <li><Link href="/press"><a className="text-gray-400 hover:text-white">Press</a></Link></li>
              <li><Link href="/investors"><a className="text-gray-400 hover:text-white">Investors</a></Link></li> */}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              {/* <li><Link href="/help-center"><a className="text-gray-400 hover:text-white">Help Center</a></Link></li>
              <li><Link href="/privacy"><a className="text-gray-400 hover:text-white">Privacy Settings</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-400 hover:text-white">Contact Us</a></Link></li> */}
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              {/* <li><Link href="/privacy-policy"><a className="text-gray-400 hover:text-white">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="text-gray-400 hover:text-white">Terms of Use</a></Link></li>
              <li><Link href="/cookies"><a className="text-gray-400 hover:text-white">Cookies Policy</a></Link></li> */}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
          <SocialIcon url="www.instagram.com" />
          <SocialIcon url="www.facebook.com" />        
          <SocialIcon url="www.pinterest.com" />        
     
          </div>

          {/* Newsletter Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest updates and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} KindKloset. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};