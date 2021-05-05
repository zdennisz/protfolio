import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import CardsList from './CardsList';
import Introduction from './Introduction';
import Outro from './Outro';
const divStyle = {
    color: 'blue',
    height: '250px',
    textAlign: 'center',
    padding: '5px 10px',
    background: '#eee',
    marginTop: '15px'
};

const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
}

const InifiniteScroll = () => {
    const [postList, setPostList] = useState({
        list:  [ <Introduction/> ]
    });
    const [page, setPage] = useState(0);

    const loader = useRef(null);

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, []);

    useEffect(()=>{
        if(page === 2){
            const newList=postList.list.concat([<CardsList/>]);
            setPostList({
                list:newList
            })
        }else if(page ===3 ){
            const newList=postList.list.concat([<Outro/>]);
            setPostList({
                list:newList
            })

        }
      
    },[page])

    const handleObserver=(entities)=>{
        const target=entities[0];
        if(target.isIntersecting){
            setPage((page)=>page+1)
        }
    }

    return (<div className="container" style={containerStyle}>
        <div className="post-list">
            {
                postList.list.map((post, index) => {
                    return (<div key={index}
                        className="post"
                        style={divStyle}>
                        <h2>{post}</h2>
                    </div>)
                })
            }
            <div className="loading" ref={loader}>
                <h2>Load More</h2>
            </div>
        </div>
    </div>)
}

export default InifiniteScroll;
