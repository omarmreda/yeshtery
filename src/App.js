import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Nav from './components/Nav/Nav'
import PagePath from './components/PagePath/PagePath'
import ProductView from './components/ProductView/ProductView'
import SimilarProducts from './components/SimilarProducts/SimilarProducts'
import dataArray from './services/Data/data'
class App extends Component {
    state = {
        cartCount: 0
    }

    handleAddToCart = () => {
        this.setState((prevState) => ({
            cartCount: prevState.cartCount + 1
        }))
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Menu cartCount={this.state.cartCount} />
                <Nav />
                <PagePath />
                <ProductView onAddToCart={this.handleAddToCart} />
                <SimilarProducts data={dataArray} />
                <Footer />
            </div>
        )
    }
}
export default App
