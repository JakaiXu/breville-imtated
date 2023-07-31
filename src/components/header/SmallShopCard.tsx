import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import shopMenuData from "../../store/shopMenu.json";
import { ArrowBackIos, } from "@mui/icons-material";
const StyledBox = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "max-content",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "max-conent"
}));
const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  lineHeight: 1.5,
  marginBottom: 10,
 
  fontSize: 18,
}));
type SetShowSmallCardProps = {
  setIsShowShopCard: (value: boolean) => void;
};
const SmallShopCard = ({ setIsShowShopCard }: SetShowSmallCardProps) => {
  const renderedMenu = shopMenuData.map((item) => (
    <StyledGrid item key={item.id} >
      <StyledTypography>{item.title}</StyledTypography>
      <Grid>
        {item.content.map((subItem) => (
          <Typography key={subItem} sx={{ lineHeight: 2.5, paddingLeft: 2 }}>
            {subItem}
          </Typography>
        ))}
      </Grid>
    </StyledGrid>
  ));

  return (
    <StyledBox>
      <Grid container sx={{ flexDirection: "row", alignItems: "center",paddingX:2 }}>
        <Box onClick={() => setIsShowShopCard(false)}>
          <ArrowBackIos  />
        </Box>

        <Typography
          sx={{ fontWeight: "bold", fontSize: 20, marginX: "auto" }}
        >
          Shop
        </Typography>
      </Grid>
      <Divider sx={{ border: "1px solid gray" }} />
      <Grid
        container
        sx={{
          padding: 2,
        }}
      >
        {renderedMenu}
      </Grid>
      <Box
        sx={{
          height: 220,
          borderRadius: 2,
          marginLeft:-4,
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
            background: "linear-gradient(to bottom,transparent 70%, black ) ",
            opacity: "0.95 ",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              bottom: 20,
              left: 20,
              width: "100%",
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

export default SmallShopCard;
