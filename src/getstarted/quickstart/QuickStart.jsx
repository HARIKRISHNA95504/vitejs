import { Link, Outlet } from "react-router-dom";
function QuickStart(){
    return(
        <>
        <div>Quickstart
            <li><Link to="thinking-in-react">Thinking in react</Link></li>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}
export default QuickStart;