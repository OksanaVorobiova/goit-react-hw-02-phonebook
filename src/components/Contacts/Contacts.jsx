import { ContactList } from './Contacts.styled';

export const Contacts = ({ contacts, onClick }) => {
  return (
    <ContactList onClick={onClick}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" name="delete" id={id}>
            Delete
          </button>
        </li>
      ))}
    </ContactList>
  );
};
