import { useState } from "react";
import './AddProducts.css';
import { addNewProduct } from "./AppUtils";
import {useNavigate} from "react-router-dom"


function AddProducts({onAdd}) {
    
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        inStock: "true",
        width:"",
        height: "",
        depth: "",
        weight:"",
        image:"",
    });

    const [value, setValue] = useState(true);
    const Navigate = useNavigate();

    const handleChange = (event) => {
        setValue(event.target.value === 'true');
        setData(data => {
            return {
                ...data,
                inStock: event.target.value === 'true'
            }
        })
    };

    function getInputChangeHandler(key) {
        if (key != "inStock") {
            return (e) => {
                const val = e.target.value
                setData(data => {
                    return {
                        ...data,
                        [key]: val
                    }
                })
            }
        }
    }
    return <div id="main">
        <form className="form-container" method="POST" action="#"
            onSubmit={(e) => {
                e.preventDefault();
                console.log(data)
                addNewProduct(data)
                .then(Response => {
                    if (Response.success) {
                        Navigate("/")
                        setData(data => {
                            return {
                                ...data,
                                name: "",
                                description: "",
                                price: "",
                                category: "",
                                inStock: "",
                                width:"",
                                height: "",
                                depth: "",
                                weight:"",
                            }
                        })
                        
                    } 
                }
            )

            }}>
            
            <div className="name">
                <label htmlFor="name">Name: </label>
                <input data-testid='name' id="name" type="text" value={data.name}
                    onChange={getInputChangeHandler("name")} />
            </div>
            <div className="description">
                <label htmlFor="description">Description: </label>
                <input data-testid='description' id="description" type="text" value={data.description}
                    onChange={getInputChangeHandler("description")} />
            </div>
            <div className="price">
                <label htmlFor="price">Price(in Rs.): </label>
                <input data-testid='price' id="price" type="number" value={data.price}
                    onChange={getInputChangeHandler("price")} />
            </div>
            <div className="category">
                <label htmlFor="category">Category: </label>
                <input id="category" type="text" value={data.category}
                    onChange={getInputChangeHandler("category")} />
            </div>
            <div className="inStock">
                <label htmlFor="inStock">In Stock: </label>
                <label id="inStock-true">
                    <input
                        type="radio"
                        name="boolean"
                        value="true"
                        checked={value === true}
                        onChange={handleChange}
                    />
                    True
                </label>
                <label id="inStock-false">
                    <input
                        type="radio"
                        name="boolean"
                        value="false"
                        checked={value === false}
                        onChange={handleChange}
                    />
                    False
                </label>
            </div>
            <div className="width">
                <label htmlFor="width">Width(in mm): </label>
                <input id="width" type="number" value={data.width}
                    onChange={getInputChangeHandler("width")} />
            </div>
            <div className="height">
                <label htmlFor="height">Height(in mm): </label>
                <input id="height" type="number" value={data.height}
                    onChange={getInputChangeHandler("height")} />
            </div>
            <div className="depth">
                <label htmlFor="depth">Depth(in mm): </label>
                <input id="depth" type="number" value={data.depth}
                    onChange={getInputChangeHandler("depth")} />
            </div>
            <div className="weight">
                <label htmlFor="weight">Weight(in kgs): </label>
                <input id="weight" type="number" value={data.weight}
                    onChange={getInputChangeHandler("weight")} />
            </div>
            <div className="image">
                <label htmlFor="image">Upload image: </label>
                <input id="image" type="file" onChange={(e) => {
                    setData(data => {
                        return {
                            ...data,
                            image: e.target.files[0]
                        }
                    })
                }}/>
            </div>
            <div className="button">
                <button data-testid='submit' type="submit">Submit</button>
            </div>
        </form>
    </div>
}

export default AddProducts