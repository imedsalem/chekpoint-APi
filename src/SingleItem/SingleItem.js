import React from 'react'
import style from './SingleItem.module.css'

const SingleItem = ({el}) => {
    console.log(el)
    return (
        <div className={style.container}>
            <img className={style.img} src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000" alt="" />
            <h3 className={style.name}>Name : {el.name}</h3>
            <p className={style.p}>Address : {el.address.city}</p> 
            <p className={style.p}>phone : {el.phone}</p> 
            <p className={style.p}>email : {el.email}</p>
            <p className={style.p}>website : {el.website}</p>
        </div>
    )
}

export default SingleItem
