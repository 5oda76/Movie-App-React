let apiLink = "https://www.omdbapi.com/?r=json&apikey=";
const apikey = "e8102b15";

/* 

Params: 
's' - KEYWORD SEARCH Returns a list of results matching the given title
't' - EXACT SEARCH Returns one result of the given title
'type' - Possible options: movie, series, (episode)

*/

async function getJsonData (type, jsonReturnType, query) {

    try {
        const data = await apiRequest(type, jsonReturnType, query);
        return data;
    } catch (error) {
        /* Cant rethrow to next function, just log it in the console */
        console.error("Error fetching data:", error);
        return;
    }
}
/* 'movie' OR 'series [string]', 's' OR 't' [string], name [string] */
async function apiRequest(type, jsonReturnType, query) {
    try {
        let apiRequestLink = constructApiLink(type, jsonReturnType, query);
        const data =  await fetchApiData(apiRequestLink);
        return data;
    } catch (error) {
        throw new Error("Error in apiRequest: " + error.message);
    }
}

async function fetchApiData(apiRequestLink) {

    try {
        const response = await fetch(apiRequestLink);
        if(response.ok) {
            const data = await response.json();
            if(data.Response === "True") {
                return data;
            } else {
                throw new Error(data.Error);
            }
        }
    } catch (error) {
        throw new Error("Error fetching data.");
    }

}

function constructApiLink(type, jsonReturnType, query) {
    let API_LINK = apiLink + apikey;
    const invalidTypes = ["<empty string>", "empty", null, "", "series,movies"];

    if(!checkApiConditions(type, jsonReturnType, query)) {
        throw new Error("Invalid parameters");
    }
    
    try {
        if(invalidTypes.includes(type)) {
            API_LINK += "";
        }
    } catch(error) {
        type = "";
    }
    if(type === "movie") {
        API_LINK += "&type=movie";
    } else if(type === "series") {
        API_LINK += "&type=series";
    }

    if(jsonReturnType === "string" || jsonReturnType === "char") {
        API_LINK += "&plot=short";
        API_LINK += "&t=" + query;
    } 
    else if(jsonReturnType === "array") {
        API_LINK += "&s=" + query;
    } else {
        throw new Error("Invalid jsonReturnType");
    }

    return API_LINK;
}

function checkApiConditions(type, jsonReturnType, query) {
    const validReturnTypes = ["string", "char", "array"];

    if (!validReturnTypes.includes(jsonReturnType)) {
        return false;
    }
    if (!query) {
        return false;
    }

    return true;
}


export { getJsonData };
 