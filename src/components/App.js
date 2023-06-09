import "../css/index.css";
import { useState } from "react";
import ContactList from "./contactList";
function App() {
  const [contacts, setContacts] = useState([
    {
      id: "Ahmed",
      name: "Ahmed Youssef",
      handle: "ahmed_youssef",
      avatarURL: "./assets/person1.jpg",
    },
    {
      id: "sarah",
      name: "Sarah Mostafa",
      handle: "sarah_mostafa",
      avatarURL: "./assets/person2.jpg",
    },
    {
      id: "yasser",
      name: "Yasser Mohamed",
      handle: "yasser_mohamed",
      avatarURL: "./assets/person3.jpeg",
    },
  ]);

  const onDeleteContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };
  return (
    <div className="App">
      <ContactList contacts={contacts} removeContact={onDeleteContact} />
    </div>
  );
}

export default App;
