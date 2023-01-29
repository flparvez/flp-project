import React from 'react'

function GetData({ data }) {
   
    console.log(data);
    
    return (
        <div>
     
      <div>
      <h2>Get Data</h2>
     
      </div>
      
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://127.0.0.1:8000/api/blogs/`)
    const data = await res.json()
  console.log(data)
    // Pass data to the page via props
    return { props: { data } }
  }


export default GetData

