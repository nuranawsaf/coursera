import React, { useState } from 'react';
import fakeData from '../../fakeData/fakedata';
import './Home.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import DetailsCart from '../DetailsCart/DetailsCart'


const Home = () => {
    const first15 = fakeData.slice(0,15);
    const [courses, setCourses] = useState(first15);
    const [cart,setCart] = useState([]);

    const handleAddCourse = (course) =>{
        
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="home-container">
            <div className="course-container">
                <ul>
                    {
                        courses.map(courses => <Course 
                            handleAddCourse = {handleAddCourse}
                            course={courses}
                            ></Course>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <DetailsCart></DetailsCart>
            </div>
        
        </div>
    );
};

export default Home;