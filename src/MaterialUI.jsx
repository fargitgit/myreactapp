import {TextField, Autocomplete, Box, Button, Stack, Checkbox} from '@mui/material';
// import {FavoriteBorder, Favorite, BookmarkBorderIcon, BookmarkIcon} from '@mui/icons-material/FavoriteBorder';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
// import Autocomplete from '@mui/material/Autocomplete';
// import Box from '@mui/material/Box';

import top100Films from './Movies';
import Coutries from './Coutries';
const MaterialUI = ()=>{
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return(
        <>
            <Autocomplete
                disablePortal
                id="include-input-in-list"
                options={top100Films}
                sx={{ width: 300, margin: '20px' }}
                renderInput={(params) => <TextField {...params} label="Movie" variant="standard" />}
            />
            <hr />
            <Autocomplete
                id="country-select-demo"
                sx={{ width: 300, margin: '20px'}}
                options={Coutries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                    />
                )}
                />
                <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    <TextField label="name" variant="outlined" InputProps={{shrink: false,}}/>
                    <Button variant="outlined">Outlined</Button>
                    <Button variant="contained">Outlined</Button>
                    <Button href="#text-buttons" color="secondary">Link</Button>
                </Stack>
                <div>
                    <Checkbox color="error" {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox
                        {...label}
                        icon={<BookmarkBorderIcon />}
                        checkedIcon={<BookmarkIcon />}
                    />
                </div>
        </>
    );
}

export  default MaterialUI;