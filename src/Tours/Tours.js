import React from 'react'
import './tours.css'
import { Tour } from './Tour'
export const Tours = ({ tours , remove }) => {

    return (
        <section>
            <div>
                <h1 className='title'>Our Tours</h1>
                <div className='title-underline'></div>
            </div>
            <div className='tours'>
                {
                    tours.map(tour => {
                       return <Tour key={tour.id} {...tour} remove={remove}></Tour>
                    })
                }
            </div>


        </section>
    )
}
