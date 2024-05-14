import '../../styles/Header.css'

export const Header = () => {
    return <>
        <header className='header'>
            <div className='header__wrapper'>
                <h1 className='header__title'>
                    <strong>Hi, my name is <em>Tatiana</em></strong>
                    <br />
                    Frontend Разработчик
                </h1>
                <div className='header__text'>
                    <p>with passion for learning and creating.</p>
                </div>
                <a
                    href='#!'
                    className='btn'>
                    Моё резюме
                </a>
            </div>
        </header>
    </>
}