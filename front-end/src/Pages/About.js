import { motion } from 'framer-motion';
// import { HelmetProvider, Helmet } from "react-helmet-async";
const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			className='home'
		>
			{/* <HelmetProvider>
      <Helmet>
        <title>TrackerLux| Home</title>
      </Helmet>
    </HelmetProvider> */}
			<h1
				style={{
					color: 'teal',
					margin: '6rem auto',
					textAlign: 'center',
					fontFamily: 'Georgia',
      
				}}
			>
				Scholar Sheep
			</h1>
			<div className='home-header'>

				<p
        style={{
          color: 'teal',
          fontSize: 'x-large',
          fontFamily: 'Georgia',
          display: 'flex',
        }}
        >
          <div>
          <img 
          style={{
            width: '650px',
            display: 'flex',
          }}
          src="https://media1.thehungryjpeg.com/thumbs/800_3565494_tntw1101gpkivlxp8j525yx2u3vd6aqgdvm2aexb.jpg" alt=""/>
          </div>
          <br></br>
          <br></br>
          <div>
          
					Welcome to ScholarSheep, the one and only app for teachers and parents
					to keep track of students' daily reading tasks. Our app incorporates a
					parent view and teacher view with the ability to log in for each view.
					Under the parent view, children can log their daily reading pages of
					the assigned reading. Under the teacher view, teachers can manage
					the reading list for their class, and keep track of each students progress.
          </div>
				</p>

       
			</div>
		</motion.div>
	);
};

export default About;
