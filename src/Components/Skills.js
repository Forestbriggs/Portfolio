import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaFlask, FaDocker } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiDocker } from "react-icons/di";
import { SiDocker, SiExpress, SiFlask, SiMongodb, SiPostgresql, SiPostman, SiRedux, SiReduxsaga, SiSequelize, SiTailwindcss, SiVercel } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        Python: <FaPython />,
        Postman: <SiPostman />,
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,
        Figma: <FaFigma />,
        PostgreSQL: <SiPostgresql />,
        Flask: <SiFlask />,
        Tailwind: <SiTailwindcss />,
        Redux: <SiRedux />,
        Docker: <SiDocker />,
        Sequelize: <SiSequelize />,
    }

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    )
}

export default Skills
