import React from 'react'
import Image from "gatsby-image"
import styles from "../../css/place.module.css"
import { Link } from "gatsby"

const Place = ({ place }) => {
    const { name, slug, images1 } = place;
    let mainImage = images1[0].fluid;
    return (
        <article className={styles.place}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="single place" />
                <Link fade className={styles.link} to={`/places/${slug}`}>Details</Link>
            </div>
            <div className={styles.footer}>
            <h3>{name}</h3>
            </div>
        </article>
    )
}

export default Place
