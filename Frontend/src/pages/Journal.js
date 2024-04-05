import React, { useState } from 'react';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new entry to the list of entries
    setEntries([...entries, newEntry]);
    // Clear the input fields
    setNewEntry({ title: '', content: '' });
  };

  return (
    <div>
      <h2>Journal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newEntry.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Write your journal entry here..."
          value={newEntry.content}
          onChange={handleInputChange}
        />
        <button type="submit">Add Entry</button>
      </form>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;
