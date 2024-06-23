import React from "react";
import './Hw2.css';

const Header = ()=><header>Header</header>
const Nav = ()=><nav>Nav</nav>
const Aside = ()=><aside>Aside</aside>
const Section = ()=><section>Section</section>
const Footer =()=><footer>Footer</footer>

const Hw2 = ()=>{
    return (
        <>
        <div className="container">
            <Header/>      
            <Nav/>
            <div className="content">
                <Aside/>
                <Section/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Hw2;