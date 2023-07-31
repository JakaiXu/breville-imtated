import {
  ArrowBackIos,
  ArrowForwardIos,
  DescriptionRounded,
  ForumOutlined,
  HelpOutlineRounded,
  LocalPhoneOutlined,
  OndemandVideoOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import { useState } from "react";
import { IconBase } from "react-icons";
import SmallSupportSubtitle from "./SmallSupportSubtitle";
type SetIsShowSupportCardPros = {
  setIsShowSupportCard: (value: boolean) => void;
};
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(49,54,57)",
  width: "100%",
  height: "max-content",
  minHeight: `calc(100vh - 118px)`,
  position: "sticky",
  top: 70,
  marginLeft: -8,
  paddingTop: 20,

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "94%",
  },
  height: 100,
  border: "1px solid rgb(200,200,200)",
  flexWrap:'nowrap',
  borderRadius: 5,
  marginRight: 20,
  marginBottom: 30,
  marginLeft: 20,
  textAlign: "left",
  paddingLeft: 10,
  paddingRight: 10,
}));
const gridData = [
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
  lineHeight: 2.5,

  fontSize: 18,
}));
const StyledIcon = styled(IconBase)(() => ({
  fontSize: 40,
  marginTop: 10,
  marginRight: 20,
}));
const SmallSupportCard = ({
  setIsShowSupportCard,
}: SetIsShowSupportCardPros) => {
  const [isShowSubtitle, setIsShowSubtitle] = useState(false);
  return (
    <>
      {isShowSubtitle ? (
        <SmallSupportSubtitle setIsShowSubtitle={setIsShowSubtitle} />
      ) : (
        <StyledBox>
          <Grid container sx={{ flexDirection: "row", alignItems: "center" }}>
            <Box
              onClick={() => setIsShowSupportCard(false)}
              sx={{
                marginLeft: 2,
              }}
            >
              <ArrowBackIos />
            </Box>

            <Typography
              sx={{ fontWeight: "bold", fontSize: 20, marginX: "auto" }}
            >
              Support
            </Typography>
          </Grid>
          <Divider sx={{ border: "1px solid rgb(200,200,200)" }} />

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

            {gridData.map((item) => (
              <StyledGrid container flexDirection="row">
                <StyledIcon>{item.icon}</StyledIcon>
                <Grid item key={item.id}>
                  <StyledTypography>{item.title}</StyledTypography>
                  <Typography>{item.content}</Typography>
                </Grid>
              </StyledGrid>
            ))}

            <Grid container flexDirection="column" sx={{}}>
              <Grid
                onClick={() => setIsShowSubtitle(!isShowSubtitle)}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft:3
                }}
              >
                <StyledTypography
                  sx={{
                    marginLeft: {
                      sm: 3,
                      xs: 3,
                    },
                   
                  }}
                >
                  Parts
                </StyledTypography>
                <ArrowForwardIos sx={{ marginRight: 3 }} />
              </Grid>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 20,
                  lineHeight: 3,
                  marginLeft: 3,
                  marginRight: 3,
                }}
              >
                Need some help?
              </Typography>
              <Typography
                sx={{
                  marginLeft: 3,
                  lineHeight: 3,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LocalPhoneOutlined sx={{ marginRight: 1 }} />
                1300 139 198
              </Typography>
              <Typography
                sx={{
                  marginLeft: 3,
                  lineHeight: 3,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ForumOutlined sx={{ marginRight: 1 }} />
                Chat with a Support Agent
              </Typography>
            </Grid>
          </Box>
        </StyledBox>
      )}
    </>
  );
};

export default SmallSupportCard;
