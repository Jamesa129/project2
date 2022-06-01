// show content and delete functionality

const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        console.log(this.props.Pokemon)
        const Pokemon = this.props.Pokemon
        return (
            <DefaultLayout title="Show">
                <div>
                    <p class="content">The {Pokemon.name}'s cost it {Pokemon.price}.</p>
                    



                    <button><a href={'/Pokemon/store'}>Back</a></button>
                    <hr />

                    <form action={`/Pokemon/store ${Pokemon._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>

                    <button><a href={`/Pokemon/store${Pokemon._id}/edit`}>{`Edit ${Pokemon.name}`}</a></button>
                    </div>




            </DefaultLayout>
        )
    }
}

module.exports = Show
