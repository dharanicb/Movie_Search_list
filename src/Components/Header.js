import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <ul className='flex flex justify-around'>
            <li className='m-[10px] nav-bar'><Link to = "/">Home</Link></li>
            <li className='m-[10px] nav-bar'><Link to = "/create">Create Todo</Link></li>
            <li className='m-[10px] nav-bar'><Link to = "/profile">Create Profile</Link></li>
            <li className='m-[10px] nav-bar'><Link to = "/user">User Datails</Link></li>
            <li className='m-[10px] nav-bar'><Link to = "/movie">Movie Datails</Link></li>
        </ul>
    </nav>
  )
}

export default Header