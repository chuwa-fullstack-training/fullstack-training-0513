import React from "react";
import "../css/hw2.css"

class Hw2 extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <header>Header</header>
                <nav>Nav</nav>
                <main>
                    <aside>Aside</aside>
                    <section>Section</section>
                </main>
                <footer>Footer</footer>
            </div>
        )
    }
}

export default Hw2