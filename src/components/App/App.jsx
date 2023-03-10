import { Component } from 'react';
//import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import Form from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.push(data),
      };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
