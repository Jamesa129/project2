// add page

const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Plushy Store">
                <h1>Pick your pokemon</h1>

<button><a href="/pokemon">Home/Lore Page</a></button>

                <form action="/pokemon" method="POST">

                    <label htmlFor="image">Product Img URL:</label>
                    <input type="text" id="image" name="image"/>

                    <label htmlFor="price">Total:</label>
                    <input type="text" id="price" name="price"/>

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>




                    <label htmlFor="amount">Stock:</label>
                    <input type="text" id="amount" name="amount"/>





                    <input type="submit" value="Add"/>
            
                </form>
            </DefaultLayout>
        )
    }
}
