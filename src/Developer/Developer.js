import React from 'react';
import './Developer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
const Developer = (props) => {
    // console.log(props.developer);
    const element = <FontAwesomeIcon icon={faUserPlus} />
    const{name,position,project,state,img,stipend}=props.developer
    return (
        <div className="developer">
               
             <div className="img-link">
                <img src={img} alt="" />
            </div>

            <div>
                <h1>Name:{name}</h1>
                <h3>Position:{position}</h3>
                <h5>Project:{project}</h5>
                <p>State:{state}</p>
                <h3>Stipend:{stipend}</h3>
                <button onClick={props.handleClick} className="btn-handler">{element}  ADD</button>
            </div>
            
        </div>
    );
};

export default Developer;