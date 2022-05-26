import { Card, Container, Stack } from "@mui/material";
import CopyClipboard from "src/components/CopyClipboard";
import Page from "src/components/Page";
import useSettings from "src/hooks/useSettings";
import { PATH_DASHBOARD } from "src/routes/paths";
import { LoadingButton } from "@mui/lab";
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs";
import { useSelector } from 'react-redux';
import { useDispatch } from "src/redux/store";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { generateToken, getTokens } from "src/redux/slices/authTokens";

export default function GenerateAuthToken() {
  const { themeStretch } = useSettings();

  const {tokens, error, isLoading} = useSelector((state) => state.authTokens);
  
  const { enqueueSnackbar } = useSnackbar();
  
  const dispatch = useDispatch();

  const handleGenerateToken = () => {
    dispatch(generateToken);
  }

  useEffect(() => {
    dispatch(getTokens());
  }, [dispatch]);

  useEffect(() => {
    if(error) {
      enqueueSnackbar(error.message);
    }
  }, [error]);

  return (
    <Page title="Auth Tokens">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading={"Auth Tokens"}
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "Auth Tokens" },
          ]}
        />
        <Card sx={{ p: 3 }}>
          <Stack spacing={3} direction="column" alignItems={"flex-end"}>
            {tokens.map((token) => <CopyClipboard value={token} disabled />)}
            <LoadingButton onClick={handleGenerateToken} size="large" variant="contained" loading={isLoading} >
              Generate Token
            </LoadingButton>
          </Stack>
        </Card>
        {/* <Stack alignItems={"flex-end"}>
          
        </Stack> */}
      </Container>
    </Page>
  );
}
