import { Clear, PlayCircle, SearchOutlined } from "@mui/icons-material";
import {
  Box,
  SvgIcon,
  styled,
  Link as MLink,
  InputBase,
  Divider,
  Icon,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useCloseSearch } from "../../hooks/useCloseSearch";
import searchData from "../../store/searchCard.json";
import searchCardVideos from "../../store/searchCardVideo.json";
const StyledBox = styled(Box)(({ theme }) => ({
  padding: 10,
  paddingLeft: `calc((100vw - 1560px) / 2)`,
  paddingRight: `calc((100vw - 1560px) / 2)`,
  width: "100%",
  height: "100%",
  marginLeft: -10,

  top: 0,
  [theme.breakpoints.up("sm")]: {
    backgroundColor: "white",
  },
  [theme.breakpoints.up("md")]: {
    height: "60vh",
    position: "fixed",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: -8,
  },
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "rgb(49,54,57)",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 25,
  height: 40,
  display: "flex",
  alignSelf: "center",
  background: "rgb(244,244,244)",
  [theme.breakpoints.up("xl")]: {
    width: 1000,
  },
  [theme.breakpoints.between("sm", "xl")]: {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "92%",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
}));
const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    "& path": { fill: "white" },
  },
}));
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 18,

  lineHeight: 3,
  fontWeight: "bold",
  [theme.breakpoints.up("sm")]: {
    color: "rgb(20,20,20)",
  },
  [theme.breakpoints.down("sm")]: {
    color: "white",
  },
}));
const SearchCard = () => {
  const {  setIsOpenSearchCard } = useCloseSearch();
  const handleCloseSearch = () => {
    setIsOpenSearchCard(false);
  };
 
  return (
    <StyledBox
      sx={{
        width: {
          xl: 1560,
          lg: "100vw",
          md: "100vw",
          sm: "100vw",
          xs: "100vw",
        },
      }}
    >
      <Box
        sx={{
          paddingY: 2,
          display: {
            sm: "flex",
            xs: "block",
          },
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <MLink href="/home">
          <StyledSvgIcon
            viewBox="0 0 100 23"
            sx={{
              width: 200,
              height: 23,
              marginLeft: { xl: "0", lg: "0", md: "0", sm: "0", xs: "30%" },
            }}
            className="logo-svg"
          >
            <path
              fill="rgb(57,21,54)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.6478 16.2855C9.19179 17.1004 8.17096 17.2736 7.13589 17.2736H6.39382V12.8304H7.78446C8.59396 12.8304 9.29745 13.0459 9.68499 13.6721C10.0034 14.1861 10.0795 15.513 9.6478 16.2855ZM6.39382 4.46511H7.97389C8.91929 4.46511 9.74617 5.1757 9.74617 6.30769C9.74617 7.7602 8.7243 8.21912 7.22 8.21912H6.39382V4.46511ZM13.5175 10.5129C13.5175 10.5129 16.0562 9.15745 16.0562 5.59073C16.0562 1.30688 12.8814 0 9.82591 0H0V22.1956H9.71191C14.368 22.1956 16.6877 19.6552 16.6877 15.8175C16.6877 11.1952 13.5175 10.5129 13.5175 10.5129ZM68.0405 22.1958H74.1529V2.65526H68.0405V22.1958ZM82.132 22.1958H76.0397V2.65526H82.132V22.1958ZM92.2435 13.9025C92.2435 13.9025 90.5536 12.3188 88.7111 13.9025C87.0729 15.2986 88.3781 17.0971 88.3781 17.0971L92.2435 13.9025ZM97.3326 13.1215L90.3175 18.9818C91.4023 19.7871 93.209 19.3385 95.1384 17.3424L97.319 19.8343C95.545 21.9299 93.4669 22.9011 90.6296 22.9011C86.5376 22.9011 83.2687 19.8962 83.2687 16.1901C83.2687 12.5011 86.5682 9.40402 90.6661 9.40402C93.8398 9.40402 96.1428 10.8851 97.3326 13.1215ZM65.8993 6.16159C65.8993 7.6802 64.6633 8.89516 63.0954 8.89516C61.5974 8.89516 60.3666 7.6802 60.3666 6.16159C60.3666 4.64298 61.5974 3.41529 63.0954 3.41529C64.6633 3.41529 65.8993 4.64298 65.8993 6.16159ZM60.0977 22.1953H66.1754V10.1587H60.0977V22.1953ZM50.3307 10.1155L52.2194 15.4057L54.1391 10.1578H59.1542L54.2774 22.1955H48.8757L44.115 10.1155H50.3307ZM35.0733 17.0957C35.0733 17.0957 33.7678 15.2955 35.4331 13.9015C37.2505 12.3182 38.9331 13.9015 38.9331 13.9015L35.0733 17.0957ZM37.3328 9.40307C33.2724 9.40307 29.9361 12.5002 29.9361 16.1891C29.9361 19.8939 33.2387 22.8991 37.3203 22.8991C40.1874 22.8991 42.2482 21.9293 44.0166 19.8309L41.8707 17.3418C39.894 19.3365 38.1016 19.7862 37.0259 18.9812L44.0677 13.1206C42.8502 10.8845 40.5555 9.40307 37.3328 9.40307ZM29.453 13.0268C29.453 14.5457 28.2174 15.7607 26.6484 15.7607C25.4764 15.7607 24.4685 15.0167 24.0854 13.9656C24.0854 13.9656 24.0298 14.0465 24.0062 14.1133C23.9892 14.1533 23.9892 14.2342 23.9892 14.2342V22.1956H17.9042V10.1318H23.9892V11.7216C23.9892 11.8018 24.0062 11.8549 24.0621 11.954C24.1073 12.0329 24.1164 12.0005 24.1164 12.0005L24.1216 11.9929C24.5289 10.9883 25.5119 10.2812 26.6484 10.2812C28.2174 10.2812 29.453 11.5089 29.453 13.0268ZM98.6799 9.79737H98.5162V9.32399C98.5561 9.31813 98.6069 9.31228 98.6799 9.31228C98.9329 9.31228 99.0219 9.43484 99.0219 9.55706C99.0219 9.72989 98.8655 9.79737 98.6799 9.79737ZM98.2927 10.57H98.5162V9.96957H98.6737C98.8547 9.96957 98.9434 10.0357 98.9771 10.2133C99.0049 10.3979 99.0393 10.5252 99.0727 10.57H99.3104C99.285 10.5252 99.2534 10.4419 99.2187 10.2247C99.1912 10.0185 99.1081 9.90794 98.9819 9.88557V9.8742C99.1352 9.83048 99.2579 9.71928 99.2579 9.53578C99.2579 9.40151 99.2127 9.30649 99.1286 9.24521C99.0449 9.1853 98.9041 9.1402 98.69 9.1402C98.5268 9.1402 98.4144 9.1564 98.2998 9.17293L98.2927 9.17394V10.57ZM97.7418 9.84134C97.7418 9.25745 98.1978 8.78441 98.7529 8.78441H98.7588C99.3205 8.78441 99.7692 9.25745 99.7692 9.8472C99.7692 10.4376 99.3205 10.9096 98.7588 10.9041C98.1978 10.9041 97.7418 10.4376 97.7418 9.84134ZM100 9.84076C100 9.14532 99.4496 8.58966 98.7586 8.58966H98.7527C98.0607 8.58966 97.4993 9.14532 97.4993 9.84076C97.4993 10.5469 98.0607 11.0977 98.7527 11.0977C99.4496 11.0977 100 10.5469 100 9.84076Z"
            ></path>
          </StyledSvgIcon>
        </MLink>
        <Search>
          <SearchIconWrapper>
            <SearchOutlined />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Icon
          onClick={handleCloseSearch}
          sx={{
            position: "absolute",
            top: { sm: 32, xs: 4 },
            right: {
              xl: "20vw",
              sm: 25,
              xs: 20,
            },
          }}
        >
          <Clear />
        </Icon>
      </Box>
      <Divider
        sx={{
          display: {
            xl: "none",
            lg: "block",
          },
          border: {
            lg: "1px solid rgb(244,244,244)",
            md: "1px solid rgb(244,244,244)",
            sm: "1px solid rgb(244,244,244)",
            xs: "1px solid rgb(180,180,180)",
          },
          width: "100%",
        }}
      />
      <Box
        sx={{
          display: {
            md: "flex",
            sm: "block",
            xs: "block",
          },
          flexDirection: "row",
          height: "90%",
          padding: 4,
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: {
              md: "100%",
              sm: "max-content",
              xs: "max-content",
            },
          }}
        >
          <StyledTypography>Popular Searches</StyledTypography>
          {["Descaler", "Bes870", "Kettles", "Toasters", "Water Filter"].map(
            (item) => (
              <Typography
                sx={{
                  lineHeight: 3,
                  color: { sm: "rgb(20,20,20)", xs: "white" },
                }}
                key={item}
              >
                {item}
              </Typography>
            )
          )}
        </Box>
        <Box
          sx={{
            width: {
              md: "50%",
              sm: "100%",
              xs: "100%",
            },
            height: {
              md: "100%",
              sm: "max-content",
            },
          }}
        >
          <StyledTypography>Products & Accessories</StyledTypography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              height: "80%",
              justifyContent: "space-evenly",
            }}
          >
            {searchData.map((item) => (
              <Grid
                container
                flexDirection="row"
                key={item.id}
                sx={{
                  width: {
                    md: "48%",
                    sm: "48%",
                    xs: "100%",
                  },
                  height: {
                    lg: "33%",
                    md: "20%",
                    sm: "20%",
                  },
                  marginY: {
                    sm: 2,
                    xs: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  sx={{
                    width: { md: "40%", sm: "30%" },
                    objectFit: "cover",
                    height: 100,
                    marginY: "auto",
                    borderRadius: 1.5,
                  }}
                ></Box>
                <Grid sx={{ width: "46%", marginY: "auto", marginLeft: 2 }}>
                  <Typography
                    sx={{
                      color: { sm: "rgb(20,20,20)", xs: "white" },
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: { sm: "rgb(20,20,20)", xs: "white" },
                      fontWeight: "bold",
                    }}
                  >
                    ${item.price.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
            height: {
              md: "100%",
              sm: "max-content",
            },
          }}
        >
          <StyledTypography>Inspiration</StyledTypography>
          <Box
            sx={{
              width: {
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            {searchCardVideos.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginY: 2,
                  marginTop: 4,
                  width: {
                    md: "100%",
                    sm: "80vw",
                    xs: "80vw",
                  },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={item.imgUrl}
                    sx={{ width: 200, height: 130, borderRadius: 2 }}
                  />
                  <MLink href={item.src}>
                    <PlayCircle
                      sx={{
                        position: "absolute",
                        left: 10,
                        top: 10,
                        color: "white",
                      }}
                    />
                  </MLink>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 40,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {item.time}
                  </Typography>
                </Box>
                <Box sx={{ marginLeft: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      display: "block",
                      border: "1px solid black",
                      color: "black",
                      fontSize: 12,
                      fontWeight: "bold",
                      textTransform: "none",
                      bgcolor: {
                        sm: "transparent",
                        xs: "white",
                      },
                    }}
                  >
                    Tutorial
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      display: "block",
                      color: "white",
                      fontSize: 12,
                      marginY: 1,
                      fontWeight: "bold",
                      bgcolor: "rgb(130,94,78)",
                      textTransform: "none",
                    }}
                  >
                    Oracle
                  </Button>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: {
                        sm: "black",
                        xs: "white",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default SearchCard;
