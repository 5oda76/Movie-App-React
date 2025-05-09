let apiLink = "http://www.omdbapi.com/?r=json&apikey=";
const apikey = "e8102b15";
let API = apiLink + apikey;

/* 

Params: 
's' - KEYWORD SEARCH Returns a list of results matching the given title
't' - EXACT SEARCH Returns one result of the given title
'type' - Possible options: movie, series, (episode)

*/

/* 'movie' OR 'series', 's' OR 't', name */
async function apiRequest(movieOrSeries, searchType, query) {



}