// RecipeList.js
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import '../index.css';

const RecipeList = ({ recipes }) => (
  <Row>
    {recipes.map(recipe => (
      <Col key={recipe.id} md={3}>
        <Card>
          <Card.Img variant="top" src={recipe.image} />
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>{recipe.description}</Card.Text>
            <Link to={`/recipe/${recipe.id}`}>
              <Button variant="warning" className="rounded-0">View Recipe</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    ).isRequired
  };

export default RecipeList;
