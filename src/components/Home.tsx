import SirenScripts from "./SirenScripts"
import field from '../assets/img/home.jpg';

const Home = () => {
  return (
      <div style={{
      backgroundImage: `url(${field})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      overflowY: 'auto',
      color: '#000'
    }}>
      <SirenScripts />
      <h2 style={{margin:'3em'}}>SERVICES</h2>
    </div>
  )
}

export default Home