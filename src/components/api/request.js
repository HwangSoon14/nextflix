const APIKEY = "87dc7bc6d7460dbc761eb72fa40af9e5";


const requests = {
    fetchTreding: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=${APIKEY}&language=en-US`,
    fetchPopular:`/movie/popular?api_key=${APIKEY}&language=en-US`,
}

export default requests;