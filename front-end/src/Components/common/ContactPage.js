import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Swal from 'sweetalert2';

import React from 'react';
const SERVICE_ID = 'service_1jgz0td';
const TEMPLATE_ID = 'template_5e5nqy2';
const USER_ID = '3--a•••••••••••••••••';
const ContactForm = () => {
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
        toastifySuccess();
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className='mt-10  flex flex-col justify-center items-center '>
      <form
        onSubmit={handleOnSubmit}
        className='bg-white shadow-2xl bg-slate-100 border-0 border-slate-400 rounded px-2 pt-6 pb-8 mb-4'
      >
        <div className='grid grid-cols-2 gap-4 p-2'>
          <div className='flex flex-col text-color-black text-2xl'>
            <label className='text-teal-600' htmlFor='first-name'>
              First name
            </label>
            <input
              type='text'
              id='first-name'
              name='first-name'
              className='form-input px-3 py-2 rounded-md border-2 border-black outine'
              required
            />
          </div>
          <div className='flex flex-col text-color-black text-2xl'>
            <label className='text-teal-600' htmlFor='last-name'>
              Last name
            </label>
            <input
              type='text'
              id='last-name'
              name='last-name'
              className='form-input px-3 py-2 rounded-md border-2 border-black outine'
              required
            />
          </div>
          <div className='flex flex-col md:w-full  text-color-black text-2xl'>
            <label className='text-teal-600' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='form-input px-3 py-2 rounded-md border-2 border-black outine'
              required
            />
          </div>
          <div className='flex flex-col  mb-4 md:w-full text-color-black text-2xl'>
            <label className='text-teal-600' htmlFor='phone'>
              <div className='flex align-items'>
                Phone
                <span className='invisible md:visibl none ml-auto opacity-75'>
                  Optional
                </span>
              </div>
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='form-input px-3 py-2 rounded-md border-2 border-black outine'
            />
          </div>
          <div className='flex flex-col col-span-2  md:w-full text-color-black text-2xl'>
            <label className='text-teal-600' htmlFor='subject'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              className='form-input px-3 py-2 rounded-md border-2 border-black outine'
              required
            />
          </div>
          <div className='flex flex-col col-span-2 text-color-black text-2xl'>
            <label className='text-teal-600' htmlFor='subject'>
              <div className='flex align-items'>
                Message
                <span className='ml-auto opacity-75'>Max. 500 characters</span>
              </div>
            </label>
            <textarea
              maxLength='500'
              rows='4'
              type='text'
              id='subject'
              name='subject'
              className='form-input px-3 py-2 rounded-md border-2 border-black outine'
              required
            />
          </div>
        </div>
        <div className='flex justify-end py-4 text-color-black text-2xl'>
          <button
            type='submit'
            class='bg-teal-500 text-black font-bold py-2 px-4 rounded-md focus:ring focus:ring-teal-500 hover:bg-teal-400'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

{
  /* // const { 
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful


  // // Function called on submit that uses emailjs to send email of valid contact form
  // const onSubmit = async (data) => {
  //   // Destrcture data object
  //   const { name, email, subject, message } = data;
  //   try {
  //     const templateParams = {
  //       name,
  //       email,
  //       subject,
  //       message,
  //     };

  //     await emailjs.send(
  //       process.env.REACT_APP_SERVICE_ID,
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       templateParams,
  //       process.env.REACT_APP_USER_ID
  //     );

  //     reset();
  //     toastifySuccess();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // return (
  //   <div className='ContactForm'>
      {/* <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form
                id='contact-form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form *
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && (
                      <span className='errorMessage'>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form *
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject',
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form *
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true,
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && (
                      <span className='errorMessage'>
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div> */
}
{
  /*}   </div> */
}

{
  /* 
// https://gist.github.com/ksentak/d39b1cccae95bbce50806e62af79793d
//Keaton Sentak--Simple React Contact Form Without Back-End */
}
