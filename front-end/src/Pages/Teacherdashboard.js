import React from 'react';

function Teacherdashboard() {
  return (
    <form class='max-w-[90%] mt-20 md:h-screen md:items-center md:justify-center'>
      <div class='md:flex md:items-center mb-6'>
        <div class='md:w-1/3'>
          <label
            class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
            for='inline-full-name'
          >
            Teacher Name
          </label>
        </div>
        <div class='md:w-2/3'>
          <input
            class='bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
            id='inline-full-name'
            type='text'
          />
        </div>
      </div>
      <div class='md:flex md:items-center mb-6'>
        <div class='md:w-1/3'>
          <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
            Class
          </label>
        </div>
        <div class='md:w-2/3'>
          <input
            class='bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
            id='inline-password'
            type='text'
          />
        </div>
      </div>

      <div class='md:flex md:items-center mb-8'>
        <div class='md:w-1/3'>
          <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
            Grade
          </label>
        </div>
        <div class='md:w-2/3'>
          <input
            class='bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
            id='inline-password'
            type='text'
          />
        </div>
      </div>

      <div class='md:flex md:items-center'>
        <div class='md:w-1/3'></div>
        <div class='md:w-2/3'>
          <button
            class='mb-8 shadow bg-green-500 hover:text-blue-600 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg'
            type='button'
          >
            Add Student
          </button>
        </div>
      </div>

      <div className='ml-[280px] items-center justify-center overflow-x-hidden'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full border text-center'>
                <thead className='border-b'>
                  <tr>
                    <th
                      scope='col'
                      className='text-sm bg-gray-400 font-bold text-gray-900 px-6 py-4 border-r'
                    >
                      Student ID
                    </th>
                    <th
                      scope='col'
                      className='text-sm bg-gray-400 font-bold text-gray-900 px-6 py-4 border-r'
                    >
                      Student's Name
                    </th>
                    <th
                      scope='col'
                      className='text-sm bg-gray-400 font-bold text-gray-900 px-6 py-4 border-r'
                    >
                      Reading Level
                    </th>
                    <th
                      scope='col'
                      className='text-sm bg-gray-400 font-bold text-gray-900 px-6 py-4 border-r'
                    >
                      View Student
                    </th>
                    <th
                      scope='col'
                      className='text-sm bg-gray-400 font-bold text-gray-900 px-6 py-4 border-r'
                    >
                      Edit Info
                    </th>
                    <th
                      scope='col'
                      className='text-sm bg-gray-400 font-bold text-gray-900 px-6 py-4'
                    >
                      Delete Info
                    </th>
                  </tr>
                </thead>
                <tbody className='justify-center items-center'>
                  <tr className='border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r'>
                      1
                    </td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r'>
                      A
                    </td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r'>
                      B
                    </td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r'>
                      <button
                        class='mb-8 shadow bg-green-500 hover:text-blue-600 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg'
                        type='button'
                      >
                        View
                      </button>
                    </td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r'>
                      <button
                        class='mb-8 shadow bg-green-500 hover:text-blue-600 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg'
                        type='button'
                      >
                        Edit
                      </button>
                    </td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                      <button
                        class='mb-8 shadow bg-green-500 hover:text-blue-600 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg'
                        type='button'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Teacherdashboard;
