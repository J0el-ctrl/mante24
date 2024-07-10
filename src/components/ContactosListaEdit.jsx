/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useState } from 'react';
import db from '../firebase/firebaseConfig';
//acceder al doc mediente su id,borrar doc por id y update por id
import {doc,deleteDoc,updateDoc} from 'firebase/firestore';



const ContactosListaEdit = ({nombre,correo,id}) => {

    const [editandoTarea, setEditandoTarea] = useState(false)
    const [editnombre, setEditnombre] = useState(nombre)
    const [editcorreo, setEditcorreo] = useState(correo)


    //editar
    const actualizarContacto = async(e) => { 
      e.preventDefault();
      try {
                  //db, su colleccion y el id del doc que quiere editar recibe en props
        await updateDoc(doc(db,'usuarios',id),{
          nombre:editnombre,
          correo:editcorreo
        });
      } catch (error) {
        console.log(error);
      }
      setEditandoTarea(false)
     }

    //recibe el id del onclick del id que asu vez recibe del props id
    const deleteContacto = async(id) => { 
      try {
        await deleteDoc(doc(db,'usuarios',id));
      } catch (error) {
        console.log(error);
        console.log('error el eliminar usuario');
      }
     }
     
  return (
    <ContenedorContacto>
        {
          editandoTarea?
          <form action="" onSubmit={actualizarContacto} >
              <Input 
                  type='text'
                  nombre='nombre'
                  value={editnombre}
                  onChange={(e)=>setEditnombre(e.target.value)}
              />
              <Input 
                  type='text'
                  nombre='correo'
                  value={editcorreo}
                  onChange={(e)=>setEditcorreo(e.target.value)}
              />
              <Boton type='submit' >Actualizar</Boton>
          </form>
          :
               <>
                     <Nombre>{nombre}</Nombre>
                     <Correo>{correo}</Correo>
                     <Boton onClick={()=>setEditandoTarea(!editandoTarea)} >Editar</Boton>
                     <Boton onClick={()=>deleteContacto(id)} >Borrar</Boton>
               </>
        }
   
    </ContenedorContacto>
  )
}

const ContenedorContacto = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
`;
 
const Nombre = styled.p`
    font-weight: bold;
`;
 
const Correo = styled.p`
    font-style: italic;
    color: #6B6B6B;
    margin: 5px 0;
`;
 
const Boton = styled.button`
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    margin: 0px 2px;
    margin-bottom: 10px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
 
    &:hover {
        background: #3D76E9;
    }
`;
 
const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    
    &:focus {
        border: 2px solid #3D76E9;
    }
`;

export default ContactosListaEdit