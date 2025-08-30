import { Link } from "react-router-dom"
import "../css/Home.css"


const Home = () => {

    return (
        <div className="home-body">
            <h1>Miniaplikace: Výpis kurzovního lístku</h1>
            <div className="main-cont">
                <div className='routes'>
                    <div className='route'>
                        <Link to="/ratelist" className="ratelink">Show exchange ratelist</Link>
                    </div>
                    <div className='route'>
                        <Link to="/ratedetail" className="ratelink">Show exchange ratelist</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home