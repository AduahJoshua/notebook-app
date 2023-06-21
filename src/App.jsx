import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import NoteCards from './components/NoteCards'
import AddNote from './components/AddNote'
import SearchBar from './components/SearchBar'


function App() {


  return (
    <Container fluid>
      <Row style={{minHeight: "100vh"}}>
        <Col lg={1} className='text-center border'>
          <AddNote/>
        </Col>
        <Col lg={11} className='note_card_container'>
          <SearchBar/>
          <NoteCards />
        </Col>
      </Row>
    </Container>
  )
}

export default App
