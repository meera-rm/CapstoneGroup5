import { HelmetProvider, Helmet } from 'react-helmet-async';
import aboutpic from '../Components/asset/studentstable.jpeg';
const About = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>ScholarSheep| About</title>
        </Helmet>
      </HelmetProvider>
      <h1 className='text-center text-teal-600 mt-6'>Scholar Sheep</h1>

      {/* <div className='lg:flex justify-center mt-20 md:'>
        <div className='relative h-0 mx-10 w-1/3 pb-2/3 sm:pt-1/3 lg:pt-1/3'>
          <img className=' absolute inset-0 w-96 h-96'
            src={aboutpic} alt=''/>
        </div>

        <div className='flex text-xl flex-col text-left items-center w-1/3'>
          <p>
          Welcome to ScholarSheep, the one and only app for teachers and
            parents to keep track of students' daily reading tasks. Our app
            incorporates a parent view and teacher view with the ability to log
            in for each view. Under the parent view, children can log their
            daily reading pages of the assigned reading. Under the teacher view,
            teachers can manage the reading list for their class, and keep track
            of each students progress.
          </p>
         </div>
      </div> */}


      <div class="mt-40 max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-80" src={aboutpic}alt="Modern building architecture"/>
    </div>
    <div class="p-8">
     
      <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Cultivating reading habits among children  </p>
      <p class="mt-2 text-slate-500">Welcome to ScholarSheep, the one and only app for teachers and
            parents to keep track of students' daily reading tasks. Our app
            incorporates a parent view and teacher view with the ability to log
            in for each view. Under the parent view, children can log their
            daily reading pages of the assigned reading. Under the teacher view,
            teachers can manage the reading list for their class, and keep track
            of each students progress..</p>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default About;
