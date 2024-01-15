import React from 'react'

function MuestraUsuarios(props) {
  
    return (
        <div className='w-[47.5%]'>
            <h1 className='text-[30px]'>Ver/Gestionar Usuarios</h1>
            <table>
                <tr >
                    <th>Nombre</th>
                    <th>Username</th>
                    <th>Acciones</th>
                </tr>
                
                {
                    props.users.map(user=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td><button className='bg-white border-gray-700 hover:bg-slate-700 hover:text-white border-[2px] p-3 rounded-md transition  hover:transition' onClick={(e)=>props.pillarId(user.id)}>Editar</button><button className='bg-white border-gray-700 border-[2px] p-3 rounded-md hover:bg-slate-700 hover:text-white transition  hover:transition' onClick={e=>props.borrarUser(user.id)}>Borrar</button></td>
                    </tr>
                    ))
                }

            </table>
        </div>
    )

}

export default MuestraUsuarios