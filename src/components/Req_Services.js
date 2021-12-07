import { useState, useEffect } from 'react'

const Req_Services = () => {

  const [id, setID] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [doctor_id, setDoctor_id] = useState([]);

  const [service, setServices] = useState([]);

  async function addService(e) {
    e.preventDefault();

    let body = { name, price, doctor_id }

    const service = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }

    try {
      await fetch("/services", service);
      alert("Сервис добавлен")
    } catch (error) {
      alert("Error")
    }
  }

  useEffect(() => {
    fetch("/services")
      .then(response => response.json())
      .then((data) => setServices(data))
  }, [])


  async function getService(e) {
    e.preventDefault();
    try {
      await fetch(`/services/${id}`)
        .then(response => response.json())
        .then((data) => setServices(data))
    } catch (error) {
      alert("Error fetching services")
    }

  }

  return (
    <div>
      <form onSubmit={addService}>
        <h2>ADD SERVICE</h2>
        <input type="text" required placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" required placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        <input type="text" required placeholder="Doctor ID" onChange={(e) => setDoctor_id(e.target.value)} />
        <button type="submit">ADD SERVICE</button>
      </form>
      <div className="test">
        <form onSubmit={getService}>
        <input type="text" required placeholder="ID" onChange={(e) => setID(e.target.value)} />
        <button type="submit">GET</button>
        </form>
        <table>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>doctor_id</th>
          {
            service.map((service, index) => {
              return (
                <tr>
                  <td key={index}>{service.id}</td>
                  <td key={index}>{service.name}</td>
                  <td key={index}>{service.price}</td>
                  <td key={index}>{service.doctor_id}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Req_Services
