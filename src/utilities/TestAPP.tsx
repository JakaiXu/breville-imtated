
import { Box, styled } from "@mui/material";


const StyledBox = styled(Box)(()=>({
  border:'1px solid red',
        backgroundColor: "transparent",
        width:500,
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background-color 800ms ease-in-out",
        "&:hover": {
          backgroundColor: "white",
          // 子盒子的样式
          "& > div:nth-child(1)": {
            color: "green",
          },
          "& > div:nth-child(2)": {
            color: "blue",
          },
          "& > div:nth-child(3)": {
            color: "green",
          },
        },
      
}))
// // 定义样式
// const useStyles = makeStyles((theme) => ({
//   navbar: {
//     backgroundColor: "transparent",
//     height: 80,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     transition: "background-color 800ms ease-in-out",
//     "&:hover": {
//       backgroundColor: "white",
//       // 子盒子的样式
//       "& > div:nth-child(1)": {
//         color: "red",
//       },
//       "& > div:nth-child(2)": {
//         color: "blue",
//       },
//       "& > div:nth-child(3)": {
//         color: "green",
//       },
//     },
//   },
//   navItem: {
//     color: "white",
//     margin: "0 10px",
//   },
// }));

const TestAPP = () => {
 

  return (
    <StyledBox>
      {/* 子盒子 */}
      <Box sx={{color:'red'}}>Item 1</Box>
      <Box sx={{color:'red'}}>Item 2</Box>
      <Box sx={{color:'red'}}>Item 3</Box>
    </StyledBox>
  );
};

export default TestAPP;
