import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5 & CSS3'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'NODE JS'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'ANGULAR'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'REACT JS'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'TABLEAU / POWERBI / DATA STUDIO'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'DATA ANALYSIS AND MACHINE LEARNING'}
                            width={'60%'}
                            text={'60%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    padding-top: 1.5rem;
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
