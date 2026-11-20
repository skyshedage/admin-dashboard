import { Card, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { PieChart } from "@mui/x-charts";

const ContinentWiseContribution = () => {
  return (
    <Grid2 xs={12} lg={5}>
      <Card
        sx={{
          padding: 2,
          minHeight: "350px",
        }}
      >
        <Typography variant="h3">Illustrative plastic-waste distribution</Typography>
        <Typography variant="body2" mt={2}>
          Static example data, not live collection records or verified regional measurements.
        </Typography>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 64.56, label: "Asia" },
                { id: 1, value: 3.12, label: "North America" },
                { id: 2, value: 8, label: "South America" },
                { id: 3, value: 22.16, label: "Africa" },
                { id: 4, value: 1.91, label: "Europe" },
                { id: 5, value: 1, label: "Australia" },
              ],
              innerRadius: 30,
              outerRadius: 75,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          margin={{ top: 10, bottom: 105, left: 10, right: 10 }}
          slotProps={{ legend: { direction: "row", position: { vertical: "bottom", horizontal: "middle" }, itemMarkWidth: 10, itemMarkHeight: 10, itemGap: 12, padding: 6 } }}
          height={290}
        />
      </Card>
    </Grid2>
  );
};
export default ContinentWiseContribution;
