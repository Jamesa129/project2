// editing the stock 

const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const Pokemon = this.props.Pokemon
        return (
            <DefaultLayout title="Edit">
                <h1>{Pokemon.name.toUpperCase()} Edit Page</h1>


                <form action={`/Pokemon/store${merch._id}?_method=PUT`} method="POST">

                    <label htmlFor="image">image:</label>
                    <input type="text" id="image" name="image" defaultValue={Pokemon.image} />

                    <label htmlFor="price">price:</label>
                    <input type="text" id="price" name="price" defaultValue={Pokemon.price}/>

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={Pokemon.name} />



                    <label htmlFor="amount">Stock:</label>
                    <input type="text" id="amount" name="amount" defaultValue={Pokemon.amount}/>




                    <input type="submit" value="Edit Pokemon"/>
                </form>
            </DefaultLayout>
        )
    }
}
