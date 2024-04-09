import  { useEffect, useState } from 'react'
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';
import ContactosListaEdit from './ContactosListaEdit';
// para listar la bd
import {collection,onSnapshot} from 'firebase/firestore';




const ListaContactos = () => {

    const [contactos, setContactos] = useState([])


    // para listar la bd de firebase en crudd
    useEffect(() => {
        onSnapshot(
          collection(db,'usuarios'),
          (snapshot)=>{
            const arregloUsuarios=snapshot.docs.map((documento)=>{
              // trae todo la data del doc, ademas del su id por separado para poder edit
              return {...documento.data(),id:documento.id}
                    })
                    setContactos(arregloUsuarios);
          },
          (error)=>{
            console.log(error);
          }
        );
    }, []);
    

  return (
    contactos.length>0 &&
    <ContenedorContactos>
        {contactos.map((contacto)=>(
            <ContactosListaEdit
            key={contacto.id}
            id={contacto.id}
            nombre={contacto.nombre}
            correo={contacto.correo}
            />
        ))}
    </ContenedorContactos>
  )
}

const ContenedorContactos=styled.div`
    margin-top:40px;
`;

export default ListaContactos