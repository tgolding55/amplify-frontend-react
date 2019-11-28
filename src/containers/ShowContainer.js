import React  from 'react';
import SongCard from 'react';

const ShowContainer = ({songs}) => { 
 return ( 
     songs.map(song => 
       <SongCard {...song}/>
    )
 )
}


export default ShowContainer;
