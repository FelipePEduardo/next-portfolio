import { FaInstagram, FaGithub, FaLinkedin, FaRocket } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className='py-5'>
      <ul className="flex items-center justify-center gap-16">
        <li>
          <a 
            href="https://www.instagram.com/feh_eduardoo/" target="_blank"
            className="text-gray-400 hover:text-gray-100 transition-colors flex items-center gap-1"
          >
            <span className='hidden md:inline'>
              instagram
            </span>
            <FaInstagram className=''/>
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/FelipePEduardo/" target="_blank"
            className="text-gray-400 hover:text-gray-100 transition-colors flex items-center gap-1"
          >
            <span className='hidden md:inline'>
              github
            </span>
            <FaGithub /* className='hidden' *//>
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/felipepereiraeduardo/" 
          target="_blank"
          className="text-gray-400 hover:text-gray-100 transition-colors flex items-center gap-1"
          >
            <span className='hidden md:inline'>
              linkedin
            </span>
            <FaLinkedin /* className='hidden' *//>
          </a>
        </li>
        <li>
          <a 
            href="https://app.rocketseat.com.br/me/felipe-pereira-eduardo-00732" 
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1"
          >
            <span className='hidden md:inline'>
              rocketseat
            </span>
            <FaRocket /* className='hidden' *//>
          </a>
        </li>
      </ul>
    </footer>
  )
}