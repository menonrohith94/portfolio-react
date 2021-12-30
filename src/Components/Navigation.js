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
                    <NavLink exact activeClassName="active-class" to="/portfolio-react" >Home</NavLink>
                </li>
                <li className='nav-items'>
                    <NavLink exact activeClassName="active-class" to="/about" >About</NavLink>
                </li>
                <li className='nav-items'>
                    <NavLink exact activeClassName="active-class" to="/resume">Resume</NavLink>
                </li>
                <li className='nav-items'>
                    <NavLink exact activeClassName="active-class" to="/portfolio">Portfolios</NavLink>
                </li>
                <li className='nav-items'>
                    <NavLink exact activeClassName="active-class" to="/certifications">Certifications</NavLink>
                </li>
                <li className='nav-items'>
                    <NavLink exact activeClassName="active-class" to="/contact">Contact</NavLink>
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
            width: 70%;
            height: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        .active-class{
            background-color: var(--primary-color);
        }
        li{
            display: block;
            a{
                display: block;
                padding: 0.4rem 0;
                position: relative;
                font-size: 1rem;
                font-weight: 600;
                &:hover{
                    &::before{
                        width: 100%;
                        height: 100%;
                        color: white;
                    }
                }
                &::before{
                    content: "";
                    position: absolute;
                    color: white;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: all 0.4s cubic-bezier(1,-0.04,.56,1.01);
                    opacity: 0.2;

                }
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1rem 0;
            font-size: 1rem;
            text-align: center;
        }
    }
`;

export default Navigation
