import {GenerateLinks} from './LinksDB'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    
    const Links = GenerateLinks()
    
    return(
        <>
            <nav style={{padding:'1rem 1rem 1rem 1rem'}}>
                {
                    Links.map(link => {
                        return (
                            <NavLink 
                            end
                            activeStyle = {{
                                color:'orange',
                                fontSize:'2rem',
                                fontWeight:'bold'
                            }}
                            style={{ textDecoration:'none' ,marginLeft:'0.3rem'}}
                            to={link.path}> { link.pageName } </NavLink>
                        )
                    })
                }
            </nav>
            <div style={{padding:'0rem 0rem 0.3rem 0rem' , backgroundColor:'black' , margin:'0rem 1rem'}}></div>
        </>
    )
}