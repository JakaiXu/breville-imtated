import { Box, Grid, Typography, styled } from "@mui/material";
import shopMenuData from "../../store/shopMenu.json";
const StyledBox = styled(Box)(({ theme }) => ({
  padding: 20,

  display: "flex",
  flexDirection: "row",
  paddingLeft: `calc((100vw - 1360px) / 2)`,
  paddingRight: `calc((100vw - 1360px) / 2)`,
  [theme.breakpoints.up("sm")]: {
    width: "100vw",
    height: `calc(100vh - 118px)`,
    marginTop: -16,
    marginLeft: -10,
    backgroundColor: "white",
    position: "fixed",
  },
  [theme.breakpoints.down("md")]: {
    display:'none'
  },
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  width: "70%",
  //  maxWidth:900,
  height: "max-content",
  marginTop: 10,
  [theme.breakpoints.down("md")]: {
    // display:'none'
  },
  [theme.breakpoints.only("md")]: {},
  [theme.breakpoints.only("sm")]: {},
  [theme.breakpoints.only("xs")]: {},
}));
const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  lineHeight: 1.5,
  marginBottom: 10,
  fontSize: 18,
}));

const ShopCard = () => {
  const renderedMenu = shopMenuData.map((item) => (
    <StyledGrid item key={item.id} xl={3} lg={4} md={6} >
      <StyledTypography>{item.title}</StyledTypography>
      <Grid>
        {item.content.map((subItem) => (
          <Typography key={subItem} sx={{ lineHeight: 2.5 }}>
            {subItem}
          </Typography>
        ))}
      </Grid>
    </StyledGrid>
  ));

  return (
    <StyledBox >
      <Grid
        container
        sx={{
          width: {
            lg: 1150,
            md: "100vw",
          },

          padding: 2,
        }}
      >
        {renderedMenu}
      </Grid>
      <Box
        sx={{
          width: {
            lg: 250,
            md: "30%",
          },
          height: 450,
          marginRight: 4,
          marginTop: 5,
          borderRadius: 2,

          backgroundImage:
            "url('https://breville.scene7.com/is/image/brevilleprod/249px%20x%20445px_WebTile_PieMaker?fmt=png-alpha')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            bgcolor: "black",
            borderRadius: 2,
            background: "linear-gradient(to bottom,transparent 50%, black ) ",
            opacity: "0.7 ",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              bottom: 20,
              left: 20,
              width: "80%",
              zIndex: 50,
              marginX: "auto",
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              opacity: "1",
            }}
          >
            NEW, the Quick & Easy Pie Maker
          </Typography>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default ShopCard;
