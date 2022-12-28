import { useState } from "react";
import { Paper ,TextField } from "@material-ui/core";

const SearchBar = ({onSubmit}) => {
    const [searchTerm ,SetSearchTerm] = useState('');

    const handleChange = (event) => SetSearchTerm(event.target.value);

    const onKeyPress = (event) => {
        if (event.key === "Enter"){
            onSubmit(searchTerm);
        }
    }

    return(
        <Paper elevation={6} style={{ padding:"25px"}}>
            <TextField 
            fullWidth
            onKeyPress={onKeyPress}
            label="Search..."
            value={searchTerm}
            onChange={handleChange}
            />
        </Paper>
    )

}

export default SearchBar;