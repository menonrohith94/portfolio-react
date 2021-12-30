import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Experience and Education'} span={'Experience and Education'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - 2021'} 
                        title={'Consultant -  Product Engineer'}
                        subTitle={'Intellect Design Arena'}
                        text={'Technologies: Angular 10, GraphQL, JavaScript, Apollo Client, Clarity Design, AWS, Git, HTML5, SCSS, Bitbucket, Typescript, jQuery'} 
                    />
                    <ResumeItem 
                        year={'2018 - 2020'} 
                        title={'Associate Developer'}
                        subTitle={'BTS GroupAB'}
                        text={'Technologies: Angular 8, PowerBI, JavaScript, HTML5, CSS, jQuery, GIT, SVN, Bootstrap, Nodejs, Python, Typescript, AWS, Highcharts'} 
                    />
                    <ResumeItem 
                        year={'2016 - 2017'} 
                        title={'Consultant'}
                        subTitle={'Ericsson Global Services (ManpowerGroup)'}
                        text={'Technologies: Linux, Telecommunication.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2021 - 2022'} 
                        title={'MSc in Computing (Data Analytics)'}
                        subTitle={'DCU University'}
                        text={'Modules: Machine Learning, Data Visualization, Cloud Computing, Statistical Data Analysis, Artificial Intelligence'} 
                    />
                    <ResumeItem 
                        year={'2016 - 2017'} 
                        title={'Post Graduate Diploma in Advanced Computing'}
                        subTitle={'CDAC: Centre for Development of Advanced Computing'}
                        text={'Modules: Web Development, JAVA, Linux, C++, Databases'} 
                    />
                    <ResumeItem 
                        year={'2012 - 2016'} 
                        title={'Bachelor of Engineering'}
                        subTitle={'University of Mumbai'}
                        text={'Specialization: Electronics and Telecommunication'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
