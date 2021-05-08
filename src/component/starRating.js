import React from 'react'

const StarRating = ({rate}) => {
 
        let star=[
{
    id:1,
    icon:'★',
    color:'#bdbdbd'
},{
    id:2,
    icon:'★',
    color:'#bdbdbd'
},{
    id:3,
    icon:'★',
    color:'#bdbdbd'
},{
    id:4,
    icon:'★',
    color:'#bdbdbd'
},{
    id:5,
    icon:'★',
    color:'#bdbdbd'
}
  ];
     return <div>{ star.map((star)=><span>{star.icon}</span>) } </div>
    }
    


export default StarRating