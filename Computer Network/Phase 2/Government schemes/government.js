

    // api url
    const api_url = "";

      // Defining async function
      async function getapi(url) 
      {
            // Storing response
            const response = await fetch(url);
            // Storing data in form of JSON
            var data = await response.json();
            if (response) {
                  hideloader();
            }
            show(data);
      }
      // Calling that async function
      getapi(api_url);

      // Function to hide the loader
      function hideloader() 
      {
            document.getElementById('loading').style.display = 'none';
      }
      // Function to define innerHTML for HTML table
      function show(data) 
      {
            let tab = "";
            // Loop to access all rows
            for (let r of data.list) {
                  tab += `<div class="container bcontent">
                        <div class="card" style="width: 500px;">
                              <div class="row no-gutters">
                                    <div class="col-sm-5">
                                          <img class="card-img" src="/images/defaultimg.png" alt="Suresh Dasari Card">
                                          </div>
                                                <div class="col-sm-7">
                                                      <div class="card-body">
                                                            <h5 class="card-title">${r.Scheme_name}</h5>
                                                            <p class="card-text">${r.Scheme_description}</p>
                                                            <h6 class="card-title">Department - ${r.Govt_department}</h6>
                                                            <h6 class="card-title">Scheme Id - ${r.Scheme_Id}</h6>
                                                            <a href="#" class="btn btn-primary">Apply now</a>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div><br>`;
            }
            // Setting innerHTML as tab variable
            document.getElementById("dis").innerHTML = tab;
      }
      alert("Hi");

