import { useFormik } from 'formik';
import React from 'react';
import styles from '../styles/user.module.css';
import { resetPasswordValidation } from '../helpers/validate';

export default function Reset() {

  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_pwd: ''
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);

    }
  })

  return (
    <div className="container mx-auto">

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{ width: "40%" }}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter new password.
            </span>
          </div>

          <form className='py-20' onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('password')}
                className={styles.textbox}
                type="text"
                placeholder='New Password'
              />
              <input
                {...formik.getFieldProps('confirm_pwd')}
                className={styles.textbox}
                type="text"
                placeholder='Repeat Password'
              />
              <button className={styles.btn} type='submit'>Reset</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}