/**@description
 * JUST A CODE THAT INCREASE A NUMBER EVERY TIME YOU CLICK THE BUTTON
 * 
 **  @author: Marcy Conde
@
 */

import React, {useState} from 'react';
import Title from './styles';

const Count = ()=> {
   const [count, setCount] = useState(0);
    return(
            <Title >
                <h1>CLICK AND BE HAPPY</h1>
                <p>{count}</p>
                <button onClick={()=> setCount(count + 1)}>+</button>
            </Title>
        
    );
}

export default Count;
