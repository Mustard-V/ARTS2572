import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
// import { Link, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";

const FpCard = (props) => {
    const { title, imagePath, className } = props;
    let history = useHistory();
    return (
        <Card
            className={className}
            onClick={() => {
                history.push(`/recipe/${title}`);
            }}
        >
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </CardText>
                <CardText>
                    <small className="text-muted">
                        Last updated 3 mins ago
                    </small>
                </CardText>
            </CardBody>
            <CardImg
                bottom
                width="100%"
                src={process.env.PUBLIC_URL + "/image/" + imagePath}
                alt="Card image cap"
            />
        </Card>
    );
};

export default FpCard;
