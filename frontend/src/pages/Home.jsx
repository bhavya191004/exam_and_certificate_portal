import React from 'react';
import './Home.css'; // Import the CSS for styling
import { useNavigate } from 'react-router-dom'; // Use useNavigate hook instead of useHistory
import { FaCheckCircle } from 'react-icons/fa'; // Importing React Icons for card icons
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaGoogle } from 'react-icons/fa'; // Social media icons

const Home = () => {
  const navigate = useNavigate(); // For navigation in React Router v6

  // Function to handle "Start Test" button click
  const handleStartTest = () => {
    navigate('/dashboard'); // Redirect to Dashboard (if user is authenticated)
  };

  return (
    <div className="home-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="https://videos.pexels.com/video-files/6209575/6209575-sd_960_506_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of the video */}
      <div className="content">
        <h1>Welcome to TestHub</h1>
        <p>Start your journey with online exams and certifications</p>
        <div className="cta-buttons">
          {/* <button className="cta-btn" onClick={handleStartTest}>Start Test</button> */}
          <button className="cta-btn">Learn More</button>
        </div>
      </div>

      {/* New Section Below the Video */}
      <section className="advanced-features">
        <h2>Our advanced feature set is fully customizable, making our online testing and certification software a perfect solution for even the most rigorous needs.</h2>
        
        <div className="cards-container">
          {/* Card 1: Fully Customizable */}
          <div className="card">
            <FaCheckCircle className="card-icon" />
            <h3>Fully Customizable</h3>
            <p>Your organization has unique testing and certification needs.</p>
          </div>

          {/* Card 2: Advanced Security */}
          <div className="card">
            <FaCheckCircle className="card-icon" />
            <h3>Advanced Security</h3>
            <p>Gauge has advanced security to keep your organization safe.</p>
          </div>

          {/* Card 3: Scalable Solution */}
          <div className="card">
            <FaCheckCircle className="card-icon" />
            <h3>Scalable Solution</h3>
            <p>Gauge meets the needs of organizations of any size.</p>
          </div>

          <div className="card">
            <FaCheckCircle className="card-icon" />
            <h3>Fully Customizable</h3>
            <p>Your organization has unique testing and certification needs.</p>
          </div>

          {/* Card 2: Advanced Security */}
          <div className="card">
            <FaCheckCircle className="card-icon" />
            <h3>Advanced Security</h3>
            <p>Gauge has advanced security to keep your organization safe.</p>
          </div>
        </div>
      </section>

      {/* New Section for Advanced Features for Exams and Certifications */}
      <section className="advanced-exams">
        <div className="exams-left">
          <h2>Advanced features for exams and certifications that matter</h2>
          <p>From multiple exam types, advanced question and answer configurations, proctoring, and certification and badging management, Gauge is a comprehensive online platform solution.</p>
        </div>
        <div className="exams-right">
          <video autoPlay loop muted className="exams-video">
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* New Section for Smart Proctoring */}
      <section className="smart-proctoring">
        <div className="proctoring-left">
          <img src="/images/img1.png" alt="Smart Proctoring" className="proctoring-image" />
        </div>
        <div className="proctoring-right">
          <b><h2>Smart Proctoring</h2></b>
          <p>Intelligent cheating prevention</p>
          <p>Invigilate and identify any suspicious activity in an online exam with AI-based cheating prevention and take assertive action upon discovery of unacceptable behavior. Optional live streaming of test takers with live chat. Optional automatic capture of candidate’s photos during examination at specified intervals.</p>
        </div>
      </section>
      
      {/* New Section for Exam Monitor */}
      <section className="exam-monitor">
        <div className="monitor-left">
          <b><h2>Exam Monitor</h2></b>
          <p>Live coverage of your exams</p>
          <p>Optional live coverage of the examinations showing details such as the candidates taking, completed and dropped with their number of attempts, device name, browser, operating system, IP address, and location details.</p>
        </div>
        <div className="monitor-right">
          <img src="/images/img2.png" alt="Exam Monitor" className="monitor-image" />
        </div>
      </section>
      
      {/* New Section for Smart Proctoring */}
      <section className="smart-proctoring">
        <div className="proctoring-left">
          <img src="/images/img4.png" alt="Smart Proctoring" className="proctoring-image" />
        </div>
        <div className="proctoring-right">
          <b><h2>Test maker software</h2></b>
          <p>Practice made perfect</p>
          <p>Test Maker Software efficiently assists self-study. Learners can select tutor or test mode. The questions can be chosen as per unused, incorrect or flagged. The best test prep tool for critical examinations in fields such as medical, nursing, aviation and many more.</p>
        </div>
      </section>
      
      {/* New Section for Exam Monitor */}
      <section className="exam-monitor">
        <div className="monitor-left">
          <b><h2>Large number of test takers</h2></b>
          <p>Smooth concurrent exams</p>
          <p>An enormous number of candidates are catered smoothly when providing concurrent exams, providing a delightful experience to both test takers and managers. Our online exam system is built for a very large number of simultaneous test sessions.</p>
        </div>
        <div className="monitor-right">
          <img src="/images/img3.png" alt="Exam Monitor" className="monitor-image" />
        </div>
      </section>

      {/* New Section: Trusted by users for over 25 years */}
      <section className="trusted-section">
        <div className="trusted-left">
          <h2>Trusted by users for over 25 years, 15 million Exams, and counting…</h2>
          <p>Gauge’s secure exam and certification platform is for organizations that demand advanced test configuration features, increased security, and a way to organize their certification and badging programs.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-column">
          <h3>TestHub</h3>
          <p>Welcome to our exam platform, providing cutting-edge solutions for online certifications and exams.</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Address: 123 Exam Street, Knowledge City</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: support@examplatform.com</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="mailto:support@examplatform.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
