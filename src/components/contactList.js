import PropTypes from "prop-types";
import { useState } from "react";
function ContactList({ contacts, removeContact }) {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };
  const showingContacts =
    query === ""
      ? contacts
      : contacts.filter((c) => c.name.toLowerCase().includes(query));

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
        />
        <div className="add-contact"></div>
      </div>
      {showingContacts.length !== contacts.length && (
        <div className="showing-contacts">
          <span>
            Now showing {showingContacts.length} of {contacts.length}{" "}
          </span>
          <button onClick={() => updateQuery("")}>Show All</button>
        </div>
      )}

      <ol className="contact-list">
        {showingContacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`,
              }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>@{contact.handle}</p>
            </div>
            <button
              className="contact-remove"
              onClick={() => removeContact(contact)}
            >
              remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
export default ContactList;
