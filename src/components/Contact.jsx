import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { MdMail } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebook, FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent]=useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Configure your email service in EmailJS and get your user ID, template ID, and service ID
      const serviceID = 'service_3ip4sum';
      const templateID = 'template_l4w4oih';
      const userID = 'UTd7P8j2yf4pl6MGx';
  
      // Sending email using EmailJS
      emailjs.send(serviceID, templateID, {
        from_name: name,
        from_email: email,
        message: message,
      }, userID)
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          // You can add your success message or redirect to a thank you page here
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          // You can handle errors or display an error message here
        });
  
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setSent(true)
    };
  
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className='p-[20px] md:px-[100px] md:h-screen'
        >
            <div className=''>
                <div className='conatctcontainer flex items-center justify-center md:justify-start  gap-2  '>
                    
                    <h1 className='text-3xl flex gap-2 font-bold italic text-yellow-200'>
                        <p> CONTACT</p> <p>ME</p>
                    </h1>
                   
                </div>
                <div className='flex flex-wrap justify-center my-10'>
                
                     <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-[400px]'>
        <input type="text" className='p-3 w-full text-black bg-slate-700' id="name" name="name" placeholder='Enter Your Name...' value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <input type="email" className='p-3 w-full text-black bg-slate-700' id="email" name="email" placeholder='Email...' value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <textarea id="message" className='p-3 text-black bg-slate-700' name="message" placeholder='Message...' rows="6" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea><br />
       <div className='flex gap-3'><button type="submit" className='bg-blue-500 p-2 w-[100px]'>SEND</button>
       { sent?
          (
           <p className='text-green-500 self-center text-xl text-center'>Message Sent</p>
         ) : (
           <p className='text-red-500 text-center'></p>
         )
       }
       </div> 
      </form>
                </div>
            </div>
           
        </motion.div>
    );
}

export default Contact;

