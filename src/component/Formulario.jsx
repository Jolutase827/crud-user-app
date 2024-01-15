import React from 'react'
import { useForm } from "react-hook-form";

function Formulario(props) {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

    
    return (
      <div className='w-[45%]'>
        <h1 className='text-[30px]'>{props.title}</h1>
        <form className='mt-5 flex flex-col'
            onSubmit={handleSubmit(props.onSubmit)}>
            <label className='font-semibold'>Nombre</label>
            <input type="text" name="name" className='p-3 rounded-md border-solid border-[2px] border-gray-400 w-[50%]' {...register("name", {
              required: "No has rellenado el Nombre",
            })}
            aria-invalid={errors.name ? "true" : "false"}/>
            {errors.name && (
            <div className="text-red-900" role="alert">
              {errors.name.message}
            </div>
          )}
            <label className='font-semibold mt-3'>UserName</label>
            <input type="text" name="username" className='p-3 rounded-md border-solid border-[2px] border-gray-400 w-[50%]' {...register("username", {
              required: "No has rellenado el UserName",
            })}
            aria-invalid={errors.username ? "true" : "false"}/>
            {errors.username && (
            <div className="text-red-900" role="alert">
              {errors.username.message}
            </div>
          )}
            <button className='w-[15%] bg-blue-600 rounded-md border-solid p-2 text-white mt-2 hover:bg-blue-700 transition hover:transition'>{props.button}</button>
        </form>
      </div>
    )

}

export default Formulario