/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

function HeroCard({ src = "holder.js/100px180", cardTitle = "Default card title", cardText = "Default card text", }) {
    return (
        <Card style={{ width: '18rem' }} className="hero-card">
            <div className="card-img-container">
                <Card.Img variant="top" src={src}  className="card-img"/>
            </div>
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                    {cardText}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default HeroCard