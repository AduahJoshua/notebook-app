import './App.css'
import NoteAdd from './components/NoteAdd'
import NoteCards from './components/NoteCards'

function App() {

  return (
    <div className='container'>
      <div className="row">
        <div className='col-md-4'>
          <NoteAdd />
        </div>
        <div className="col-md-8">
          <NoteCards />
        </div>
      </div>

    </div>
  )
}

export default App
