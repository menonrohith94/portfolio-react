import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particles';
import { Twitter, GitHub, LinkedIn } from '@material-ui/icons';

function HomePage() {
    return (
        <HomePageStyled>
            <div className='particle-canvas'>
                <Particle />
            </div>
            <div className="Typography">
                <h1>Hi I'm <span>Rohith Menon</span></h1>
                <p>A self-motivated and hardworking individual, currently pursuing MSc. in Computing (Data Analytics),with 4 years of experience in web development. Interested to learn new technologies and implementcreative techniques to make the issues that businesses face more manageable. Currently seekinga position to utilize analytical and customer relation skills while keeping the team on board in aproductive and goal-oriented atmosphere.</p>
                <div className="icons">
                    <a href="https://twitter.com/RohithM1994" target="_blank" className="icon i-twitter"><Twitter /></a>
                    <a href="https://github.com/menonrohith94" target="_blank" className="icon i-github"><GitHub /></a>
                    <a href="https://www.linkedin.com/in/rohith-menon-637358102/" target="_blank" className="icon i-linkedin"><LinkedIn /></a>
                </div>
            </div>

        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .particle-canvas{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        canvas{
            position: relative !important;
        }
    }
    .Typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 0.5rem;
            .icon{
                display: flex;
                padding: 0.5rem;
                border-radius: 50%;
                border: 2px solid var(--border-color);
                transition: all 0.4s ease-in-out;
                cursor: pointer;
                &:not(:last-child){
                    margin-right: 1rem;
                }
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default HomePage
