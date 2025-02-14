import { useState } from 'react';
import './App.css'
import CrearActividad  from './crearActividad/CrearActividad';
import DetalleActividad from './detalleActividad/DetalleActividad'; 
import ItemActividad from './itemActividad/ItemActividad';
import Datos from './data/todo.json'


function App() {
  const blankData = {"id":"", 
    "nombre":"",
    "descripcion":"", 
    "estado":false, 
    "fecha":""};
  const [data, setData] = useState(Datos);
  const [itemData, setItemData] = useState(blankData);

  const handleClicAdd = (value) =>{
    setData(value);
  };

  const handleClicDetail = (value) =>{
    setItemData(value);
  };

  const handleClickUpdate = (value) =>{
    const dataUpdate = data.map((item)=>{
        if (item.id == value.id) {
          return { ...item, ...value };
        }
        return item;
    })
    setItemData(value);
    setData(dataUpdate);
  };

  return (
    <div className="principal">
    <header className="header"><h1>To do list</h1></header>
    <main className="main">
      <aside className="aside">
        <CrearActividad 
          dato = {data} 
          agregar ={handleClicAdd}/>
        <DetalleActividad 
          changeActivity={handleClickUpdate}  
          itemData={itemData} />
      </aside>
      <section className="section">
        <h2>Lista de actividades</h2>
        {data.map((value,index) => 
          <ItemActividad 
          key={index}
          id={value.id}
          data={value}
          viewDetail = {handleClicDetail}
          />)}
      </section>
    </main>
  </div>
  )
}

export default App
