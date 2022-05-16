import * as React from "react";

import Box from "@mui/material/Box";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import CheckBoxGroup from "../components/categoryCheckbox";
import { width } from "@mui/system";
import { getFilter } from "../utils/backendApi";
import CategoryCheckBox from "../components/categoryCheckbox";
import BrandCheckBox from "../components/brandCheckBox";

export default function Home() {
  const [filterData, setFilterData] = React.useState();

  React.useEffect(() => {
    async function FetchData() {
      const filter = await getFilter();
      setFilterData(filter.data.searchFilter);
    }
    FetchData();
  }, []);

  return (
    <Box sx={{ maxWidth: "100%", padding: "4rem" }}>
      <Box>
        {/* for Categories */}
        <Typography variant='h4' sx={{ margin: "1rem 0rem" }}>
          Catergories
        </Typography>
        <CategoryCheckBox data={filterData ? filterData.categories : []} />
      </Box>
      <Divider />
      <Box>
        {/* For Brands */}
        <Typography variant='h4' sx={{ margin: "1rem 0rem" }}>
          Brands
        </Typography>

        <BrandCheckBox />
      </Box>
    </Box>
  );
}
