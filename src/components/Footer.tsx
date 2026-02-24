const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm py-5 px-3">
      <p>Copyright © {currentYear}. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
