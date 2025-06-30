import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import React from "react";

const CoursesPage = () => {
  return(
    <div>
        <Header/>
        <div className="page-container" style={{overflow:"auto"}}>

            <h1>Our Academic Programs</h1>
                <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
                </p>
            <h2>Discover Campus Life</h2>
            <hr/>
            <div className="video-container">
             <video width="100%" height="auto" course-video>
            <source src="\videos\college-tour.mp4" type="video/mp4"/>
            </video>
            <p className="video-caption">Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
            </div>
         <h3>Undergraduate Programs (UG)</h3>
    <ul className="courses-ul">
        <li>Bachelor of Science (B.Sc.)</li>
    <ul type="disc">
        <li>Computer Science (3 years)</li>
        <li>Information Technology (3 years)</li>
        <li>Biotechnology (3 years)</li>
    </ul>
    </ul>
    <ul>
        <li>Bachelor of Commerce (B.Com)</li>
         <ul type="disc">
        <li>Accounting & Finance (3 years)</li>
        <li>Accounting & Finance (3 years)</li>
        </ul>
    </ul>
    <ul>
        <li>Bachelor of Arts (B.A.)</li>
        <ul type="disc">
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)</li>
        </ul>
    </ul>
    <h3>Postgraduate Programs (PG)</h3>
    <ul>
        <li>**Master of Science (M.Sc.)**</li>
    <ul type="disc">
        <li>Computer Science (2 years)</li>
        <li>Information Technology (2 years)</li>
    </ul>
    </ul>
    <h2>Program Details & Fee Structure (Annual)</h2>
    <table className="admission-table course-details-table">
        <thead>
        <tr>
            <th>Program Type</th>
            <th>Course Name	</th>
            <th>Duration</th>
            <th>Anuual Fee(INR)</th>
            <th>Eligibility</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>UG</td>
            <td>B.Sc. Computer Science</td>
            <td>3 Years</td>
            <td>₹ 85,000</td>
            <td>10+2 with PCM (50%)</td>
        </tr>
        <tr>
            <td>UG</td>
            <td>B.Com. Accounting & Finance</td>
            <td>3 Years</td>
            <td>₹ 70,000</td>
            <td>10+2 Commerce (45%)</td>
        </tr>
        <tr>
            <td>PG</td>
            <td>M.Sc. Information Technology</td>
            <td>2 Years</td>
            <td>₹ 95,000</td>
            <td>B.Sc. IT/CS (50%)</td>
        </tr>
        </tbody>
    </table>
    <h3>Specialized & Vocational Courses</h3>
    <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
            <div className="call-to-action">
                <p>Have questions about specific course?</p>
                <Link to="/contact" className="btn">Inquire About Courses</Link>
            </div>
            </div>
            </div>
  )
}
export default CoursesPage;