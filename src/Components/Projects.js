import React from 'react';
import ProjectBox from './ProjectBox';
import GLGImage from '../images/GLGImage.png';
import ApplySageImage from '../images/ApplySageImage.png';
import Q_UnderstackImage from '../images/Q_UnderstackImage.png';

const Projects = () => {
    return (
        <div>
            <h1 className='projectHeading'>My <b>Projects</b></h1>
            <div className='project'>
                <ProjectBox projectPhoto={ApplySageImage} projectName="ApplySage" />
                <ProjectBox projectPhoto={Q_UnderstackImage} projectName="Q-Understack" />
                <ProjectBox projectPhoto={GLGImage} projectName="Grand Line Gatherings" />
            </div>

        </div>
    )
}

export default Projects