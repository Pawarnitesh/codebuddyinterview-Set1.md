import React, { useState } from 'react'
const Form1 = ({ formData, setFormData, page, setPage, FormTitles }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    console.log(formData)
  }
  return (
    <>
      <div className="sign-up-container">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="enter emailId..."
          autoFocus
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="enter password..."
          required
        />
      </div>
      <div className="footer" style={{ marginTop: 15 }}>
        <button
          style={{
            borderRadius: 10,
            fontWeight: 'bold',
            fontSize: '10px',
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
            if (!formData.email || !formData.password)
              alert('Please enter Email and Password')
            if (formData.email && formData.password)
              setPage((currPage) => currPage + 1)
          }}
        >
          Save and Next
        </button>
      </div>
    </>
  )
}

export default Form1
