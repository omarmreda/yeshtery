import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Nav from './components/Nav/Nav'
import PagePath from './components/PagePath/PagePath'
import ProductView from './components/ProductView/ProductView'
import SimilarProducts from './components/SimilarProducts/SimilarProducts'

function App() {
    return (
        <div className="App">
            <Header />
            <Menu />
            <Nav />
            <PagePath />
            <ProductView />
            <Footer />
            <SimilarProducts />
        </div>
    )
}

export default App
