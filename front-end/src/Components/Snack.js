function Snack({snack}){
    return (
        <article>
            <aside>
            </aside>
            <div>
                <h5>{snack.name}</h5>
                <img src={snack.image} alt = {snack.name}></img>
                <h6>{snack.protein}</h6>
                <h6>{snack.fiber}</h6>
                <h6>{snack.added_sugar}</h6>
            </div>
            <div className="showNavigation">
                <div>
                    {/* <a href={}></a> */}
                    <button>Back</button>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>
        </article>
    )
}

export default Snack;