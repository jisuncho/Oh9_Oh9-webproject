import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchProfile from './SearchProfile';


function List(props) {
    const [page, setPage] = useState(1);
    const [List, setList]=useState([]);

    useEffect(()=>{
//'http://localhost:9090/follow/followerlist'+ props.obj.followee
        axios.get('http://localhost:9090/follow/followerlist?follower=test3')
        .then( (res)=>{
            console.log(res.data);
            setList(res.data.list)
        });
        

    }, [page]);
    // list
    return (
        <div>
          {
            List.map((profile)=> <SearchProfile profile={profile}/>)
          }
          
        </div>
    );
}

export default List;