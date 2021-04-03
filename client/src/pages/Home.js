import {useEffect} from 'react';
import { Section } from '../components/Section';
import salad from '../images/salad.jpg';
import meals from '../images/meals.jpg';
import pancakes from '../images/pancakes.jpg';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const styles = {
    section: {
        backgroundImage: `url(${salad})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    container: {
        maxWidth: '1200px',
        position: 'relative',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    section_content: {
        margin: '0 0 8% 0'
    },
    section2: {
        margin: '160px 0 0 0',
        height: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    nav_item: {
        backgroundColor: '#d94234',
        fontFamily: 'europa, sans-serif',
        color: 'white',
        padding: '20px 30px',
        margin: '0 0 0 10px',
        boxShadow: '0 5px 4px #616161',
        "&:hover": {
            color: 'black'
        }
    },
    h2: {
        fontSize: '46px',
        fontFamily: 'europa, sans-serif',
        margin: '0 0 10px 0'
    },
    how_it_works: {
        fontSize: '70px',
        margin: '0 0 30px 0'
    },
    how_it_works_details: {
        fontSize: '24px',
        margin: '0 0 80px 0',
        width: '60%'
    },
    p: {
        fontSize: '24px',
        margin: '0 0 40px 0'
    },
    photo_container: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    },
    img: {
        height: '65%',
        margin: '0 40px',
    },
    "&:hover": {
        color: 'black'
    }
}

export const Home = () => {
    const history = useHistory();


    useEffect(() => {
        gsap.from("img", {
            duration: 3,
            ease: 'power4.out',
            y: '15%'
        })
        gsap.from("img", {
            duration: 3,
            ease: 'circ.out',
            opacity: 0
        })
    }, [])



    return (
        <>
            <div className="container">
                <Section style={styles.section}>
                    <div style={styles.container}>
                        <div style={styles.section_content}>
                            <h2 style={styles.h2}>Quicker Meals</h2>
                            <p style={styles.p}>Find a new recipe that can be prepared within your schedule</p>
                            <Button onClick={() => history.push('/bytime')}>Prep now</Button>
                        </div>
                    </div>
                </Section>
                <Section style={styles.section2}>
                    <h2 style={styles.how_it_works}>How It Works</h2>
                    <p style={styles.how_it_works_details}>We provide an easy way for you to find new recipes. 
                    Filter through 300,000+ recipes at the click of a button to find a meal that matches your given time constraints.
                    Our goal is to have you spend less time thinking about what to make, and more time making it.
                     </p>
                    <div className="img-container">
                        <img className="img" src={meals} alt="" />
                        <img className="img" src={pancakes} alt="" />
                    </div>
                </Section>
            </div>
        </>
    )
}
