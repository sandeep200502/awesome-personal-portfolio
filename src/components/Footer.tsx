
const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Sandeep Raj Saravanan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
