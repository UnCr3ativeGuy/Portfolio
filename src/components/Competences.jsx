import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from '../hoc';
import {styles} from '../styles';
import {competences} from '../constants';
import {projects} from '../constants';
import {fadeIn, textVariant, staggerContainer} from '../utils/motion';

const Competences = () => {
    return (
        <div className="-mt-[6rem] ">
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadTextLight}`}>Compétences</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
                    {"Grâce à mes études à l'IUT de Paul Sabatier j'ai acquis de nombreuses compétences qui " +
                        "sont utilisées dans mes multiples projets"}
                </motion.p>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                className={`${styles.innerWidth} mx-auto`}>
                <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {competences.map((competence, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
                            className="bg-white rounded-lg shadow-lg overflow-hidden">
                            {/* Colored strip at the top */}
                            <div className={`h-2 ${competence.color}`}></div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className={`${styles.competenceHeadText}`}>{competence.name}</h3>
                                <p className="text-gray-700 mb-4">{competence.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {competence.projets.map((projet, idx) => (
                                        <a href="#projects" key={idx}>
                                            <span
                                                    className="bg-gray-200 text-gray-800 text-sm
                                                      font-medium px-2 py-1 rounded">
                                                    {projects.at(projet).name}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Competences, 'competences');
