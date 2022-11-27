import React, { useState } from "react";
import FirstForm from "../Components/TeacherForm/FirstForm";
import SecondForm from "../Components/TeacherForm/SecondForm";
import ThirdForm from "../Components/TeacherForm/ThirdForm";
import teacher from '../Components/asset/teachersign.jpeg';

const TeacherSignUp = () => {
  const formList = ["FirstForm", "SecondForm", "ThirdForm"];

  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const initialValues = {
    // name: "",
    // lastname: "",
    // password: "",
    // confirmPassword: "",
    // username: "",
    // city: "1",
    // address: "",
    // zip: "",
    // terms: "",
    teacher_email: '',
    password: '',
    teacher_name: '',
    lastname:'',
    school_name: '',
    school_address: '',
    zipcode: '',
    school_district: '',
    class_subject: '',
  };
  const [values, setValues] = useState(initialValues);

  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <FirstForm formValues={values} onChange={onChange}></FirstForm>
          </div>
        );
      }
      case 1: {
        return (
          <SecondForm
            formValues={values}
            onChange={onChange}
            // option={states}
          ></SecondForm>
        );
      }
      case 2: {
        return <ThirdForm formValues={values} onChange={onChange}></ThirdForm>;
      }
      default:
        return null;
    }
  };

  // const states = [
  //   { id: "0", name: "Paris" },
  //   { id: "1", name: "London" },
  //   { id: "2", name: "Berlin" },
  //   { id: "3", name: "Warsaw" },
  // ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await setTimeout(() => {
      console.log("form", values);
    }, 2000);
    console.log(response)
    return response;
  };

  const setForm = (e) => {
    const name = e.target.innerText;
    switch (name) {
      case "Person Info": {
        return setPage(0);
      }
      case "Other Info": {
        return setPage(1);
      }
      case "Login Info": {
        return setPage(2);
      }
      default:
        setPage(0);
    }
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="grid  place-content-center items-center h-screen place-items-center  -mt-6">
      <div className='flex items-center mt-4 mb-2 justify-center'>
        <img className=' h-18 w-40 rounded-full' src={teacher} alt='' />
      </div>
       <ul className="flex justify-between w-full">
        <li
          onClick={setForm}
          className={
            page === 0 ? "bg-teal-600 w-2/6 rounded-lg  " : "bg: transparent"
          }
        >
          <div className="flex items-center ">
           
            <span
              className={
                page === 0
                  ? "ml-2 text-black font-medium"
                  : "ml-2 text-teal-500 cursor-pointer"
              }
            >
             Step 1
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 1 ? "bg-teal-600  w-2/6 rounded-lg" : "bg: transparent "
          }
        >
          <div className="flex items-center">
           
            <span
              className={
                page === 1
                  ? "ml-2 text-black font-medium"
                  : "ml-2 text-teal-500 cursor-pointer"
              }
            >
              Step 2{" "}
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 2 ? "bg-teal-600 w-2/6 rounded-lg" : "bg: transparent"
          }
        >
          <div className="flex items-center">
           
            <span
              className={
                page === 2
                  ? "ml-2 text-black font-medium"
                  : "ml-2 text-teal-500 cursor-pointer"
              }
            >
              {" "}
              Step 3{" "}
            </span>
          </div>
        </li>
      </ul> 
     
      <div className="flex-1">{handleForms()}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 place-content-center items-center">
        
        <button
          onClick={handlePrev}
          className="bg-teal-500  hover:bg-teal-600 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 "
          disabled={page === 0}
        >
          Prev
        </button>
        {page === 2 ? (
          <button
            onClick={handleSubmit}
            className="bg-teal-500 hover:bg-teal-600 rounded-md text-gray-800 font-bold py-2 px-4 "
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-teal-500 hover:bg-teal-600 rounded-md text-gray-800 font-bold py-2 px-4 "
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TeacherSignUp;
