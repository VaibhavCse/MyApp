import React, {useState} from 'react';
//import { useStyles } from 'react';

export default function TextForm(props) {
    const OnClickUP = () =>{
        const NewText= text.toUpperCase();
        setText(NewText);
    }
    const OnClickLC = () =>{
        const NewText= text.toLowerCase();
        setText(NewText);
    }
    
    // const styles = useStyles(() => ({
    // boldText: {
    //     fontWeight: 'bold',
    // },
    // }));
    const OnClickBold = () =>{
        
    }
    const OnClickClear = () =>{
        const NewText= " ";
        setText(NewText);
    }
    const onChangeText = (event) =>{
        setText(event.target.value)
    }
    
      
    // const [boldtext, styles] = useStyles(() => ({
    //     boldText: {
    //         fontWeight: 'bold',
    //     },
    //     }));

    const [text, setText] = useState("");
    return (  
        <>     
        <div className="py-3">
            
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={onChangeText} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-1" onClick={OnClickUP}>Result In Uppercase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={OnClickLC}>Result In Lowercase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={OnClickBold}>Bold</button>
                <button className="btn btn-primary my-3 mx-1" onClick={OnClickClear}>Clear</button>

            </div>
        </div>
        <div className="container">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length}words and {text.length}characters</p>
            <p>{0.008 * text.split(" ").length} minutes will take you to read the text</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
