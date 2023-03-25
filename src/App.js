import React, { Component, lazy, Suspense } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Nav from './components/Nav/Nav'
import PagePath from './components/PagePath/PagePath'
import ProductView from './components/ProductView/ProductView'
import dataArray from './services/Data/data'
const LazySimilarProducts = lazy(() =>
    import('./components/SimilarProducts/SimilarProducts')
)
class App extends Component {
    state = {
        cartCount: 0,
        showPopup: false
    }

    handleAddToCart = () => {
        this.setState((prevState) => ({
            cartCount: prevState.cartCount + 1
        }))
        this.setState((prevState) => ({ ...prevState, showPopup: true }))
        setTimeout(
            () =>
                this.setState((prevState) => ({
                    ...prevState,
                    showPopup: false
                })),
            2000
        )
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Menu cartCount={this.state.cartCount} />
                <Nav />
                <PagePath />
                <ProductView
                    onAddToCart={this.handleAddToCart}
                    showPopup={this.state.showPopup}
                />
                <Suspense>
                    <LazySimilarProducts
                        data={dataArray}
                        fallback={<div>Loading...</div>}
                    />
                </Suspense>
                <Footer />
            </div>
        )
    }
}
export default App
