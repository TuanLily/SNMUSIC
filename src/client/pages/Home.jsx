import Header from '@/client/components/Header'
import Footer from '@/client/components/Footer'
import HeroSectionMain from '@/client/components/HeroSectionMain'
import AboutSectionMain from '@/client/components/AboutSectionMain'
import ServicesSessionMain from '@/client/components/ServicesSessionMain'
import TrackSessionMain from '@/client/components/TrackSessionMain'
import YoutubeSessionMain from '@/client/components/YoutubeSessionMain'

function Home() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Header />

      <HeroSectionMain />
      <AboutSectionMain />
      <ServicesSessionMain />
      <TrackSessionMain />
      <YoutubeSessionMain />

      <Footer />
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </>
  )
}

export default Home
