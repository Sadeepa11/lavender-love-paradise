import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../components/Footer";

const ContactPage = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
      background: "white",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
    },
    card: {
      background: "#fff",
      color: "#4C1D95",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      padding: "30px",
      maxWidth: "600px",
      width: "100%",
      textAlign: "center",
      marginBottom: "20px",
    },
    header: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    description: {
      fontSize: "18px",
      marginBottom: "30px",
      lineHeight: "1.6",
    },
    contactList: {
      listStyleType: "none",
      padding: 0,
      marginBottom: "20px",
    },
    contactItem: {
      marginBottom: "15px",
      fontSize: "18px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      justifyContent: "center",
    },
    icon: {
      background: "#8B5CF6",
      color: "#fff",
      borderRadius: "50%",
      padding: "10px",
      fontSize: "20px",
    },
    button: {
      background: "#8B5CF6",
      color: "#fff",
      padding: "12px 24px",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      background: "#6D28D9",
    },
    link: {
      textDecoration: "none",
      color: "#fff",
    },
    mapContainer: {
      width: "100%",
      maxWidth: "600px",
      height: "300px",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
    iframe: {
      border: 0,
      width: "100%",
      height: "100%",
    },
  };

  return (

    <>
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.header}>Contact Us</h1>
        <p style={styles.description}>
          Have questions or want to place an order? Reach out to us, and we will
          get back to you as soon as possible!
        </p>
        <ul style={styles.contactList}>
          <li style={styles.contactItem}>
            <div style={styles.icon}>
              <i className="fas fa-phone"></i>
            </div>
            +94 75 113 5153
          </li>
          <li style={styles.contactItem}>
            <div style={styles.icon}>
              <i className="fas fa-envelope"></i>
            </div>
            rajapakshathisarani38@gmail.com
          </li>
          <li style={styles.contactItem}>
            <div style={styles.icon}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            No:2/1,Kalapura,Shanthipura,Nuwaraeliya
          </li>
        </ul>
        <button
          style={styles.button}
          onMouseEnter={(e) =>
            (e.target.style.background = styles.buttonHover.background)
          }
          onMouseLeave={(e) =>
            (e.target.style.background = styles.button.background)
          }
        >
          <a href="mailto:rajapakshathisarani38@gmail.com" style={styles.link}>
            Send an Email
          </a>
        </button>
      </div>
      {/* Map Section */}
      <div style={styles.mapContainer}>
        {/* <iframe
          style={styles.iframe}
          title="Flower Shop Location"
          src="https://maps.app.goo.gl/obBu9j1bUrsgsuaq5"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}

        <iframe

         style={styles.iframe}
          title="Flower Shop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.253059148857!2d80.7513069!3d6.9794383999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae381c2dd1a2c4d%3A0x308c3228d6282400!2sShanthipura%20Church!5e0!3m2!1sen!2slk!4v1737472664203!5m2!1sen!2slk"
          loading="lazy"
        ></iframe>
      </div>

      
    </div>
    

<Footer/>

</>
  );
};

export default ContactPage;
