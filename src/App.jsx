import './App.css'
import Add from './components/Add'
import List from './components/List'
import ReduxProvider from './ReduxProvider'
function App() {

  return (
    <>
      <ReduxProvider>
        <Add />
        <List />
      </ReduxProvider>

    </>
  )
}

export default App
