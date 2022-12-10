import React, { useState } from 'react'
import SignUp from './Form1'
import Paper from '@mui/material/Paper'
import PersonalInfo from './Form2'
import OtherInfo from './Form3'

const Form = () => {
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
  })

  const FormTitles = ['Sign Up', 'Personal Info', 'Other Info']

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <SignUp
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
          FormTitles={FormTitles}
        />
      )
    } else if (page === 1) {
      return (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
          FormTitles={FormTitles}
        />
      )
    } else {
      return (
        <OtherInfo
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
          FormTitles={FormTitles}
        />
      )
    }
  }
  return (
    <>
      <div className="form" style={{ marginTop: '50px' }}>
        <div
          className="form-container"
          style={{
            maxWidth: '350px',
            height: '200px',
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: 30,
            paddingBottom: 10,
            margin: 'auto',
          }}
        >
          <Paper sx={{ marginTop: '10px', marginBottom: '10px' }}>
            <div
              className="header"
              style={{ fontSize: 20, fontWeight: 'bold', margin: 'auto' }}
            >
              {FormTitles[page]}
            </div>
            <div
              className="body"
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                width: 300,
                margin: 'auto',
                padding: '20px 20px',
              }}
            >
              {pageDisplay()}
            </div>
          </Paper>
        </div>
      </div>
    </>
  )
}

export default Form
