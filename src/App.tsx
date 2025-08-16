import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Modal from './components/Modal'
import GlobalProvider from './contexts/GlobalContext'

function App() {

  return (
    <GlobalProvider>
      <Header />
      <Main />
      <Footer />
      <Modal />
    </GlobalProvider>
  )
}

export default App
