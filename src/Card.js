import Card from 'react-bootstrap';

function CardInfo(props) {
 return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>prop.title</Card.Title>
            <Card.Text>prop.text</Card.Text>
        </Card.Body>
    </Card>
 );
}