import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import NoteCards from './components/NoteCards'
import AddNote from './components/AddNote'
import SearchBar from './components/SearchBar'


function App() {


  return (
    <Container fluid>
      <Row style={{minHeight: "100vh"}} className="gap-5">
        <Col lg={2} className='text-center sidebar'>
          <AddNote/>
        </Col>
        <Col lg={9} className='note_card_container'>
          <SearchBar/>
          <NoteCards />
        </Col>
      </Row>
    </Container>
  )
}

export default App
