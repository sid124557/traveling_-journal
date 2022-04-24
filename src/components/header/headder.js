import React from 'react';
import icon from "../../assates/Fill 213.png"
import styles from './headder.module.css'

export default function Header()
{
    return(
        
           <div className={styles.headder}> 
                <img  className={styles.icon} alt="#" src={icon}/>
                <div className={styles.headder__text}> my traveling general</div>
           </div>
        
    )
}