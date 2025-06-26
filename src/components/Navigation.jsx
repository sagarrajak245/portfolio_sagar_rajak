import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'timeline', label: 'Timeline' },
        { id: 'resume', label: 'Resume' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto">
                <div className="glass-card backdrop-blur-md bg-glass-white border border-white/20 rounded-2xl px-6 py-3">
                    <div className="flex items-center justify-evenly">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl font-bold text-cyan-400 bg-clip-text  font-cyber"
                        >
                            SR
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${activeSection === item.id
                                        ? 'text-cyber-blue'
                                        : 'text-gray-300 hover:text-white'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-purple-800/40 rounded-lg text-white"
                                            initial={false}
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-white"
                            whileTap={{ scale: 0.95 }}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 pt-4 border-t border-white/20"
                        >
                            <div className="flex flex-col space-y-2">
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-left px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${activeSection === item.id
                                            ? 'text-cyber-blue bg-cyber-blue/20'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            }`}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
