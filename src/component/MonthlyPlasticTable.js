import {
  
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  
  
  Typography,
  TableContainer,
  Paper,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import axios from "axios";
import { useEffect, useState } from "react";

const MonthlyPlasticTable = () => {
  const [montlydata, setmontlydata] = useState();
  const [isloading, setloading] = useState(false);
  useEffect(() => {
    axios
      .get("https://plastic-classification-backend.vercel.app/getmonthwisedata")
      .then((response) => {
        setmontlydata(response.data);
        setloading(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <Grid2 xs={12} sm={12} lg={7}>
      <TableContainer
        component={Paper}
        sx={{ height: "350px", overflow: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                {" "}
                <Typography variant="body1">Month</Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="body1">HDPE</Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="body1">LDPE</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">PET</Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="body1">PP</Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="body1">PS</Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="body1">PVC</Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="body1">Others</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {isloading ? (
            <TableBody>
              {montlydata.map((data) => {
                return (
                  <TableRow key={data.month}>
                    <TableCell>
                      <Typography variant="body1">{data.month}</Typography>
                    </TableCell>
                    {["HDPE", "LDPE", "PET", "PP", "PS", "PVC", "Others"].map(
                      (type) => {
                        return <TableCell key={type}>{data.totalCollection[type] ?? 0}</TableCell>;
                      }
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          ) : (
            <TableBody><TableRow><TableCell colSpan={8}>Data is fetching</TableCell></TableRow></TableBody>
          )}
        </Table>
      </TableContainer>
    </Grid2>
  );
};
export default MonthlyPlasticTable;
