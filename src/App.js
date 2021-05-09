import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import CardsList from './CardsList';
import Introduction from './Introduction';
import Outro from './Outro';
import firebase from "./Firebase";


const App = () => {
const [projects,setProjects]=useState([]);

    useEffect(() => {
        firebase.database().ref("/").once("value", (querySnapShot) => {
            let data = querySnapShot.val();
       
            setProjects(data)
      
        });
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
