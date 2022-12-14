import "./UpdateStyles.css";
import React, {useEffect, useState} from 'react'
import {Button, Form} from 'semantic-ui-react';
import {useParams} from "react-router-dom";
import {getProductByID, updateProduct} from "../../../../services/ProductService";
import {useNavigate} from "react-router-dom";

export default function Update() {
    const navigate = useNavigate();
    const params = useParams()
    const [data, setData] = useState({
        name: "",
        category: "",
        description: "",
        color: "",
        stock: "",
        price: ""
    });

    useEffect(() => {
        getProductByID(params.id)
            .then(r => {
                console.log(r)
                setData(r.data)
            })
            .catch(e => console.log("Error: " + e))
    }, [])

    const handleSubmit = async () => {
        const updateFormData = new FormData();
        updateFormData.append("name", data.name)
        updateFormData.append("category", data.category)
        updateFormData.append("description", data.description)
        updateFormData.append("color", data.color)
        updateFormData.append("stock", data.stock)
        updateFormData.append("price", data.price)

        updateProduct(params.id, data)
            .then(r => {
                console.log(r)
            })
            .catch(e => console.log("Error: " + e))



        navigate("/read");
    }

    const cancelSubmitHandle = async () => {
        navigate("/read");
    }

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    return (
        <div className="up1">
            <h2>EDITAR PRODUCTO</h2>
            <Form className="up2" onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    name="name"
                    placeholder={data.name}
                    value={data.name}
                    onChange={handleChange}
                />
                <label>Category</label>
                <input
                    name="category"
                    placeholder={data.category}
                    value={data.category}
                    onChange={handleChange}
                />
                <label>Description</label>
                <input
                    name="description"
                    placeholder={data.description}
                    value={data.description}
                    onChange={handleChange}
                />
                <label>Color</label>
                <input
                    name="color"
                    placeholder={data.color}
                    value={data.color}
                    onChange={handleChange}
                />
                <label>Stock</label>
                <input
                    name="stock"
                    placeholder={data.stock}
                    value={data.stock}
                    onChange={handleChange}
                />
                <label>Precio</label>
                <input
                    name="price"
                    placeholder={data.price}
                    value={data.price}
                    onChange={handleChange}
                />
                <div className="up3">
                    <Button onSubmit={cancelSubmitHandle}>Cancelar</Button>
                    <Button type='submit'>Actualizar</Button>
                </div>
            </Form>
        </div>
    )
}