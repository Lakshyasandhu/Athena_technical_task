// frontend/src/App.js

import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // can be "asc" or "desc"

  // Fetch the candidate data from our Node backend
  useEffect(() => {
    fetch("http://localhost:4000/api/candidates")
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter candidates by name or skills 
  const filteredCandidates = candidates.filter((candidate) => {
    const lowerName = candidate.name.toLowerCase();
    const lowerSkills = candidate.skills.toLowerCase();
    const lowerSearch = searchTerm.toLowerCase();
    return (
      lowerName.includes(lowerSearch) || lowerSkills.includes(lowerSearch)
    );
  });

  // Sort by Years of Experience
  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.yearsOfExperience - b.yearsOfExperience;
    } else {
      return b.yearsOfExperience - a.yearsOfExperience;
    }
  });

  return (
    <div className="App">
      <h1>Candidate List</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Sort Button */}
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort by Experience ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>

      {/* Candidates Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {sortedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.skills}</td>
              <td>{candidate.yearsOfExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;