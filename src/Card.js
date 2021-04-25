import Card from 'react-bootstrap';

function CardInfo(props) {
    let img = props.image
    let name = props.name
    let url = props.url
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{url}</Card.Text>
        </Card.Body>
    </Card>
    );
}