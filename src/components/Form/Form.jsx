import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import ButtonArrow from '@/components/ButtonArrow/ButtonArrow';
import * as yup from 'yup';
import styles from './Form.module.scss';

const schema = yup.object().shape({
  fullName: yup.string().required().min(3),
  email: yup.string().required().email(),
  phone: yup.string().required().length(10),
  message: yup.string(),
});

const Form = () => {
  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm({
      resolver: yupResolver(schema),
    });

  const handleFormSubmit = data => {
    console.log(data);
    toast.success('Form submitted. See console');
    reset();
  };

  const handleChange = event => {
    setValue(event.target.name, event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <div className={styles['input-group']}>
        <label htmlFor="fullName">* Full name: </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="John Rosie"
          autoComplete="name"
          {...register('fullName')}
          value={formState.data?.fullName}
          onChange={handleChange}
          onBlur={() => trigger('fullName')}
          className={formState.errors.fullName ? styles.error : ''}
          aria-describedby="fullNameError"
        />
        <p id="fullNameError" className={styles.errorMessage}>
          {formState.errors.fullName?.message || '\u00A0'}
        </p>
      </div>

      <div className={styles['input-group']}>
        <label htmlFor="email">* Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johnrosie@gmail.com"
          autoComplete="email"
          {...register('email')}
          value={formState.data?.email}
          onChange={handleChange}
          onBlur={() => trigger('email')}
          className={formState.errors.email ? styles.error : ''}
          aria-describedby="emailError"
        />
        <p id="emailError" className={styles.errorMessage}>
          {formState.errors.email?.message || '\u00A0'}
        </p>
      </div>
      <div className={styles['input-group']}>
        <label htmlFor="phone">* Phone: </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="380961234567"
          autoComplete="off"
          {...register('phone')}
          value={formState.data?.phone}
          onChange={handleChange}
          onBlur={() => trigger('phone')}
          className={formState.errors.phone ? styles.error : ''}
          aria-describedby="phoneError"
        />
        <p id="phoneError" className={styles.errorMessage}>
          {formState.errors.phone?.message || '\u00A0'}
        </p>
      </div>

      <div className={styles['input-group']}>
        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          {...register('message')}
          value={formState.data?.message}
          onChange={handleChange}
          onBlur={() => trigger('message')}
          className={formState.errors.message ? styles.error : ''}
          aria-describedby="messageError"
        />
        <p id="messageError" className={styles.errorMessage}>
          {formState.errors.message?.message || '\u00A0'}
        </p>
      </div>

      <ButtonArrow type={'submit'} className={styles['form-submit-button']}>
        Send
      </ButtonArrow>
    </form>
  );
};

export default Form;
