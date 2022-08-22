import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import useFetchApi from '../hooks/useFetchApi';
import useFilterPlanets from '../hooks/useFilterPlanets';
import useSortPlanets from '../hooks/useSortPlanets';
import StarWarsContext from '../context/StarWarsContext';
import PlanetsTable from './Table';
import TextInput from './TextInput';
import NumbersInputs from './NumbersInputs';
import AppliedFilters from './AppliedFilters';
import SortInputs from './SortInputs';
import Header from './Header';
import '../App.css';

function StarWarsData() {
  const { loading, error } = useContext(StarWarsContext);
  const [showFilters, setShowFilter] = useState(false);
  useFetchApi();
  const planetsFiltered = useFilterPlanets();
  const planetsResult = useSortPlanets(planetsFiltered);

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }
  return (
    <Container fluid className="gx-0">
      <Header />
      <h1 id="StarWarsDataTable">Star Wars Planets DataTable</h1>
      <TextInput />
      <Container className="text-center">
        <Button
          variant="outline-dark"
          className="m-3 w-50 mx-auto"
          type="button"
          onClick={ () => setShowFilter(!showFilters) }
        >
          { showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros' }
        </Button>
        {showFilters ? (
          <Row className="w-75 mx-auto">
            <Col>
              <NumbersInputs />
            </Col>
            <Col>
              <SortInputs />
            </Col>
          </Row>) : null }
        <Row>
          <AppliedFilters />
        </Row>
      </Container>
      {loading ? (
        <Container className="text-center align-middle p-5">
          <Spinner animation="grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <PlanetsTable planets={ planetsResult } />
      )}
    </Container>
  );
}

export default StarWarsData;
