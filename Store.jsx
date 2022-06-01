// store

const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Stickers extends React.Component {
    render() {
        const merch = this.props.merch
        console.log(merch)
        return (
            <DefaultLayout title="Stickers">

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

                    <section class="container content-section">
                        <h2 class="section-header">Stickers</h2>
                        <div class="shop-items">

                {merch.map(element => {
                    return (
                        <div class="shop-item">
                        <span class="shop-item-title">{element.name}</span>

                        <span class="shop-item-title">{element.amount}</span>


                        <img class="shop-item-image" src= {element.image} />
                        {/* let src = element.image */}

                        <div class="shop-item-details">
                            <span class="shop-item-price">{element.price}</span>
                            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                        </div>

                    </div>

                    )
                })}
                        </div>
                        <div class="cart-items">
                        </div>
                        <div class="cart-total">
                            <strong class="cart-total-title">Total</strong>
                            <span class="cart-total-price">Pending $0</span>
                        </div>
                        <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>

                    </section>

                </section>

            </DefaultLayout >
        )
    }
}

module.exports = Stickers
