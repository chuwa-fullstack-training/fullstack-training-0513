import React from 'react';

import './LayoutScreen.css';

export const LayoutScreen = () => {
    return (
        <div className='layout'>
            <header> Header </header>
            <nav> Nav </nav>
            <div className='content'> 
                <aside> Aside</aside>
                <section> Section </section>
            </div>
            <footer> Footer </footer>
        </div>
    );
}