// import React, { useState } from "react"; // useState o'zgaruvchisi React import qilingan

// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";

// const options = ["Option 1", "Option 2"];

// export default function ControllableStates() {
//   const [buttonValue, setButtonValue] = useState(null); // useState funksiyasi o'zgaruvchisi qo'llanilgan

//   const [inputValue, setInputValue] = useState("");

//   return (
//     <div>
//       <div>{`Button value: ${
//         buttonValue !== null ? `'${buttonValue}'` : "null"
//       }`}</div>
//       <div>{`Input value: '${inputValue}'`}</div>
//       <br />
//       <Autocomplete
//         value={buttonValue}
//         onChange={(event: any, newValue: string | null) => {
//           setButtonValue(newValue);
//         }}
//         inputValue={inputValue}
//         onInputChange={(event, newInputValue) => {
//           setInputValue(newInputValue);
//         }}
//         // id="controllable-states-demo"
//         options={options}
//         sx={{ width: 300 }}
//         renderInput={(params) => <TextField {...params} label="Controllable" />}
//       />
//     </div>
//   );
// }
