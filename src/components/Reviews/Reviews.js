import React from 'react';
import './Reviews.css';

const Reviews = () => {
    const utkarshaBansal = 'https://www.easterneye.biz/wp-content/uploads/2020/10/Angad-Hasija-1-e1602832501343.jpeg';
    return (
        <div className='reviews'>
            <h1>CUSTOMER REVIEWS</h1>
            <div className='reviews-customer'>
                <img src={utkarshaBansal} alt="" />
                <div className='customer-name'>
                    <h4>Utkarsha Bansal</h4>
                    <span>Rating
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star"></i>
                    </span>
                </div>
                <p>If u r from BANGLADESH - then u already know.. Its a place to visit for family. Couple. Friends and even alone-great hotels from all categories are available - choose as u like. One thing i noticed last time- the beach got cleaner and more organized.. Tourist police are definitely giving good protection. Enjoy if u visit there.. U wont regret.</p>
            </div>
            <div className='reviews-customer'>
                <img src={utkarshaBansal} alt="" />
                <div className='customer-name'>
                    <h4>Utkarsha Bansal</h4>
                    <span>Rating
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star"></i>
                    </span>
                </div>
                <p>If u r from BANGLADESH - then u already know.. Its a place to visit for family. Couple. Friends and even alone-great hotels from all categories are available - choose as u like. One thing i noticed last time- the beach got cleaner and more organized.. Tourist police are definitely giving good protection. Enjoy if u visit there.. U wont regret.</p>
            </div>
            <div className='reviews-customer'>
                <img src={utkarshaBansal} alt="" />
                <div className='customer-name'>
                    <h4>Utkarsha Bansal</h4>
                    <span>Rating
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star fill"></i>
                        <i className="fas fa-star"></i>
                    </span>
                </div>
                <p>If u r from BANGLADESH - then u already know.. Its a place to visit for family. Couple. Friends and even alone-great hotels from all categories are available - choose as u like. One thing i noticed last time- the beach got cleaner and more organized.. Tourist police are definitely giving good protection. Enjoy if u visit there.. U wont regret.</p>
            </div>
        </div>
    );
};

export default Reviews;