import Addtodocontainer from "./AddTodocontainer"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer() {

    const [activityarr, setactivity] = useState([
        {
            id: 1,
            activity: "hey time to gym"
        },
        {
            id: 2,
            activity: "hey time to eat"
        },
        {
            id: 3,
            activity: "this is time to read a book "
        }
    ])


    return (
        <div>
            <div className="flex gap-5 p-3">
                <Addtodocontainer activityarr={activityarr} setactivity={setactivity} />
                <TodoList activityarr={activityarr} setactivity={setactivity} />




            </div>

        </div>


    )
}

export default TodoContainer