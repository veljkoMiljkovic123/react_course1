import './Navbar.css';
function Navbar(){

    let navbarItems  = ['Home','About','Contact','Blog','Support']

    return <nav className='navbar'>
        <h1 className='navbarLogo'>FirstAPP</h1>
        <ul className='navbarList'> 
            {navbarItems.map((el,index)=>{
                return <li key={index}>{el}</li>
            })}
        </ul>
    </nav>
}


export default Navbar;