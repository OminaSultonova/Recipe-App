// SearchBar.js
import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Container className="mt-4 mb-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit} className="d-flex">
            <FormControl
              type="text"
              placeholder="Search for recipes..."
              value={searchTerm}
              onChange={handleChange}
              style={{ marginRight: '10px' }}
            />
            <Button type="submit" variant="warning">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // 'onSearch' prop is a required function
};

export default SearchBar;
