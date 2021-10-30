import React from 'react';
import './Reviews.css';
import { Row, Col, Card } from 'react-bootstrap';

const Reviews = () => {
    const utkarshaBansal = 'https://www.easterneye.biz/wp-content/uploads/2020/10/Angad-Hasija-1-e1602832501343.jpeg';
    const kanikaSharma = 'https://media.istockphoto.com/photos/happy-young-female-tourist-exploring-and-spending-time-in-new-city-picture-id1265471159';
    const ajayAgarwal = 'https://www.publicdomainpictures.net/pictures/230000/velka/male-tourist-taking-selfie-1503402700SYg.jpg';
    return (
        <div className='reviews'>
            <h1>CUSTOMER REVIEWS</h1>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className='img-card'>
                        <Card.Img className='img' variant="top" src={utkarshaBansal} />
                        <h4>Utkarsha Bansal</h4>
                        <span>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                        </span>
                        <p>If u r from BANGLADESH - then u already know.. Its a place to visit for family. Couple. Friends and even alone-great hotels from all categories are available - choose as u like. One thing i noticed last time- the beach got cleaner and more organized.. Tourist police are definitely giving good protection. Enjoy if u visit there.. U wont regret.</p>
                    </Card>
                </Col>
                <Col>
                    <Card className='img-card'>
                        <Card.Img className='img' variant="top" src={kanikaSharma} />
                        <h4>Kanika Sharma</h4>
                        <span>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star"></i>
                        </span>
                        <p>After this corona pandemic Goa is best destination for all tourist and family. You can spent quality time with your partner. Best atmosphere, good and pleasent climate is the main power of this place. Govion culture and sea beaches attracts every one to have a funny day at goa. If you wants to spent very specific time with your partner go to small vagator or...</p>
                    </Card>
                </Col>
                <Col>
                    <Card className='img-card'>
                        <Card.Img className='img' variant="top" src={ajayAgarwal} />
                        <h4>Ajay Agarwal</h4>
                        <span>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                            <i className="fas fa-star fill"></i>
                        </span>
                        <p>I find London Power’s customer service amazing. through the years I have always switched to a different provider looking for the best deal, this time I want to stay only because the care and best customer service in the energy market. I spoke to few people and they are all polite patient and above all super knowledgeable. So, I hope this is your best choich</p>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default Reviews;