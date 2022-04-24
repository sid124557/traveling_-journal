import React from 'react'
import location__icon from "../../assates/4781517.png"
import styles from "./cards.module.css"

export default function Card(props){
    let img=`../../assates/${props.image}`
    return(
        <>
    <div className={styles.card__contaner}>
        <img src={`../../assates/${props.image}`} alt="#" className={styles.card__img} />
        <div className={styles.img__explation}>
            <div className={styles.card__contaner__2}>
                <img src={location__icon} alt="#" className={styles.location__logo}/>
                <strong className={styles.main__text} >{props.location} </strong>
                <span className={styles.location__text}> view on google maps </span>
            </div>
            <div className={styles.img_long_description}>
                <h2 className={styles.location__text_2} >{props.titals}</h2>
                <h2 className={styles.date}>12 Jan, 2021 - 24 Jan, 2021</h2>
                <p className={styles.main__paragraph}>{props.description}</p>
            </div>
        </div>
    </div>
    <hr className={styles.bar}/>
    </>
    )
}