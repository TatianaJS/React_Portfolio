export const Contacts = () => {
    return <>
        <main className='section'>
            <div className='container'>
                <h1 className='title-1'>Контакты</h1>
                <ul className='content-list'>
                    <li className='content-list__item'>
                        <h2 className='title-2'>Местоположение</h2>
                        <p>г. Ижевск, УР, Россия</p>
                    </li>
                    {/*<li className='content-list__item'>
                        <h2 className='title-2'>Telegram / WhatsApp</h2>
                        <p><a href='tel:+79051234567'>+7 (905) 123-45-67</a></p>
                    </li>
                    <li className='content-list__item'>
                        <h2 className='title-2'>E-mail</h2>
                        <p><a href='mailto:webdev@protonmail.com'>webdev@protonmail.com</a></p>
                    </li>*/}
                </ul>
            </div>
        </main>
    </>
}