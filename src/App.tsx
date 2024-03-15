
import './App.css'
import NavBarComponents from './components/NavbarComponent/NavbarComponent'
import ButtonCreateComponent from './components/ButtonComponent/ButtonCreateProduct' 
import { HomeComponent } from './components/Home/HomeComponent'
import FooterComponent from './components/footerComponent/FooterComponent'
function App() {
  return (
    <>
      <NavBarComponents />
      <ButtonCreateComponent />
      <HomeComponent/>
      <FooterComponent />
    </>
  )
}


export default App

