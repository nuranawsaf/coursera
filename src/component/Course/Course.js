import React from 'react';
import './Course.css';
const Course = (props) => {
    // 
    console.log(props);
    const {img, name, time, price, teacher} = props.course;
    return (
        <div className="course">
            <div>
                <img src={props.course.img} alt=""/>
            </div>
            <div>
                <h4 className="course-name">{props.course.name}</h4>
                <p>By: {teacher}</p>
                <br/>
                <p><small>Course Duration: {time} Days</small></p>
                <p>price: ${price}</p>
                <button className="course-btn"
                onClick={() => props.handleAddCourse(props.course)}
                >Enroll Now</button>
                     
            </div>
        </div>
    );
};

export default Course;