import { useState } from 'react';
import { Button } from '@mui/material';
import css from './Form.module.css'

export function Form({ onData }) {
  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onData({ ...state });
    setState({ ...initialState });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      
        <p>Name</p>
        <input
          className={css.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter name..."
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <p>Number</p>
        <input
          className={css.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          placeholder="Enter phone number..."
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit"
        // className={css.button}
        variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            color: '#0f1111',
            background: '#6688d0',
          }}
        disabled={!name || !number}>
          Add contact
        </Button>
      
    </form>
    // <ContainerForm onSubmit={handleSubmit}>
    //   <label>
    //     Name
    //     <Field
    //       type="text"
    //       name="name"
    //       value={name}
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //       placeholder="Enter name..."
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <label>
    //     Phone number
    //     <Field
    //       type="tel"
    //       name="number"
    //       value={number}
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //       placeholder="Enter number..."
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <BtnDisabled type="submit" disabled={!name || !number}>
    //     Add contact
    //   </BtnDisabled>
    // </ContainerForm>
  );
}
