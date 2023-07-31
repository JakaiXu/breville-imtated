import {
  Apple,
  Clear,
  Facebook,
  FacebookRounded,
  Google,
} from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  Divider,
  InputBase,
  InputLabel,
  Link,
  Typography,
  styled,
} from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: { sm: "50%", xs: 0 },
  left: { sm: "50%", xs: 0 },
  transform: { sm: "translate(-50%, -50%)", xs: 0 },
  width: { sm: 800 },
  maxWidth: 800,
  height: '78vh',
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  overflow: "scroll",
};
const StyledBox = styled(Box)(() => ({
  width: "50%",
  marginTop: "5%",
  padding: 30,
}));
const StyledInputBase = styled(InputBase)(() => ({
  width: "100%",
  border: "1px solid rgb(200,200,200)",
  borderRadius: 5,
  height: 40,
  marginTop: 10,
  marginBottom: 30,
  paddingLeft: 10,
}));
const StyledButton = styled(ButtonBase)(() => ({
  textTransform: "none",
  borderRadius: 50,
  width: "100%",
  height: 45,
  marginTop: 10,
  marginBottom: 10,
  backgroundColor: "rgb(200,200,200)",
  color: "gray",
  fontSize: 16,
  fontWeight: "bold",
  boxShadow: "none",
}));
type StateProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
const LoginCard = ({ open, setOpen }: StateProps) => {
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Clear
            sx={{ position: "absolute", top: 20, right: 20, fontSize: 40 }}
          />
          <StyledBox>
            <Typography
              sx={{ fontSize: 24, fontWeight: "bold", marginBottom: 5 }}
            >
              Sign In
            </Typography>
            <InputLabel>Email Address*</InputLabel>
            <StyledInputBase type="email" />
            <InputLabel>Password*</InputLabel>
            <StyledInputBase type="password" />
            <Typography>
              Forgot your password?{" "}
              <Link sx={{ color: "black" }}>Reset password</Link>
            </Typography>
            <StyledButton>Sign In</StyledButton>
            <Typography sx={{ fontWeight: "bold", marginTop: 4 }}>
              Or sign in / create an account with
            </Typography>
            <StyledButton sx={{ bgcolor: "white", boxShadow: "2" }}>
              <Google sx={{ marginRight: 1 }} />
              Sign in with Google
            </StyledButton>
            <StyledButton sx={{ bgcolor: "rgb(26,119,242)", color: "white" }}>
              <FacebookRounded sx={{ marginRight: 1 }} /> Sign in with Facebook
            </StyledButton>
            <StyledButton sx={{ bgcolor: "black", color: "white" }}>
              <Apple sx={{ marginRight: 1 }} /> Sign in with Apple
            </StyledButton>
          </StyledBox>

          <Divider
            sx={{
              height: "80%",
              border: "1px solid rgb(200,200,200)",
              marginY: "auto",
            }}
          />
          <StyledBox>
            <Typography
              sx={{ fontSize: 24, fontWeight: "bold", marginBottom: 5 }}
            >
              Create an account
            </Typography>
            <InputLabel>Email Address*</InputLabel>
            <StyledInputBase type="email" />
            <InputLabel>Password*</InputLabel>
            <StyledInputBase type="password" />
            <Typography sx={{ marginTop: -3, color: "gray" }}>
              Minimum 6 Characters, 1 Uppercase, 1 Lowercase and 1 Number
            </Typography>
            <InputLabel sx={{ marginTop: 2 }}>Confirm Password*</InputLabel>
            <StyledInputBase type="password" />
            <Typography variant="body2" component="p">
              Sign up and receive 10% discount on your first order! By signing
              up you agree to our{" "}
              <Link sx={{ color: "black" }}>terms and conditions</Link> and to
              receive newsletters and marketing updates from Breville Appliances
              and our affiliated brands and acknowledge that you have read our{" "}
              <Link sx={{ color: "black" }}>privacy policy</Link>. You have the
              right to opt out of our newsletters and marketing updates at any
              time.
            </Typography>
            <StyledButton>Create Account</StyledButton>
          </StyledBox>
        </Box>
      </Modal>
    </Box>
  );
};

export default LoginCard;
