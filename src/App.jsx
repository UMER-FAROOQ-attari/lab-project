import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

function App() {
  return (
    <>
      <a
        className='text-2xl text-center pl-52 text-red-500 bg-black'
        href="https://github.com/UMER-FAROOQ-attari/lab-project"
      >
        github LINK
      </a>

      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
