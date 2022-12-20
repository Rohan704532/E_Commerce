import Top from "../Components/Top/Top"
import Bottom from "../Components/Bottom/Bottom"
import "./Home.css"

function Home(){
    return(
        <div>
            <div className="Top">
                <Top/>
            </div>
            <div className="Bottom">
                <Bottom/>
            </div>
        </div>
    )
}

export default Home