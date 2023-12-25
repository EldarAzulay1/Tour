import React, { useEffect, useState } from 'react'
import { Loading } from './Loading';
import { Tours } from './Tours';
import './tours.css'

export default function AppTour() {
    const url = 'https://course-api.com/react-tours-project';
    const [isLoading, setLoaing] = useState(true);
    const [listTours, setList] = useState([]);
    useEffect(() => {
        doApi();
    }, [])
    const doApi = async () => {
        setLoaing(true);
        let tours = await fetch(url)
        let data = await tours.json();
        setList(data)
        setLoaing(false);
    }
    if (isLoading) {
        return (
            <div className='title'>
                <Loading></Loading>

            </div>
        )
    }

    const removeItem = (id) => {
        let tours = listTours.filter(item => {
            return item.id != id;
        });
        setList(tours);
    }

    if (listTours.length == 0) {
        return (
            <main className='title'>
                <h2 >No More Tours</h2>
                <button className='btn-refresh' onClick={doApi}>Refresh</button>
            </main>
        )
    }
    return (
        <main >
            <Tours tours={listTours} remove={removeItem} />
        </main>
    )
}


