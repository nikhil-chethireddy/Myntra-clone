import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
        </div>

        <div className="footer_column">
          <h3>CUSTOMER SERVICE</h3>

          <a href="#">Help Center</a>
          <a href="#">Track Order</a>
          <a href="#">Returns & Refunds</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer_column">
          <h3>ABOUT US</h3>

          <a href="#">About Company</a>
          <a href="#">Careers</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="copyright">
        © 2024 www.myntra.com. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
