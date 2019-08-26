import React from 'react';
import { UserContext } from '../UserContext';

const ComponentC = () => {
   return <UserContext.Consumer>
       {
           ({data})=>{
            return (
                <div>
                    <h1 style={{padding:'200px'}}>{data}</h1>
                </div>
            );
           }
       }
   </UserContext.Consumer>
};

export default ComponentC;