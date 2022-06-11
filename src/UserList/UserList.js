import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleItem from '../SingleItem/SingleItem';
import style from './UserList.module.css'

const UserList = () => {

    ////////////
    const fetchURL = 'https://jsonplaceholder.typicode.com/users';
    let [ data, setData ] = useState([])

    ////////////
    useEffect(() => {
        async function getDataFromAPI() {
            try {
                const request = await axios(fetchURL);
                setData(request.data)
            } catch (error) {
                console.log(error)
            }
        }
            getDataFromAPI()
        },[]);

    return (
    <div className={style.container}>
        <div className={style.containerTitle} >
            <h1 className={style.title}>All Users From DataBase</h1>
        </div>
        {data.map(el=> <SingleItem el={el}/> )}
    </div>
    )
}

export default UserList