module.exports = {
  getUserDetails : function(callBackFn,id)
  {
      return fetch(`http://localhost:3000/users/${id}`)
      .then(
        function(response) {
          if (response.ok !== true) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
            callBackFn(data);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  },
  getUsers : function(callBackFn)
{
    return fetch('http://localhost:3000/users')
    .then(
      function(response) {
        if (response.ok !== true) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          callBackFn(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
},
changeStatus : function(callBackFn,id,data)
{
  console.log("data",data);
    return fetch(`http://localhost:3000/users/${id}`,
  {
    method:'PATCH',
    body:JSON.stringify(data),
    mode:'cors',
    headers:{'Content-Type':'application/json'}
  })
    .then(
      function(response) {
        if (response.ok !== true) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          callBackFn(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
},
addUser : function(callBackFn,data)
{
  console.log("data",data);
    return fetch(`http://localhost:3000/users/`,
  {
    method:'POST',
    body:JSON.stringify(data),
    mode:'cors',
    headers:{'Content-Type':'application/json'}
  })
    .then(
      function(response) {
        if (response.ok !== true) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          callBackFn(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
},
updateUser : function(callBackFn,id,data)
{
  console.log("data",data);
    return fetch(`http://localhost:3000/users/${id}`,
  {
    method:'PUT',
    body:JSON.stringify(data),
    mode:'cors',
    headers:{'Content-Type':'application/json'}
  })
    .then(
      function(response) {
        if (response.ok !== true) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          callBackFn(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}
};
