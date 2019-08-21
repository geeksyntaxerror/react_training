import React from 'react'
import './SelectBox.css'

const SelectBox = () => {

    const [greenbox, setGreenBox] = React.useState(false);
    const [redbox, setRedBox] = React.useState(false);
    return (
        <div>
            <label>Selct Box
                <input type="text" onChange={e => {
                    if (e.target.value.toString() == "green")
                        setGreenBox(true);
                    else if (e.target.value.toString() == 'red')
                        setRedBox(true)
                    else {
                        setGreenBox(false);
                        setRedBox(false);
                    }
                }} />
            </label>
            <div className="redBox" style={greenbox ? { display: 'none' } : {}}></div>
            <div className="greenBox" style={redbox ? { display: 'none' } : {}}></div>
        </div>
    );
}

export default SelectBox