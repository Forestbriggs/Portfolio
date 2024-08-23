import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
    return (
        <>
            <div className='AboutPage'>
                <div className='AboutText'>
                    <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
                    <p>
                        Hi, my name is <b>Forest Briggs</b> and I am from Eugene, Oregon.
                        I'm a <b>Full stack web developer</b> and recent graduate of <b>App Academy</b>. <br /><br />
                        I love to create innovative projects with intuitive designs, you can check out some of my work in the projects section.<br /><br />
                        I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
                        Apart from coding I love Jesus
                        {/* TODO add something here */}
                    </p>
                </div>

                <div>
                    <Tilt>
                        <Lottie
                            className="illustration"
                            animationData={Coder}
                            loop={true}
                        />
                    </Tilt>
                </div>

            </div>

            <h1 className='SkillsHeading'>Professional Skillset</h1>
            <div className='skills'>

                <Skills skill='React' />
                <Skills skill='Redux' />
                <Skills skill='Flask' />
                <Skills skill='Tailwind' />
                <Skills skill='Node' />
                <Skills skill='Express' />
                <Skills skill='Sequelize' />
                <Skills skill='PostgreSQL' />
                <Skills skill='Git' />
                <Skills skill='Github' />
                <Skills skill='Docker' />
                <Skills skill='Javascript' />
                <Skills skill='Python' />
                <Skills skill='Postman' />
                <Skills skill='Figma' />
                <Skills skill='Npm' />

            </div>
        </>
    )
}

export default About