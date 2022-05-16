import * as React from "react";

import Box from "@mui/material/Box";
import { Checkbox, FormControlLabel, Stack } from "@mui/material";

export default function CategoryCheckBox({ data }) {
  // console.log(data);
  const [checked, setChecked] = React.useState([]);
  const [checkedSubCategories, setCheckedSubCategories] = React.useState([]);

  const handleChange1 = (event, id) => {
    console.log(id);
    setChecked({ ...checked, [id]: event.target.checked });
  };

  const ifCheckedCategories = (id) => {
    for (const key in checked) {
      if (key === id && checked[key]) {
        return true;
      }
    }
  };
  const ifCheckedSubCategories = (id) => {
    // checkedSubCategories.filter((data) => {
    //   data?.id === id;
    //   return true;
    // });
  };

  const handleChange2 = (event, id) => {
    setCheckedSubCategories({
      ...checked,
      id: event.target.checked,
    });
  };

  const CategoryChildren = ({ subCategory }) => {
    // console.log(subCategory);
    return (
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {subCategory.map((data, index) => {
          return (
            <FormControlLabel
              key={data.id}
              label={data.name}
              control={
                <Checkbox
                  checked={ifCheckedSubCategories(data.id)}
                  onChange={(event) => handleChange2(event, data.id)}
                />
              }
            />
          );
        })}
      </Box>
    );
  };
  return (
    <Box>
      <Stack>
        {data.map((data, index) => {
          console.log(data);
          return (
            <Box>
              <FormControlLabel
                key={data.ID}
                label={data.name}
                control={
                  <Checkbox
                    checked={ifCheckedCategories(data.ID)}
                    // indeterminate={checked[0] !== checked[1]}
                    onChange={(event) => {
                      handleChange1(event, data.ID);
                    }}
                  />
                }
              />
              <CategoryChildren subCategory={data.subCategories} />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
