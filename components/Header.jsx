import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'


const Header = () => {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center'>
                
                <SocialIcon
                    url='https://github.com/divyab979'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.linkedin.com/in/diviya-bhatia-88027920b/'
                    fgColor='gray'
                    bgColor='transparent'
                />

            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                url="mailto:divyab979@gmail.com"
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
            </motion.div>
        </header>
    )
}

export default Header