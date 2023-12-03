import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yup.string().required().min(3),
  email: yup.string().required().email(),
  phone: yup.string().required().length(10),
  message: yup.string().required(),
});

const Form = () => {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = data => {
    console.log(data);
  };

  const handleChange = event => {
    setValue(event.target.name, event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        type="text"
        name="fullName"
        placeholder="Full name"
        {...register('fullName')}
        value={formState.data?.fullName}
        onChange={handleChange}
      />
      {formState.errors.fullName && <p>{formState.errors.fullName.message}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        {...register('email')}
        value={formState.data?.email || ''}
        onChange={handleChange}
      />
      {formState.errors.email && <p>{formState.errors.email.message}</p>}

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        {...register('phone')}
        value={formState.data?.phone || ''}
        onChange={handleChange}
      />
      {formState.errors.phone && <p>{formState.errors.phone.message}</p>}

      <textarea
        name="message"
        placeholder="Message"
        {...register('message')}
        value={formState.data?.message || ''}
        onChange={handleChange}
      />
      {formState.errors.message && <p>{formState.errors.message.message}</p>}

      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
