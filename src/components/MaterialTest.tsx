import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const MaterialTest = () => {
    const [text, setText] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-purple-800 p-6">
            <h1 className="text-2xl font-bold mb-4">Material UI Test</h1>
            <div className="mb-6">
            <FormControl className="mb-14 w-64">
                <TextField
                    label="Skriv något"
                    variant="outlined"
                    value={text}
                    color="secondary"
                    onChange={(e) => setText(e.target.value)}
                    fullWidth
                />
            </FormControl>
            </div>

            <FormControl className="mb-4 w-64" sx={{ backgroundColor: "#1E293B", borderRadius: "8px" }}>
                <InputLabel sx={{ color: "#FACC15", }}>Välj ett alternativ</InputLabel>
                <Select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    fullWidth
                    sx={{
                        color: "#FACC15", // Textfärg
                        backgroundColor: "#1E293B", // Bakgrund
                        borderRadius: "8px",
                        "&:hover": { backgroundColor: "#334155" }, // Hover-effekt
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FACC15", // Kantlinjefärg
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FF5733", // Färg vid fokus
                        },
                    }}
                >
                    <MenuItem value="option1">Alternativ 1</MenuItem>
                    <MenuItem value="option2">Alternativ 2</MenuItem>
                    <MenuItem value="option3">Alternativ 3</MenuItem>
                </Select>
            </FormControl>


            <Button
                variant="contained"
                color="primary"
                onClick={() => alert(`Du skrev: ${text} och valde: ${selectedOption}`)}
            >
                Testa Input
            </Button>
        </div>
    );
};

export default MaterialTest;