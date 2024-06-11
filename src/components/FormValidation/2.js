import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required').min(3, 'First name should be at least 3 characters long'),
  lastName: yup.string().required('Last name is required').min(3, 'Last name should be at least 3 characters long'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  password: yup.string().required('Password is required').min(6, 'Password should be at least 6 characters long'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match').required('Confirm password is required'),
});

const Form = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" ref={register} />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" ref={register} />
          {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        </div>
        <div>
          <label>Email Address</label>
          <input type="text" name="email" ref={register} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" ref={register} />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" ref={register} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" disabled={formState.isSubmitting}>Register</button>
      </form>
    </div>
  );
};

export default Form;
