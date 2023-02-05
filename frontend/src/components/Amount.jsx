import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useAppContext } from '../AppContext';

export default function Amount() {
  const useOptions = useAppContext()
  return (
    <Box sx={{ minWidth: '10vw' }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Amount
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          onChange = {(e)=> {
            console.log(e.target.value)
            useOptions.getAmount(e.target.value)
            useOptions.showPlayers()
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>


        </NativeSelect>
      </FormControl>
    </Box>
  );
}
