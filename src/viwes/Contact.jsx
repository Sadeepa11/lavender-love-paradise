import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../components/Footer";

const ContactPage = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
      background: "#f9f9ff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      gap: "40px",
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: "1100px",
      gap: "30px",
    },
    card: {
      background: "#fff",
      color: "#4C1D95",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      padding: "40px",
      width: "100%",
      textAlign: "center",
    },
    header: {
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "20px",
    },
    description: {
      fontSize: "18px",
      marginBottom: "30px",
      lineHeight: "1.6",
      color: "#555",
    },
    contactList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "20px",
      marginBottom: "30px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: "18px",
      gap: "15px",
      color: "#4C1D95",
    },
    icon: {
      background: "#8B5CF6",
      color: "#fff",
      borderRadius: "50%",
      padding: "12px",
      fontSize: "18px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "42px",
      height: "42px",
    },
    button: {
      background: "#8B5CF6",
      color: "#fff",
      padding: "12px 30px",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "background 0.3s ease-in-out",
      textDecoration: "none",
      display: "inline-block",
    },
    mapContainer: {
      width: "100%",
      height: "350px",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
    },
    responsiveLayout: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    // Media Query style with JS (for screen > 768px)
    responsiveRow: window.innerWidth > 768 ? {
      flexDirection: "row",
      justifyContent: "space-between",
    } : {}
  };

  return (
    <>
      <div style={styles.container}>
        <div style={{ ...styles.contentWrapper, ...styles.responsiveLayout, ...styles.responsiveRow }}>
          <div style={styles.card}>
            <h1 style={styles.header}>Contact Us</h1>
            <p style={styles.description}>
              Have questions or want to place an order? Reach out to us, and we’ll get back to you as soon as possible!
            </p>
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <div style={styles.icon}>
                  <i className="fas fa-phone" />
                </div>
                +94 7X XXX XXXX
              </div>
              <div style={styles.contactItem}>
                <div style={styles.icon}>
                  <i className="fas fa-envelope" />
                </div>
               owner@email.com
              </div>
              <div style={styles.contactItem}>
                <div style={styles.icon}>
                  <i className="fas fa-map-marker-alt" />
                </div>
                No:4/3,Temple Road, Homagama
              </div>
            </div>
            <a
              href="mailto:rajapakshathisarani38@gmail.com"
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.background = "#6D28D9")}
              onMouseLeave={(e) => (e.target.style.background = "#8B5CF6")}
            >
              Send an Email
            </a>
          </div>

          {/* Map Section */}
          <div style={styles.mapContainer}>
            <iframe
              style={styles.iframe}
              title="Flower Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2041015208174!2d80.0234316756812!3d6.866128319085499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253c944660f29%3A0xc047ed121c25b07c!2sTemple%20Rd!5e0!3m2!1sen!2slk!4v1754045953245!5m2!1sen!2slk"
              loading="lazy"
              allowFullScreen
            />

       
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
