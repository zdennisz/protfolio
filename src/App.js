import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import CardsList from './CardsList';
import Introduction from './Introduction';
import Outro from './Outro';



const App = () => {
 var list=["1","2","3","4"]
    return (<div className="page_container" >
         <Introduction/>
         <CardsList list={list} />
         <Outro/>

    </div>)
}

export default App;
