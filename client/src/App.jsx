import { Navbar, Welcome, Services, Transaction, Footer } from "./components";

const App = () => {

  return (
    <main className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      
      <Services />
      <Transaction />
      <Footer />
    </main>
  )
}

export default App
