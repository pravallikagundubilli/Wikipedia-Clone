let searchElement1 = document.getElementById("searchInput");
let searchresult = document.getElementById("searchResults");
let spin = document.getElementById("spinner");

function createAndAppendSearch(results) {
    let {
        title,
        link,
        description
    } = results;
    // create div resultscontainer
    let resultiteme1 = document.createElement("div");
    resultiteme1.classList.add("result-item");
    searchresult.appendChild(resultiteme1);
    //anchor Title
    let anchorE1 = document.createElement("a");
    anchorE1.classList.add("result-title");
    anchorE1.textContent = title;
    anchorE1.href = link;
    anchorE1.target = "_blank";
    resultiteme1.appendChild(anchorE1);
    //title break
    let titlebreak1 = document.createElement("br");
    resultiteme1.appendChild(titlebreak1);
    //anchor url
    let urle1 = document.createElement("a");
    urle1.classList.add("result-url");
    anchorE1.href = link;
    anchorE1.target = "_blank";
    urle1.textContent = link;
    resultiteme1.appendChild(urle1);
    //line break
    let titlebreak2 = document.createElement("br");
    resultiteme1.appendChild(titlebreak2);
    //Paragraph
    let descriptions = document.createElement("p");
    descriptions.classList.add("line-description");
    descriptions.textContent = description;
    resultiteme1.appendChild(descriptions);
}

function displayresults(search_results) {
    spin.classList.toggle("d-none");
    for (let results of search_results) {
        createAndAppendSearch(results);
    }
}

function searchwiki(event) {
    if (event.key === "Enter") {
        searchresult.textContent = "";
        spin.classList.toggle("d-none");
        let inputvalue = searchElement1.value;
        let options = {
            method: "GET",
        };
        let url = "https://apis.ccbp.in/wiki-search?search=" + inputvalue;
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayresults(search_results);
            });
    }
}

searchElement1.addEventListener("keydown", searchwiki);
