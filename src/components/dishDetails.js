import React from 'react';
import { Card, CardImg, CardBody, Row, CardText, CardTitle, Container } from 'reactstrap';


function RenderComments({ comments }) {
    if (comments == null) {
        return (
            <div></div>
        )
    }
    const showcomments = comments.map((comment) => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p> -- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </li>
        )
    })

    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {showcomments}
            </ul>

        </div>
    )

}
function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Container className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </Container>
        )
    }
    else {
        return (
            <div>
            </div>
        )
    }
}
const DishDetail = (props) => {
    const dish = props.details;
    if (dish == null) {
        return (
            <div></div>
        )


    }
    return (
        <Container>
            <Row >
                <RenderDish dish={props.details} />
                <RenderComments comments={props.details.comments} />
            </Row>
        </Container>
    );
}

export default DishDetail;