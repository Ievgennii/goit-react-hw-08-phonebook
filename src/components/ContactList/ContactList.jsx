import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import css from './ContactList.module.css'


export const ContactList = ({ contacts, onDeleteContact }) => {
  //   console.log(contacts);
  return (
<ul className={css.ul}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.li} key={id}>
          <span> {name}: </span>
          <span>{number}</span>
          <Button type="button"
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            color: '#0f1111',
            background: '#6688d0',
          }}
           onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
    
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
