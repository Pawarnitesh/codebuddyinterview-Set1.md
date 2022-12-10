import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const OtherInfo = ({ formData, setFormData, page, setPage, FormTitles }) => {
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    console.log(formData)
    axios
      .post('https://codebuddy.review/submit', formData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
    alert('form submitted successfully')
    navigate('/posts')
  }
  return (
    <div className="Other-info-container">
      <div className="row">
        <div className="col-md-12 form-group">
          <div className="col-md- form-group  position-relative">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="form-control"
              id="country"
              style={{ marginLeft: -10, marginRight: 2 }}
            >
              <option data-country-code="INDIA" value="+91">
                IN(+91)
              </option>
              <option data-country-code="AMERICA" value="+1">
                US(+1)
              </option>
            </select>
            <span>
              <input
                style={{ width: '100px' }}
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="enter phoneNumber..."
                required
                min="10"
                max="10"
                autoFocus
              />
            </span>
          </div>
        </div>
      </div>
      <label style={{ fontSize: '12px', marginLeft: -8 }}>
        <input type="checkbox" name="checkbox" defaultChecked required />
        Accept Terms And Conditions
      </label>
      <div className="footer" style={{ marginTop: 10 }}>
        <button
          style={{
            borderRadius: 10,
            marginLeft: -5,
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
          onClick={(e) => handleSubmit()}
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
            setPage((currPage) => currPage + 1)
          }}
        >
          Save and Next
        </button>
      </div>
    </div>
  )
}

export default OtherInfo
