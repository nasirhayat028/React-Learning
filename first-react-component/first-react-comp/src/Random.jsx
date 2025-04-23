function Random(){

    let number = Math.round(Math.random()*100)

    return <div>
        <h1>Random Number: {number}</h1>
    </div>
}

export default Random;