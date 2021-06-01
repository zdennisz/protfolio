import React, {
    useEffect,
    useState
} from 'react';
import CardsList from './CardsList';
import Introduction from './Introduction';
import Outro from './Outro';
import firebase from "./Firebase";


const App = () => {
    const [projects, setProjects] = useState([]);
    
    const checkChache=()=>{
        let data=localStorage.getItem('cachedData')
        if(!data){
            return false
        }
        return true
    }

    useEffect(() => {
        if(checkChache()){
            setProjects(JSON.parse(localStorage.getItem('cachedData')))
           
        }else{
            //we need to get new data since the data is no longer aviliable
            firebase.database().ref("/").once("value", (querySnapShot) => {
                let data = querySnapShot.val();
    
                setProjects(data)
                localStorage.setItem('cachedData',JSON.stringify(data))
            });
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
