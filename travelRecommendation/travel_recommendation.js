function showtravelDetails(event) {
      event.preventDefault();
      const city = document.getElementById('city').value;
      fetch('./travel_recommendation_api.json')
    .then((res) => {
                    if (!res.ok) {
                        throw new Error
                            (`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) =>
                    console.log(data))
                .catch((error) =>
                    console.error("Unable to fetch data:", error));
        }
        
    document.getElementById('recForm').addEventListener('submit',showtravelDetails );

    /* Search Form*/

    function showsearchDetails(event) {
        event.preventDefault();
        const search = document.getElementById('search').value;
        fetch('./travel_recommendation_api.json')
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            console.log(data))
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
      document.getElementById('searchForm').addEventListener('submit',showsearchDetails );


      function resetDet(){
        document.getElementById('search').value=""; 
        alert("Reset done");
    
    }