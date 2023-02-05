import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useAppContext } from '../AppContext';

export default function SortBy() {

  const useOptions = useAppContext()

  return (
    <Box sx={{ minWidth: '10vw' }}>
      <FormControl fullWidth >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Sort By
        </InputLabel>
        <NativeSelect
          defaultValue={'goals'}
          onChange = {
            (e)=> {
              console.log(e.target.value)
              useOptions.getSortBy(e.target.value)
            }
          }
        >
          <option 
          value={'goals'}
          >Goals</option>
          <option value={'assist'}>Assist</option>

        </NativeSelect>
      </FormControl>
    </Box>
  );
}
