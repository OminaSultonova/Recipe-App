import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import RecipeCard from './components/RecipeCard';
import RecipePage from './components/RecipePage';
import SearchBar from './components/SearchBar';
import recipesData from './recipes.json';
import Footer from './components/Footer';

const App = () => {
  const [searchResults, setSearchResults] = useState(recipesData); 

  const handleSearch = (searchTerm) => {
    const results = recipesData.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Router>
      <Container>
        <h1>Yummy Recipes</h1>
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route exact path="/" element={<RecipeCard recipes={searchResults} />} /> 
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
