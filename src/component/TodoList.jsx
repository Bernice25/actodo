import Todoitem from "./Todoitem"


function TodoList(props) 

{   const activityarr = props.activityarr
    const setactivity = props.setactivity





    return (<div className="bg-purple-300 p-2 flex-grow ">
        <h1 className="text-2xl font-bold">Today's Activity</h1>

        {activityarr.length === 0 ? <p>You haven't added anything yet</p> : ""}

        {
            activityarr.map(function (item, index) {
                return <Todoitem id={item.id} activity={item.activity} index={index} activityarr={activityarr} setactivity={setactivity} />

            })
        }
    </div>


    )
}

export default TodoList