import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from '../hoc';
import {styles} from '../styles';
import {github} from '../assets';
import {projects} from '../constants';
import {competences} from '../constants';
import {whiteabstract} from '../assets/index.js';
import {fadeIn, textVariant, staggerContainer} from '../utils/motion';

const ProjectCard = ({
                         id,
                         name,
                         description,
                         tags,
                         image,
                         link,
                         index,
                         active,
                         handleClick,
                     }) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={`relative ${
                active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
            } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
            onClick={() => handleClick(id)}>
            <div
                className="absolute top-0 left-0 z-10 bg-jetLight
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

            <img
                src={whiteabstract}
                alt={name}
                className="absolute w-full h-full object-cover rounded-[24px] z-5"
            />

            {active !== id ? (
                <div className="flex items-center justify-start pr-[4.5rem]">
                    <h3
                        className="font-extrabold font-beckman uppercase w-[200px] h-[30px]
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
                        {name}
                    </h3>
                </div>
            ) : (
                <>
                    <div className="absolute top-0 bottom-0 mt-10 z-20">
                        {image && (
                            <img
                                src={image}
                                alt={name}
                                className="ml-2 w-32 h-32 rounded-[24px] z-20 mb-4"
                            />
                        )}
                    </div>
                    <div className="absolute top-1 right-2 z-20">
                        {competences.map((competence) => (
                            competence.projets.includes(id) && (
                                <span key={competence.name}
                                      className="inline-block bg-gray-200 text-gray-800
                                    text-xs px-0 py-0 rounded mx-1">
                                <div className={`h-2 ${competence.color}`}></div>
                                    <span className="text-xs px-2 py-1">
                                        {competence.name}
                                    </span>
                                </span>
                            )
                        ))}
                    </div>
                    <div className="absolute bottom-0 p-8 justify-start w-full
          flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
                        {link && (
                            <div className="absolute inset-0 flex justify-end m-3">
                                <div onClick={() => window.open(link, '_blank')}
                                     className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full
                          flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]">
                                    <img
                                        src={github}
                                        alt="source code"
                                        className="w-4/5 h-4/5 object-contain"
                                    />
                                </div>
                            </div>
                        )}
                        <h2
                            className="font-bold sm:text-[32px] text-[24px]
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
                            {name}
                        </h2>
                        <p
                            className="text-silver sm:text-[14px] text-[12px]
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {tags.map((tag) => (
                                <span key={tag.name}
                                      className="inline-block bg-gray-200 text-gray-800
                                    text-xs px-2 py-1 rounded">
                                {tag.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </motion.div>
    );
};

const Projects = () => {
    const [active, setActive] = useState('projet1');

    return (
        <div className="-mt-[6rem]">
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadTextLight}`}>Projets</h2>
            </motion.div>

            <div className="w-full flex">
            <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
                    Ces projets démontrent mon expérience et mes connaissance
                    dans de nombreuses compétences et technologies.
                </motion.p>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            index={index}
                            {...project}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Projects, 'projects');
