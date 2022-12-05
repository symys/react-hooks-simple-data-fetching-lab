// create your App component here
import React, {useEffect, useState} from "react"

function App() {
    const [dog, setDog] = useState(null);
    //const [isLoaded, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {setDog(data.message);});
    }, []);

    return(
        <div>
            {dog ? <img src={dog} alt="A Random Dog"/> : <p>Loading...</p>}
        </div>
     )
}

export default App