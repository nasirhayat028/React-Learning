function Items() {
            let itemName = 'Buy Milk'
    return <div>
        <>
            <div class="row kg-row">
                <div class="col-4"> <p>{itemName}</p> </div>
                <div class="col-4"> <p>06/ 05/2027</p> </div>
                <div class="col-2"> <button class="btn btn-danger kg-btn">Delete</button></div>
            </div>
        </>
    </div>
}

export default Items;