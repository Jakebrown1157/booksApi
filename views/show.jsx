const React = require('react')
const Default = require('/layouts/Default')

function Show ({book, index}) {
return (
    <Default>
    <h3> {book.name} </h3>
    <div className="showButton">
        <a href="/books"><button>Go back to the index</button></a>
    </div>
    </Default>
)}

module.exports = Show