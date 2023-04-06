import React, { useRef, useState } from 'react';
import swal from "sweetalert"
import emailjs from '@emailjs/browser';
import linkedin from "../../assets/imgs/linkedin.png"



const Footer = () => {
    const form = useRef();
    const [input, setInput] = useState({
      email : "",
      message : ""
    })

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .send(
          "service_pnwe6gb",
          "template_lmj2k5k",
            input,
            "UcXhrFVfZhUn4qCR8"
          )
          .then(
            (result) => {
              console.log(result.text);
              swal({
                title: "Mensaje enviado con exito ",
                type: "success",
                icon: "success",
                buttons: false,
                timer: 800,
              })
              
              setInput({
                email: "",
                message: ""
              });
              window.location.reload()
    
            },
            (error) => {
              console.log(error.text);
              swal({
                title: "Error al enviar el mensaje",
                icon: "Warning",
              });
            }
          );
      };


    return ( 
        <div className='grid mt-40 py-5 lg:flex'>
       
          <div>
		<h1 className='text-center text-white text-2xl lg:ml-5'>Andrés Germain dev</h1>
       <br />
       <a href="https://www.linkedin.com/in/andres-germain-dev/">
       <img 
       className=' w-[15%] mx-auto sm:w-[10%] lg:w-[25%]' 
       src={linkedin} alt="linkeding img not found" />
       </a>

          </div>
          <div>
		<h1 className='font-light text-white mt-5 text-center text-2xl lg:ml-5'>Valentino Martinez dev</h1>
       <br />
       <a href="https://www.linkedin.com/in/valentinomartz/">
       <img 
       className=' w-[15%] mx-auto sm:w-[10%] lg:w-[25%]' 
       src={linkedin} alt="linkeding img not found" />
       </a>

  
      </div>
 <div className='grid mt-[5%] text-white w-[100%] mx-auto lg:mr-2 lg:w-[15%] '>
        <h1 className='text-lg text-center lg:mx-auto'>CONTACTO</h1>
        <form
        onSubmit={sendEmail}
         className='block mt-5 mx-auto lg:mx-auto'>
          <input 
          className='flex mt-2 text-white font-light shadow-lg rounded-md mx-auto bg-[#191919bd]'
          type="text" 
          placeholder='Email'
          name='email'
          onChange={(e) =>  setInput({
            ...input,
            [e.target.name] : e.target.value
          })}/>
          <textarea
          className='flex bg-[#191919bd] text-white font-light shadow-md shadow-[#191919] mt-2 rounded-md sm:mx-auto '
          rows={4} 
          cols={25} 
          type="text"
          name='message'
          placeholder='Inserte su mensaje'
          onChange={(e) => setInput({
            ...input,
            [e.target.name] : e.target.value
          })}
          />
          <button
          className='flex mt-5 text-white bg-[#19191998] mx-auto rounded-md' 
          type='submit'
          >
            Enviar
          </button>
          <h1 className="mx-auto mt-5 text-2xl text-center text-[#235760fa]">
      SingleStack
    </h1>
        </form>
      </div>
    
        </div>
     );
}

export default Footer;
