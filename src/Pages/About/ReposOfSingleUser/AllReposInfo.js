import { useState, useEffect } from 'react';
import Loading from './Loading';
import Profile from './Profile';

// const singleUser = `https://api.github.com/users/meera-ramesh19`
// const repos = `https://api.github.com/users/meera-ramesh19/repos?per_page=5`
// https://api.github.com/users/meera-ramesh19/repos?page=1&per_page=10&sort=updated

function AllReposInfo() {
  //https://api.github.com/repos/meera-ramesh19/CapstoneGroup5
  const frontendvalue = 564405953;
  const backendvalue = 620460375;

  const [items, setItems] = useState([]);
  // Change this to any username whose repositories you want to get
  const [user] = useState('meera-ramesh19');

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=8&sort=updated`
      );
      const data = await res.json();
      setItems(data);
      console.log(data);
    };

    fetchRepos();
  }, [user]);

  return (
    <>
      <div className='pt-10'>
        <h1 className='mb-10 font-bold text-2xl'>
          Viewing {user}'s repository
        </h1>
      </div>

      {!items ? (
        <Loading />
      ) : (
        // <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20 m-auto'>
        <div className='text-center m-auto'>
          <div className=' w-1/2 m-auto pt-10 pb-10'>
            {items
              .filter((item) => 
                item.id===backendvalue   || item.id===frontendvalue   
              )
              .map((item) => (
                <Profile key={item.id} {...item} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AllReposInfo;
