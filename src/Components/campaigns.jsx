import React from 'react';

function Campaigns({campaigns}) {
  
  return <div>
    {
        campaigns.map((each,index)=>{
          return (<div key={index}>
            {each.id}
            {each.name}
        </div>)
        })
    }
  </div>
}

export default Campaigns;
