/* eslint-disable react/prop-types */
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({
    end,
    duration = 2,
    suffix = '',
    prefix = '',
    className = '',
}) => {
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <div ref={ref} className={className}>
            {inView && (
                <CountUp
                    start={0}
                    end={end}
                    duration={duration}
                    suffix={suffix}
                    prefix={prefix}
                />
            )}
        </div>
    );
};

export default AnimatedCounter;
