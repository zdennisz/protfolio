

const getAllData = () => {
    return fetch("https://protfolio-36872-default-rtdb.europe-west1.firebasedatabase.app/.json").then(data => data.json())
}

export { getAllData }