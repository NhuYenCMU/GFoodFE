import React from 'react';
import '../footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">
            Scanfcode.com <i>CODE WANTS TO BE SIMPLE</i> is an initiative to help the upcoming programmers with the code.
            Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will
            help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS,
            Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
          </p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/category/c-language/">Drink</a></li>
            <li><a href="http://scanfcode.com/category/front-end-development/">Milk tea</a></li>
            <li><a href="http://scanfcode.com/category/back-end-development/">Tea</a></li>
            <li><a href="http://scanfcode.com/category/java-programming-language/">Breafast</a></li>
            <li><a href="http://scanfcode.com/category/android/">Cakes</a></li>
            <li><a href="http://scanfcode.com/category/templates/">Noodle</a></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/about/">Instagram</a> <i class="fa-brands fa-instagram"></i></li>
            <li><a href="https://www.facebook.com/daihocduytan.dtu"> Facebook</a> <i class="fa-brands fa-facebook"></i> </li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Mail</a> <i class="fa-regular fa-envelope"></i> </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright &copy; 2017 All Rights Reserved by <a href="#">Scanfcode</a>.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
