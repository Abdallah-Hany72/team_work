import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-5 md:px-16 mt-8 border-t border-outline-variant/30 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <span className="font-display-lg text-headline-lg text-primary block mb-4">Spotly</span>
            <p className="text-on-surface-variant max-w-sm font-body-md text-body-md">
              The Sophisticated Socialite's Guide to the city's best hidden gems and vibrant social hubs.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-on-surface mb-4 text-label-md uppercase tracking-wider">Explore</h5>
            <ul className="space-y-2">
              <li><Link to="/discover" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">Browse Categories</Link></li>
              <li><Link to="/add-spot" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">Add a Spot</Link></li>
              <li><Link to="/discover" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">City Guides</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-on-surface mb-4 text-label-md uppercase tracking-wider">Support</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">Privacy Policy</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">Terms of Service</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-outline-variant/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-label-md">© 2024 Spotly Inc. The Sophisticated Socialite's Guide.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer transition-colors">public</span>
            <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer transition-colors">chat_bubble</span>
            <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer transition-colors">photo_camera</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
