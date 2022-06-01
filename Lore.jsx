// home

const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Lore extends React.Component {
    render() {

        return (

            <DefaultLayout title="Lore">


                <header class="main-header">
                    <nav class="nav main-nav">
                        <ul>
                        <li><a href="/pokemon">Home/Lore</a></li>
                            <li><a href="/pokemon/store">Poke-Store</a></li>
                            <li><a href="/pokemon/new">Add</a></li>
                        </ul>
                    </nav>
                    <h1 class="title1 title2">Poke-Center</h1>
                </header>

                <section class="content-section container">
                    <h2 class="section-header">ABOUT Gen 1 & 3</h2>
                    <img class="about-band-image" src="/images/other3.jpg"/>
                        <p>The first generation (Japanese: 第一世代 first generation) of Pokémon games, known among older fans as the color generation or the chromatic generation due to the names of the versions released, is the initial set of four Pokémon games released.

                            Beginning with Pokémon Red and Green, and later joined by third version Blue and special edition Yellow in Japan, the Generation I games were developed beginning as early as 1990 from an idea that Satoshi Tajiri had thought of and pitched to Nintendo with the help of Shigeru Miyamoto. The inspiration for many of the key mechanics introduced in this generation came from Tajiri's childhood interest in bug collecting, with the trading system between two Game Boys being thought of when he imagined a caterpillar crawling across the Game Link Cable between two systems.</p>

                        <p>The third generation (Japanese: 第三世代 third generation) of Pokémon games, also sometimes known as the advance or advanced generation, is the third set of Pokémon games released, and is described by some to be a "resetting" of the series.

                            Centering around Pokémon Ruby, Sapphire, and Emerald on the Game Boy Advance, released in 2002 and 2004 respectively (2003 and 2005 outside of Japan), Generation III broke from the continuous storyline that had been established between Generation I and Generation II, opting instead to move players to the Hoenn region, an island region disconnected from Kanto and Johto.</p>
                </section>

                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="title1">Poke'dex Gen 1 #151 Gen 3 #135</h3>
                        <h4>Gen 1 & 3 are the best in my opinion</h4>
                </div>
            </footer>

            </DefaultLayout >
        )
    }
}

module.exports = Lore
