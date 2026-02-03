export const myApplicationsPromise = email => {
    console.log("hit there");
    return fetch(`http://localhost:3000/applications?email=${email}`, {
        credentials: 'include'  // include cookies in the request
    })
        .then(res => res.json());
};