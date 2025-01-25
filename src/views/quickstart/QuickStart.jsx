import { Outlet ,Link} from "react-router-dom";
function Quickstart(){
    return(
        <>
        <div>
            <div className="flex space-x-40 pt-5">
                <div  className="border p-5 ml-5">
                    <h1>Home Page</h1>
                    <p className="text-blue-500"><Link to="thinking-in-react">thinkinginreact</Link></p>
                    <p className="text-blue-500"><Link to="tic-tac-toe">  TicTacToe</Link></p>
                </div>
                <div className="border px-5 text-red-500">
                    <Outlet/>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default Quickstart;