import React, { useEffect, useState } from 'react'

export default function Hookeffect() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1)
  const getData = async (page = 1) => {
    const ff = await fetch(
      `https://reqres.in/api/users?page=${page}`
    )
    const response = await ff.json()
    setData(response.data)
    setTotal(response.total_pages)
    // console.log("data:", response);
  }
  const nextpage = () => {
    if (page >= total) {
      alert('this is last page')
    } else {
      setPage(page + 1)
    }
  }
  const prevpage = () => {
    if (page === 0) {
      alert('This is 1st page')
    } else {
      setPage(page - 1)
    }
  }
  useEffect(() => {
    getData(page);
  }, [page])
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        {data.map((user) => (
          <div key={user.id}>
            <img src={user.avatar} alt={user.first_name} style={{ borderRadius: '50%' }} />
            <h5>{user.first_name} {user.last_name}</h5>
            <hr />
            <a href={user.email}>{user.email}</a>
          </div>
        ))}
      </div><br />
      <div>
        <button onClick={prevpage}>Prev page</button>
        <button onClick={nextpage}>Next page</button>
      </div>
    </>
  )
}
