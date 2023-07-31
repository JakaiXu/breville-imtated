import {
  DescriptionRounded,
  ForumOutlined,
  HelpOutlineRounded,
  LocalPhoneOutlined,
  OndemandVideoOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  Theme,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import { IconBase } from "react-icons";
import listData from '../../store/listDataInSupport.json'
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  width: "100%",
  height: "max-content",
  minHeight: `calc(100vh - 118px)`,
  position: "sticky",
  top: 70,
  marginLeft: -8,
  paddingTop: 20,
  paddingLeft: `calc((100vw - 1350px) / 2)`,
  paddingRight: `calc((100vw - 1350px) / 2)`,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const customTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 760,
      lg: 1200,
      xl: 1536,
    },
  },
});
const StyledHalfBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.only("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    width: "43%",
  },
  [theme.breakpoints.only("md")]: {
    width: "100%",
  },
  height: 200,
  border: "1px solid rgb(200,200,200)",
  borderRadius: 5,
  marginRight: 10,
  marginBottom: 30,
  marginLeft: 20,
  textAlign: "center",
  paddingLeft: 10,
  paddingRight: 10,
}));
const gridData1 = [
  {
    title: "Breville Support Centre",
    id: 1,
    content: "FAQ's, live support & more",
    icon: <HelpOutlineRounded />,
  },
  {
    title: "Guides & Manuals",
    id: 2,
    content: "Product guides & Instruction manuals",
    icon: <DescriptionRounded />,
  },
];
const gridData2 = [
  {
    title: " Tutorials",
    id: 3,
    content: "Coming Soon",
    icon: <OndemandVideoOutlined />,
  },
  {
    title: "My Breville",
    id: 4,
    content: "Register products, access warranty & get personalised content",
    icon: <VerifiedUserOutlined />,
  },
];

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  fontSize: 18,
}));
const StyledIcon = styled(IconBase)(() => ({
  fontSize: 40,
  marginTop: 50,
  marginBottom: 10,
}));
const SupportCard = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <StyledBox>
        <Divider sx={{ border: "1px solidrgb(200,200,200)" }} />
        <Box
          sx={{
            display: {
              lg: "flex",
              md: "normal",
            },
            flexDirection: {
              lg: "row",
              md: "normal",
            },
            width: {
              lg: 1350,
            },
            marginTop: 4,
          }}
        >
          <StyledHalfBox>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 3,
                marginLeft: 2.5,
              }}
            >
              Customer Service & Support
            </Typography>
            <Grid container sx={{ flexDirection: "row" }}>
              {gridData1.map((item) => (
                <StyledGrid item key={item.id}>
                  <StyledIcon>{item.icon}</StyledIcon>
                  <StyledTypography>{item.title}</StyledTypography>
                  <Typography>{item.content}</Typography>
                </StyledGrid>
              ))}
            </Grid>
            <Grid container sx={{ flexDirection: "row" }}>
              {gridData2.map((item) => (
                <StyledGrid item key={item.id}>
                  <StyledIcon>{item.icon}</StyledIcon>
                  <StyledTypography>{item.title}</StyledTypography>
                  <Typography>{item.content}</Typography>
                </StyledGrid>
              ))}
            </Grid>
            <Grid
              container
              flexDirection="row"
              sx={{
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 20,

                  marginLeft: 2.5,
                  marginRight: 3,
                }}
              >
                Need some help?
              </Typography>
              <Typography
                sx={{ marginRight: 3, display: "flex", alignItems: "center" }}
              >
                <LocalPhoneOutlined sx={{ marginRight: 1 }} />
                1300 139 198
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <ForumOutlined sx={{ marginRight: 1 }} />
                Chat with a Support Agent
              </Typography>
            </Grid>
          </StyledHalfBox>
          <StyledHalfBox>
            <StyledTypography
              sx={{
                marginBottom: 2,
                marginLeft: {
                  md: 3,
                },
                marginTop: { md: 3 },
              }}
            >
              Parts
            </StyledTypography>
            <Box
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            >
              {listData.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    width: {
                      lg: "40%",
                      md: "30%",
                    },
                    marginLeft: {
                      md: 3,
                    },
                    lineHeight: 3,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </StyledHalfBox>
        </Box>
      </StyledBox>
    </ThemeProvider>
  );
};

export default SupportCard;
