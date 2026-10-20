
import { useState } from "react";

function Addtodocontainer(props) {
    const activityarr = props.activityarr;
    const setactivity = props.setactivity;

    const [newactivity, setnewactivity] = useState("");

    function handleChange(event) {
        setnewactivity(event.target.value);
    }

    function addActivity() {
        if (newactivity.trim() === "") {
            return;
        }

        setactivity([
            ...activityarr,
            {
                id: activityarr.length + 1,
                activity: newactivity
            }
        ]);

        setnewactivity(""); // Clears the input box
    }

    return (
        <div>
            <h1 className="text-2xl m-2 font-bold">
                Manage Activities
            </h1>

            <input
                value={newactivity}
                onChange={handleChange}
                className="border border-black bg-transparent p-1"
                placeholder="Next Activity?"
            />

            <button
                onClick={addActivity}
                className="bg-black text-white p-1 border-black"
            >
                Add
            </button>
        </div>
    );
}

export default Addtodocontainer;

