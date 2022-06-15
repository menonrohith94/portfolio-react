import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import certifications from '../data/certifications';
import {MainLayout, InnerLayout} from '../styles/Layouts';

function CertificationsPage() {
    return (
        <MainLayout>
            <CertificationStyled>
            <Title title={'Certifications'} span={'Certifications'} />
                <InnerLayout className={'cert'}>
                    {
                        certifications.map((cert)=>{
                            return <div key={cert.id} className={'cert-item'}>
                                <div className="image">
                                    <img src={cert.image} alt=""/>
                                </div>
                                <div className="title">
                                    <a href={cert.link} target="_blank" rel="noreferrer">
                                        {cert.title}
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </InnerLayout>
            </CertificationStyled>
        </MainLayout>
    )
}

const CertificationStyled = styled.div`
    .cert{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
        .cert-item{
            background-color: var(--background-dark-grey);
            padding: 1rem 1rem;
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }

        .title{
            a{
                font-size: 1.8rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default CertificationsPage

