import "./ItemCreateStyles.css";
import React, {useState} from 'react'
import {Button, Form} from 'semantic-ui-react';
import {postProduct} from "../../../../services/ProductService";
import {useNavigate} from "react-router-dom";

export default function Create() {
    const navigate = useNavigate();
    const url = 'http://localhost:8080/products/';
    const [files, setFiles] = useState('');
    const [fileSize, setFileSize] = useState(true);
    const [fileUploadProgress, setFileUploadProgress] = useState(false);
    const [fileUploadResponse, setFileUploadResponse] = useState(null);
    const [data, setData] = useState({
        name: "",
        category: "",
        description: "",
        color: "",
        stock: "",
        price: ""
    });

    const uploadFileHandler = (event) => {
        setFiles(event.target.files);
    };

    const fileSubmitHandler = (event) => {
        event.preventDefault();
        setFileSize(true);
        setFileUploadProgress(true);
        setFileUploadResponse(null);

        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            if (files[i].size > 1024000000) {
                setFileSize(false);
                setFileUploadProgress(false);
                setFileUploadResponse(null);
                return;
            }

            formData.append(`files`, files[i])
        }

        const requestOptions = {
            method: 'POST',
            body: formData
        };
        fetch(url + 'upload', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message
                    const error = (data && data.message) || response.status;
                    setFileUploadResponse(data.message);
                    return Promise.reject(error);
                }

                console.log(data.message);
                setFileUploadResponse(data.message);
            })
            .catch(error => {
                console.error('Error while uploading file!', error);
            });
        setFileUploadProgress(false);
    };

    const handleSubmit = async () => {
        const productFormData = new FormData();
        productFormData.append("name", data.name)
        productFormData.append("category", data.category)
        productFormData.append("description", data.description)
        productFormData.append("color", data.color)
        productFormData.append("stock", data.stock)
        productFormData.append("price", data.price)

        postProduct(data)
            .then(r => {
                console.log(r)
            })
            .catch(e => console.log("Error: " + e))
        navigate("/read");
    }

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const cancelSubmitHandle = async () => {
        navigate("/read");
    }

    // const handleOnFileChange = (event) => {
    //
    //     const reader = new FileReader()
    //
    //     reader.onload = async (e) => {
    //         const text = (e.target.result)
    //         let encodedString = btoa(text);
    //         console.log(encodedString)
    //     };
    //     reader.readAsDataURL(event.target.files[0])
    // }
    //
    // const inputFile = useRef(null)
    //
    // const onButtonClick = () => {
    //     // `current` points to the mounted file input element
    //     inputFile.current.click();
    // };

    return (
        <div className="icd1">
            <h2>AÑADIR PRODUCTO</h2>

            <form onSubmit={fileSubmitHandler}>
                <input type="file" multiple onChange={uploadFileHandler}/>
                <button type='submit'>Upload</button>
                {!fileSize && <p style={{color: 'red'}}>File size exceeded!!</p>}
                {fileUploadProgress && <p style={{color: 'red'}}>Uploading File(s)</p>}
                {fileUploadResponse != null && <p style={{color: 'green'}}>{fileUploadResponse}</p>}
            </form>

            <Form className="icd2" onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    name="name"
                    placeholder='Name'
                    value={data.name}
                    onChange={handleChange}
                />
                <label> Categoria </label>
                <input
                    name="category"
                    placeholder='Categoria'
                    value={data.category}
                    onChange={handleChange}
                />
                <label> Descripción </label>
                <input
                    name="description"
                    placeholder='Descripción'
                    value={data.description}
                    onChange={handleChange}
                />
                <label> Color </label>
                <input
                    name="color"
                    placeholder='Color'
                    value={data.color}
                    onChange={handleChange}
                />
                <label> Stock </label>
                <input
                    name="stock"
                    placeholder='Stock'
                    value={data.stock}
                    onChange={handleChange}
                />
                <label> Precio </label>
                <input
                    name="price"
                    placeholder='Precio'
                    value={data.price}
                    onChange={handleChange}
                />
                <div className="icd3">
                <Button onSubmit={cancelSubmitHandle}>Cancelar</Button>
                <Button type='submit'>Crear Producto</Button>
                </div>
            </Form>
        </div>
    )
}