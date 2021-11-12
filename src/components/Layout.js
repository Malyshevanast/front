import NavBar from "./NavBar"
import Header from "./Header"
const Layout=({children})=>{
    return <>
    <Header/>
    <NavBar/>
    {children}

    </>
}
export default Layout