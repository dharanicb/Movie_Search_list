import {BrowserRouter, Route,Routes} from 'react-router-dom'
import AddTodoList from './Components/AddTodoList'
import Header from './Components/Header'
import Home from './Components/Home'
import ProfileDetils from './Components/ProfileDetils'
import UserDatails from './Components/UserDatails'
import ApiResponse from './Components/ApiResponse'

const App = () => (
   
    <BrowserRouter>
    <div className='bg-image'>
    <Header/>
    <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/create" element={<AddTodoList />} />
        <Route path = "/profile" element={<ProfileDetils/>} />
        <Route path = "/user" element={<UserDatails/>} />
        <Route path = "/movie" element={<ApiResponse/>} />
    </Routes>
    </div>
    </BrowserRouter>
   
)


export default App