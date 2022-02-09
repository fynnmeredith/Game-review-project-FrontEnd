import '../Sidebar/Sidebar.css'
import Categories from '../Categories/Categories';

const Sidebar = () => {
    return (
        <div className='sideBar'>
            <div className="sideBarHeader">
        <ul>
            <li className='sideBarList'>
                <Categories />
            </li>
        </ul>
            
            </div>
        </div>
    )
}

export default Sidebar;