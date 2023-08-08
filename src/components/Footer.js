import React from 'react'

function Footer(props) {
    function clickme(){
        alert('I am inside functional component')
    }
    return (
        <div className='container border'>
            <h1>This is footer..</h1>

            {/* props: properties read only components, used to store value of a */}
            <h1>Hello I am {props.name}. I am {props.age} years old.</h1>
            <h2>Email: {props.mail}</h2>

            {/* event handling */}
            <button className='btn btn-success' onClick={clickme} >click here</button>
        </div>
    )
    }

export default Footer
