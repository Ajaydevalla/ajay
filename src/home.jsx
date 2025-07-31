import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    var nav=useNavigate()

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch("https://fakestoreapi.com/products");
                const response = await result.json();
                setData(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <nav>
                <span>our products</span>
                <button onClick={()=>{nav("/home")}}>home</button>
                <input placeholder='serach & explore' type="text" />
                <button>Orders</button>
                <button>mycart</button>
                
            </nav>
        <div className="home-container">

           
            {data.map((item) => (
                <div className="product-card" key={item.id}>
                    <img src={item.image} alt={item.title} className="product-image" />
                    <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-category">{item.category}</p>
                        <p className="product-description">{item.description}</p>
                        <p className="product-price">${item.price}</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Home;
