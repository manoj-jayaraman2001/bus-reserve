import busHero from '../../assets/bushero.jpg'
import './home.css'
const Home = () => {
    return ( 
        <div className='home'>
          <div className='hero'>
            <img src={busHero} alt="" className='hero-img' />
            <div className='search-trips'>

            </div>
          </div>
        </div>
     );
}
 
export default Home;