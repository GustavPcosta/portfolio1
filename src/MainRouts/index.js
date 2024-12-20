import {Route,Routes} from 'react-router-dom';
import Home from '../Pages/Home';
function MainRouts(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default MainRouts;