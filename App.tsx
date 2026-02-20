import React, { useState } from "react";

function App() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (!file) return;
        alert("PDF selected: " + file.name);
    };

    return (
        <div style={{ padding: "40px", fontFamily: "Arial" }}>
            <h1>Auto Syllabus</h1>
            <p>Upload your schedule PDF and add events to Google Calendar</p>

            <input type="file" accept=".pdf" onChange={handleFileChange} />

            <br /><br />

            <button onClick={handleUpload} disabled={!file}>
                Upload PDF
            </button>

            {file && <p>Selected file: {file.name}</p>}
        </div>
    );
}

export default App;