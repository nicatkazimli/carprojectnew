import React, { useEffect, useState } from 'react';
import { carData } from '../../components/servis';
import './CustomCar.css'
import { Link } from 'react-router-dom';

const CustomCar = () => {
  const [car, setCar] = useState(carData);
  const [input, setInput] = useState('');
  const [loading,setLoading] = useState(true)

  const searchData = () => {
    const filtered = carData.filter(item =>
      item.make.toLowerCase().includes(input.toLowerCase()) ||
      item.model.toLowerCase().includes(input.toLowerCase()) ||
      item.year.toString().includes(input)
    );
    
   setCar(filtered)
  };

  useEffect(()=>{

  setLoading(false)
},[])

  
   return (
  <>
    {loading ? (<h1>loading...</h1>
    ) : (
      <div className="container">
        <header className="header">
          <h1 className="title">Yolda olan Avtomobillər</h1>
          <p className="subtitle">Ən yeni, dəbdə olan avtomobilləri axtarın və kəşf edin</p>
        </header>

        <div className="search-container">
          <input
            type="text"
            placeholder="Marka, model və ya il axtar..."
            className="search-input"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button onClick={searchData} className="search-button">
            Axtar
          </button>
        </div>

        <div className="grid">
          {car.map((item) => (
            <div key={item.id} className="card">
              <Link to={`/KoreyaCar/${item.id}`}><div className="img-container">
                <img src={item.images} alt={`${item.make} ${item.model}`} className="car-image" />
              </div>
              <div className="card-body">
                <h2 className="car-title">{item.make} {item.model}</h2>
                <p className="car-year">İl: {item.year}</p>
                
              </div></Link>
              
            </div>
          ))}
        </div>
      </div>
    )}
  </>
);
};

export default CustomCar;
