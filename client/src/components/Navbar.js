import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
    nav_background: {
        height: '70px',
        width: '100%',
        backgroundColor: '#D94234'
    },
    container: {
        maxWidth: '1500px',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nav_left: {
        margin: '0 0 0 30px',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav_right: {
        margin: '0 30px 0 0',
        padding: '0',
        display: 'flex',
        justifyContent: 'center'
    },
    nav_brand: {
        margin: '0 26px 0 0',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold'
    },
    nav_item: {
        margin: '0 26px 0 0',
        color: 'white'
    },
    nav_right_item: {
        margin: '0',
        color: 'white'
    }
}

export const Navbar = () => {
    return (
        <div style={styles.nav_background}>
            <div style={styles.container}>
                <div>
                    <ul style={styles.nav_left}>
                        <Link to='/' style={styles.nav_brand}>QuickerMealPrep.com</Link>
                        <Link to='/bytime' style={styles.nav_item}>Find Recipes</Link>
                    </ul>
                </div>
                <div>
                    <ul style={styles.nav_right}>
                        <Link to='/' style={styles.nav_right_item}>Learn More</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}