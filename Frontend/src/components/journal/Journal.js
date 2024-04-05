import React, { useState } from 'react';

const Journal = () => {
    // Initialize state for journal entries
    const [journalEntries, setJournalEntries] = useState([]);
    const [newEntry, setNewEntry] = useState('');

    // Function to handle adding a new journal entry
    const addJournalEntry = () => {
        if (newEntry.trim() !== '') {
            const newJournalEntry = {
                text: newEntry,
                date: new Date().toISOString() // Use current date and time
            };
            setJournalEntries([...journalEntries, newJournalEntry]);
            setNewEntry('');
        }
    };

    // Function to handle deleting a journal entry
    const deleteJournalEntry = (index) => {
        const updatedEntries = journalEntries.filter((_, i) => i !== index);
        setJournalEntries(updatedEntries);
    };

    return (
        <div>
            <h2>Journal</h2>
            {/* Journal entry form */}
            <form onSubmit={(e) => {
                e.preventDefault();
                addJournalEntry();
            }}>
                <label htmlFor="entry">Write something:</label>
                <textarea
                    id="entry"
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                    rows={4}
                    required
                ></textarea>
                <button type="submit">Add Entry</button>
            </form>
            
            {/* Display journal entries */}
            <h3>Journal Entries:</h3>
            <ul>
                {journalEntries.map((entry, index) => (
                    <li key={index}>
                        <p>{entry.text}</p>
                        <p>Date: {new Date(entry.date).toLocaleString()}</p>
                        <button onClick={() => deleteJournalEntry(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Journal;
