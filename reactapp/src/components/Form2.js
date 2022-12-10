import React from 'react'
const PersonalInfo = ({ formData, setFormData, page, setPage, FormTitles }) => {
  var letters = /^[A-Za-z]+$/

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    console.log(formData)
  }
  return (
    <>
      <div className="Personal-info-container">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="enter firstName..."
          minLength="2"
          maxLength="50"
          autoFocus
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="enter lastName..."
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="enter address..."
          minLength="10"
          required
        />
      </div>
      <div className="footer" style={{ marginTop: 15 }}>
        <button
          style={{
            borderRadius: 10,
            fontSize: '10px',
            fontWeight: 'bold',
            backgroundColor: '#ccc',
          }}
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1)
          }}
        >
          Prev
        </button>
        <button
          style={{
            marginLeft: 5,
            backgroundColor: '#ccc',
            borderRadius: 10,
            fontSize: '10px',
            fontWeight: 'bold',
          }}
          onClick={() => handleSubmit()}
        >
          Save
        </button>
        <button
          style={{
            marginLeft: 5,
            backgroundColor: '#ccc',
            borderRadius: 10,
            fontSize: '10px',
            fontWeight: 'bold',
          }}
          disabled={page == FormTitles.length - 1}
          onClick={() => {
            if (!formData.firstName || !formData.lastName || !formData.address)
              alert('Please fill the personal details')
            if (formData.firstName && formData.lastName && formData.address)
              setPage((currPage) => currPage + 1)
          }}
        >
          Save and Next
        </button>
      </div>
    </>
  )
}

export default PersonalInfo
