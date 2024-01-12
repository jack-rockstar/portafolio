import Banner from './components/banner'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Skill from './components/skill'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-full min-h-screen bg-grid bg-primary'>
      <Navbar />
      <Banner />
      <Projects />
      <Skill />
      <Footer />
    </main>
  )
}
