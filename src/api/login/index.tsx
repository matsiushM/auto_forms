const loginUsers = () => {
   const options = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
   }

    return  fetch("https://auto-forms-server.onrender.com/authorization/login", options)
       .then(response => response.json())
       .catch(error => console.error("Error login request: ", error))
}

export default loginUsers;