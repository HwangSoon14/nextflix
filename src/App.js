import './App.scss';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Row from './components/Row/Row';
import requests from './components/api/request';
function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <Row 
          title="Trending Now"
          fetchUrl={`${requests.fetchTreding}`}
          isLargeRow={true}
        />
        <Row 
          title="Top Rated Movie"
          fetchUrl={`${requests.fetchTopRatedMovies}`}
          isLargeRow={false}
        />
        <Row 
          title="Upcoming  movies in theatres"
          fetchUrl={`${requests.fetchUpcoming}`}
          isLargeRow={false}
        />
        <Row 
          title="Popular movies"
          fetchUrl={`${requests.fetchPopular}`}
          isLargeRow={false}
        />
        
    </div>
  );
}

export default App;
