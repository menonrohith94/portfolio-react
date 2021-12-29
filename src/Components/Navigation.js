import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import rohithmenon from '../images/rohithmenon.jpg'

function Navigation() {
    return (
        <NavigationStyles>
            <div className='profile'>
                <img src={rohithmenon} alt='Profile'></img>
            </div>
            <ul className='nav-items'>
                <li className='nav-items'>
                    <NavLink activeclassname="active-class" to="/home" >Home</NavLink>
                </li>

                <li className='nav-items'>
                    <NavLink activeclassname="active-class" to="/about" >About</NavLink>
                </li>
                <li className='nav-items'>
                    <NavLink activeclassname="active-class" to="/resume">Resume</NavLink>
                </li>
                <li className='nav-items'>
                    <NavLink activeclassname="active-class" to="/portfolio">Portfolios</NavLink>
                </li>
                <li className='nav-items'>
                    <NavLink activeclassname="active-class" to="/certifications">Certifications</NavLink>
                </li>
                <li className='nav-items'>
                    <NavLink activeclassname="active-class" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <footer className='footer'>
                <p>@2022 Rohith's portfolio website</p>
            </footer>
        </NavigationStyles>
    )
}

const NavigationStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .profile{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        img{
            width: 85%;
            height: 85%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;

        li{
            display: block;
            a{
                display: block;
            }
        }
    }
`;

export default Navigation
