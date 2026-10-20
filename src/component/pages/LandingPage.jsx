import Header from "../Header"
import Card from "../Card"
import TodoContainer from "../Todocontainer"
import { useLocation } from "react-router-dom"


function LandingPage() {
    const data = useLocation()
    return (
        <div className='bg-black p-16'>
            <div className='bg-white p-10 border rounded-md'>
                <Header name={data.state.users} />

                <div className='flex justify-between my-4 flex-wrap gap-10 border rounded-md'>
                    <Card bgcolour={"#8272DA"} title={"23"} subtitle={"chennai"} />
                    <Card bgcolour={"#A0522D"} title={"24"} subtitle={"mumbai"} />
                    <Card bgcolour={"#F39C12"} title={"23"} subtitle={"kolkata"} />
                </div>
                <TodoContainer />






            </div>

        </div>
    );


}


export default LandingPage