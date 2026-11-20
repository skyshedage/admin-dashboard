import { Avatar, Card, Stack, Typography } from "@mui/material";


const TotalPlasticCard = ({ type, count, shortform, image }) => {

  return (
    <Card
      sx={{
        padding: 2,
        width: "100%",
        height: "100%",

      }}
    >
      <Stack spacing={1}>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            alignItems: "center",
          }}
        >
          <Avatar variant="rounded" src={image} alt={shortform} />
          <Stack spacing={0.5}>
            <Typography variant="body1">{type}</Typography>
            {/* <Typography variant="body2">{shortform}</Typography> */}
            <Typography variant="h4">{count}+</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default TotalPlasticCard;
