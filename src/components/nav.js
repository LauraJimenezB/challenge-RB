import React, {useState} from "react";
import {
    Link
  } from "react-router-dom";
import {Form} from 'react-bootstrap';
import "./nav.css";
import { useHistory } from "react-router-dom";

export default function Nav(props) {
    const [categoryValue, setCategoryValue] = useState("Template 1");
    const history = useHistory();
      if(categoryValue==="Social Innovation"){
      history.push("/social-innovation");
      }else{
        history.push("/")
      }

    const all = () => {
        history.push("/")
    }  
    return (
    <nav className="Nav">
        <ul className="links">
        <li>
            <Link to="/">Home</Link>
        </li>
        <ul className="links">
            Templates
        <li>
            <Link to="/social-innovation">Social Innovation</Link>
        </li>
        </ul>
        </ul>
        <div className="filterContainer">
            <button onClick={()=>all()}>All</button>
            <Form.Group >
                <Form.Control as="select" size="sm" onChange={(event)=>setCategoryValue(event.target.value)}>
                    <option value="title">Select</option>
                    <option value="Social Innovation">Social Innovation</option>
                    <option value="1">Template 1</option>
                    <option value="2">Template 2</option>
                    <option value="3">Template 3</option>
            </Form.Control>
            </Form.Group>
        </div>
    </nav>);
  }
