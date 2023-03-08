import React from 'react'
import { useState } from 'react'

const Section = () => {
  const [data, setdata] = useState('')
    
  const HandleData=()=> {  
    fetch('http://www.boredapi.com/api/activity/')
        .then((res)=>{
            return res.json()
        })

        .then((res)=>{
            setdata(res.activity)
        })

        .catch((err)=>{console.log(err)})
  }  

  return (
    <main>
        <section>
            <article>
                <div className='divButton'>
                    <h1>Are you Bored ?</h1>
                    <p>Well let's find out something to do here</p>
                    <button onClick={HandleData}>Find something to do !</button>
                </div>

                <div className='events'>
                  <h3>{data}</h3>
                </div>
            </article>
        </section>
    </main>
  )
}

export default Section