import { Box } from "@mui/material";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function AgreementResponsesPage() {
  return (
    <Box sx={{ padding: 1 }}>
      <Title>Agreement Responses</Title>

      <SubTitle>Agreeing with Positive Statements</SubTitle>
      <p>A: I like swimming.</p>
      <p>B:</p>
      <ul>
        <li>Me too.</li>
        <li>So do I.</li>
        <li>I do, too.</li>
      </ul>

      <SubTitle>Agreeing with Negative Statements</SubTitle>
      <p>A: I don't like swimming.</p>
      <p>B:</p>
      <ul>
        <li>Me neither.</li>
        <li>Neither do I.</li>
        <li>I don't either.</li>
      </ul>
    </Box>
  );
}

export default AgreementResponsesPage;
