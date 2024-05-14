import '../../styles/Footer.css'
/*import vk from '../../img/icons/vk.svg'
import instagram from '../../img/icons/instagram.svg'
import twitter from '../../img/icons/twitter.svg'
import linkedIn from '../../img/icons/linkedIn.svg'*/
import gitHub from '../../img/icons/gitHub.svg'

export const Footer = () => {
    return <>
        <footer className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <ul className='social'>
                        {/*<li className='social__item'>
                            <a href='#!'>
                                <img
                                    src={vk}
                                    alt='VK' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href='#!'>
                                <img
                                    src={instagram}
                                    alt='Instagram' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href='#!'>
                                <img
                                    src={twitter}
                                    alt='Twitter' />
                            </a>
                        </li>*/}
                        <li className='social__item'>
                            <a
                                href='https://github.com/TatianaJS'
                                target='_blank'
                                rel='noreferrer'>
                                <img
                                    src={gitHub}
                                    alt='GitHub' />
                            </a>
                        </li>
                        {/*<li className='social__item'>
                            <a href='#!'>
                                <img
                                    src={linkedIn}
                                    alt='LinkedIn' />
                            </a>
                        </li>*/}
                    </ul>
                    <div className='copyright'>
                        <p>© {new Date().getFullYear()} My portfolio</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
}