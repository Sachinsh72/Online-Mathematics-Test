import { Route, Routes } from "react-router-dom"
import LandingPage from "../LandingPage/LandingPage"
import TestPage from "../TestPage/TestPage"

function CustomRoute(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>

            <Route path="/checkedItems" element={<TestPage/>}/>
        </Routes>
    )
}
export default CustomRoute