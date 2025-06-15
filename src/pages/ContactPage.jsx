import Header from "../components/Header/Header";

const ContactPage= () =>{
    return(
        <>
        <Header/>
        <h1 text-align="center">Contact Us</h1>
        <section>
            <p>
            We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
            </p>
       </section>
       
        <h2>General Enquries</h2>
        <section>
        <p>
            <b>Vivekanand College Main Campus</b>
            [Mahatma Gandhi Road,Chembur,Mumbai,Maharashtra 400071]<br/>
            India.<br/>
            Phone:<b>+91 12345 67890</b><br/>
            Email:<b>info@Vivekanandcollege.edu</b><br/>
            <p>
                Office Hours:Monday-Friday,9:00-5:00 PM IST

            </p>
        </p>
       </section>
      
        <h2>Admissions Office</h2>
         <section>
        <p>
            For all admission-related queries regarding undergraduate or postgraduate programs:<br/>
            Phone: +91 98765 43210<br/>
            Email: admissions@vivekanandcollege.edu<br/>

        </p>

       </section>
       <h2>Student Support Services</h2>
       <section>
        <p>
            For current student support, academic advising, or general assistance:<br/>
          Phone: +91 87654 32109<br/>
          Email: studentsupport@vivekanandcollege.edu

        </p>
       </section>
       <h2>Find Us on The Map</h2>
       <section>
         <a href="https://maps.google.com/?q=Vivekanand+College">View on Google Maps</a>"

       </section>
      
       
       <h2>Send Us a Message</h2>
       <section>
        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>

       </section>
       


        </>
    )
}
export default ContactPage; 