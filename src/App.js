import React, {
    useEffect,
    useState
} from 'react';
import CardsList from './Components/Cardlist/CardsList';
import Introduction from './Components/Intro/Introduction';
import Outro from './Components/Outro/Outro';
import * as DbAccess from './Components/DbAccess/DbAccess'


const App = () => {
    const [projects, setProjects] = useState([]);

    const checkChache = () => {
        let data = localStorage.getItem('cachedData')
        if (!data) {
            return false
        }
        return true
    }

    useEffect(() => {
        if (checkChache()) {
            setProjects(JSON.parse(localStorage.getItem('cachedData')))

        } else {
            DbAccess.getAllData().then(data => {
                setProjects(data)
                localStorage.setItem('cachedData', JSON.stringify(data))

            }, (rejected) => {
                console.log("unable to reach server due to" + rejected.toString())
            })


        }

    },
        []
    );


    return (<div className="page_container" >
        <Introduction />
        <CardsList projects={projects} />
        <Outro />

    </div>)
}

export default App;
