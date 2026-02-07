export const myApplicationsPromise = (email, accessToken) => {
    console.log("hit there");
    return fetch(`http://localhost:3000/applications?email=${email}`, {
        credentials: 'include',  // include cookies in the request
        headers: {
            'authorization': `Bearer ${accessToken}`  // include the access token in the Authorization header
        }
    })
        .then(res => res.json());
};