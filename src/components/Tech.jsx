import {motion} from 'framer-motion';
import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';
import {tools} from '../constants'
import {styles} from '../styles';
import {textVariant} from '../utils/motion';

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h1 className={styles.sectionHeadTextLight}>Technologies</h1>
                <h2 className={styles.sectionSubText}> Languages </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-10 mt-14 mr-28 ml-28">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon}/>
                    </div>
                ))}
            </div>

            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionSubText}> Frameworks & Outils </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-10 mt-14 mr-28 ml-28">
                {tools.map((tools) => (
                    <div className="w-28 h-28" key={tools.name}>
                        <BallCanvas icon={tools.icon}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, 'techs');
