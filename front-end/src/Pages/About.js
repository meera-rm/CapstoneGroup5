import { HelmetProvider, Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>ScholarSheep| About</title>
        </Helmet>
      </HelmetProvider>

      <div class='max-w-screen-xl px-4 mx-auto md:px-8'>
        <div class='mb-10 md:mb-16'>
          <h2
            class='
      mt-10
        mb-4
        text-2xl
        font-bold
        text-center text-gray-800
        lg:text-3xl
        md:mb-6
      '
          >
            Meet Our Team
          </h2>

          <p class='max-w-screen-md mx-auto text-center text-gray-500 md:text-lg'>
            ScholarSheep Team is available for all your questions and we are an
            email away.
          </p>
        </div>

        <div class='grid gap-4 md:grid-cols-3'>
          <div class='p-4 shadow'>
            <div class='h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80'>
              <img
                src='https://avatars.githubusercontent.com/u/46873861?v=4'
                alt='name'
                class='object-cover object-center w-full h-full'
              />
            </div>

            <div class='flex flex-col items-center justify-center'>
              <div class='font-bold text-indigo-500 md:text-lg'>
                Meera Ramesh
              </div>
              <p class='mb-3 text-sm text-gray-500 md:text-base md:mb-4'>
                Web Developer
              </p>

              <div class='flex'>
                <div class='flex gap-4'>
                  <a
                    href='https://github.com'
                    aria-label='Homepage'
                    class='footer-octicon'
                    title='GitHub'
                  >
                    <svg
                      aria-hidden='true'
                      class='octicon octicon-mark-github'
                      height='24'
                      version='1.1'
                      viewBox='0 0 16 16'
                      width='24'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'
                      ></path>
                    </svg>
                  </a>
                  <a href='https://www.linkedin.com/in/meeraramesh/'>
                    <svg
                      class='w-6 h-6 text-blue-500 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class='p-4 shadow'>
            <div class='h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80'>
              <img
                src='https://avatars.githubusercontent.com/u/96316119?v=4'
                alt='name'
                class='object-cover object-center w-full h-full'
              />
            </div>

            <div class='flex flex-col items-center justify-center'>
              <div class='font-bold text-indigo-500 md:text-lg'>
                Taryne Leach
              </div>
              <p class='mb-3 text-sm text-gray-500 md:text-base md:mb-4'>
                Web Developer
              </p>

              <div class='flex'>
                <div class='flex gap-4'>
                  <a
                    href='https://github.com/TaryneLeach'
                    aria-label='Homepage'
                    class='footer-octicon'
                    title='GitHub'
                  >
                    <svg
                      aria-hidden='true'
                      class='octicon octicon-mark-github'
                      height='24'
                      version='1.1'
                      viewBox='0 0 16 16'
                      width='24'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'
                      ></path>
                    </svg>
                  </a>
                  <a href='https://www.linkedin.com/in/taryne-leachgonzalez/'>
                    <svg
                      class='w-6 h-6 text-blue-500 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class='p-4 shadow'>
            <div class='h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80'>
              <img
                src='https://avatars.githubusercontent.com/u/96357523?v=4'
                alt='name'
                class='object-cover object-center w-full h-full'
              />
            </div>

            <div class='flex flex-col items-center justify-center'>
              <div class='font-bold text-indigo-500 md:text-lg'>
                Derek Peterson
              </div>
              <p class='mb-3 text-sm text-gray-500 md:text-base md:mb-4'>
                Software Engineer
              </p>

              <div class='flex'>
                <div class='flex gap-4'>
                  <a
                    href='https://github.com/derekpeterson-plutus'
                    aria-label='Homepage'
                    class='footer-octicon'
                    title='GitHub'
                  >
                    <svg
                      aria-hidden='true'
                      class='octicon octicon-mark-github'
                      height='24'
                      version='1.1'
                      viewBox='0 0 16 16'
                      width='24'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'
                      ></path>
                    </svg>
                  </a>
                  <a href='https://www.linkedin.com/in/derekpeterson-plutus/'>
                    <svg
                      class='w-6 h-6 text-blue-500 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
