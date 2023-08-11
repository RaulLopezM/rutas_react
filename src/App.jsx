import './App.css'
import { Link, Route, Routes, useParams,Outlet } from 'react-router-dom'

const Home = () => <h1>Home</h1>

const SearchPage = () => {
  const tacos = [
    'cochinita', 'chorizo', 'carnitas'
  ]
  return (
    <div>
      <h1>Search</h1>
      <ul>
        {tacos.map(taco => (
          <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))}
      </ul>
    </div>
  )
}
const Tacos = () => {
  const { taco } = useParams()
  return (
    <div>
      <h1>Tacos</h1>
      {taco}
      <Link to='detalles'>ir a los detalles</Link>
      <Outlet/>
    </div>
  )
}
const DetalleTacos = () => {
  const {taco} = useParams()
  return(
    <h1>descripcion de {taco}</h1>
  )
}

function App() {

  return (
    <div>
      Hola
      <ul>
        <li> <Link to='/'>Home</Link></li>
        <li><Link to='/search-page'>Search</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search-page' element={<SearchPage />}></Route>
        <Route path='/tacos/:taco' element={<Tacos />}>
          <Route path='detalles' element={<DetalleTacos />}/>
        </Route>
        
        <Route path='*' element={<h1>NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  )
}
export default App
