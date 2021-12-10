import React, {useState, useEffect} from 'react';

const Postbody = ({data}) => {

    const [body, setBody] = useState('');
    const [fullbody, setFullbody] = useState(false);

    const checkLength = (rop) => {

        const g = rop.split(" ");
        const k = g.filter((dr, index) => {


            if ( index < 40 ) {
                return dr;
            }


        })

        const joinText = k.join(" ")
        setBody(joinText)
    }

    

    
    useEffect(() => {
        
        checkLength(data)
        

    }, [body]);


    return (

        <div className="post_body_container">
            {
                fullbody ? <div>{data} 
                <div className="read" onClick={ ()=> setFullbody(false) } style={{fontSize : '14px', fontWeight : 'bold', marginTop : '10px', cursor : 'pointer'}}>Show Less</div></div>
                : 
                (<div>{body}... <div className="read" onClick={ ()=> setFullbody(true) } style={{fontSize : '14px', fontWeight : 'bold', marginTop : '10px', cursor : 'pointer'}}>Read More</div></div>)
            }
        </div>
    );
}

export default Postbody;
