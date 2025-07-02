import Header from "../components/Header/Header";

const ContactPage = () => {
    return (
        <div>
    <Header/>
         <div className="main-container">
            
        <div className="page-container" style={{overflow:"auto"}}>
        
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2><b>General Enquiries</b></h2>
            <hr/>
            <strong>Vivekanand College Main Campus</strong><br/>
             [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
             India
            <p>
                Phone: 
                <b>+91 12345 67890</b>
                <br/>
                Email: 
                <b>info@vivekanandcollege.edu</b>
                <br/>
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
            </p>
            <h2><b>Admissions Office</b></h2>
            <hr/>
            <p>
                 For all admission-related queries regarding undergraduate or postgraduate programs:
                <br/>
                 Phone: +91 98765 43210
                <br/>
                 Email: admissions@vivekanandcollege.edu
            </p>
            <h2>Student Support Services</h2>
            <hr/>
            <p>
                 For current student support, academic advising, or general assistance:
              <br/>
                 Phone:<b> +91 87654 32109 </b>
              <br/>
                 Email:<b>studentsupport@vivekanandcollege.edu</b> 
            </p>
            <h2>Find Us on the Map</h2>
            <hr/>
            <p>
            <a href="https://maps.app.goo.gl/C6zgRYBT3eGXTSdc9">view on google maps</a>
            </p>
            <h2>Send Us a Message</h2>
            <hr/>
            <p>
                [A contact form with fields for Name, Email, Subject, Message can be added here.]
            </p>
        </div>
        </div>
        </div>
    )
}
export default ContactPage;