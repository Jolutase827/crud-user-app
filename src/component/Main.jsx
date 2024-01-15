import React, { useState } from 'react'
import Formulario from './Formulario'
import MuestraUsuarios from './MuestraUsuarios'
import { v4 as uuid4 } from 'uuid';
function Main()  {
    const [users,setUsers] = useState([]);
    const [id,setId] = useState(null);
    const addUser = (dataInput,e)=>{
        const newUser = {
            id: uuid4(),
            name: dataInput.name,
            username: dataInput.username
        }
        const newUsers = [...users,newUser];
        setUsers(newUsers);
    }
    const cogerId = (id)=>{
        setId(id)
    }
    const editUser = (dataInput,e)=>{
        setId(null)
        const newUser = {
            id: id,
            name: dataInput.name,
            username: dataInput.username
        }
        const newUsers = [...users.filter(user=>user.id!==id),newUser];
        setUsers(newUsers);
    }
    const borrarUser = (id)=>{
        const newUsers = users.filter(user=>user.id!==id);
        setUsers(newUsers);
    }
    return (
      <main className='w-[100%] flex justify-around mt-5'>
        <Formulario
            title={(id==null)?'Añadir usuario':'Editar usuario '+users.find(user=>user.id===id).name}
            button={(id==null)?'Crear usuario':'Editar usuario'}
            onSubmit={ (id==null)?addUser:editUser }
        />
        <MuestraUsuarios 
            users={ users }
            borrarUser={borrarUser}
            pillarId={cogerId}
        />
      </main>
    )
}

export default Main