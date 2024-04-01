import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import recipesData from '../recipes.json';
import '../index.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipesData.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const { title, image, description, ingredients, instructions } = recipe;

  return (
    <Container>
      <Row>
        <Col>
          <div className="recipe-details">
            <div className="image-container">
              <img src={image} alt={title} />
            </div>
            <div className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-section">
                <h5>Ingredients</h5>
                <ul className="ingredients-list">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="recipe-section">
                <h5>Instructions</h5>
                <ol>
                  {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetails;
