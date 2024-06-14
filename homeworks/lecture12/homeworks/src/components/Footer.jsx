const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container mx-0 my-0">
        <div className="row">
          <div className="text-center py-3">
            <p>&copy; {currentYear} All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
