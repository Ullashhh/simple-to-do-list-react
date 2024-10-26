import './App.css'
import AddTask from './components/AddTask/AddTask'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='border border-violet-500 mt-10 w-5/12 rounded mx-auto pb-5'>
      <Header></Header>
      <AddTask></AddTask>
    </div>
  )
}

export default App
