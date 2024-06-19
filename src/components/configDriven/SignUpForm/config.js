// signupFormConfig.js

const signupFormConfig = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      required: true,
      value: '',
      touched: false,
      validation: {
        required: true,
        minLength: 3,
        maxLength: 20,
      },
      errorMessage: {
        required: 'Username is required',
        minLength: 'Username should be at least 3 characters long',
        maxLength: 'Username cannot exceed 20 characters',
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true,
      value: '',
      touched: false,
      validation: {
        required: true,
        pattern: /^\S+@\S+\.\S+$/,
      },
      errorMessage: {
        required: 'Email is required',
        pattern: 'Invalid email format',
      },
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      required: true,
      value: '',
      touched: false,
      validation: {
        required: true,
        minLength: 6,
      },
      errorMessage: {
        required: 'Password is required',
        minLength: 'Password should be at least 6 characters long',
      },
    },
  ];
  
  export default signupFormConfig;
  