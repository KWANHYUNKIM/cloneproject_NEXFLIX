import './NotFound.css'
import { useHistory } from "react-router-dom";


function NotFound() {
   
    const history = useHistory();

    function clickEvent() {
        history.push('/');
   }

  return (
    <div className = "notfoundScreen">
        <img
            className = "notfoundScreen__img"
            src = "https://www.usmagazine.com/wp-content/uploads/2022/11/will-there-be-a-lost-in-space-season-4-everything-to-know-01.jpg"
            alt = ""
            />
    
        <div className = "notfoundScreen__background">

            <div className="notfoundScreen__body">
                <h3>Lost your way?</h3>

                <h6>Sorry, we can't find that page. You'll find lots to explore on the home page.</h6>
                
                <button 
                  onClick = {clickEvent}
                  className='notfoundScreen_home'>Neflix Home &gt;</button><br></br>

                <h8>Error Code : NSES-404</h8>
            </div>
        </div>    
    </div>
  )
}

export default NotFound
