import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <div>
        <CustomCard
          title="Lokeshwar"
          description="A TA in the 100xDevs Cohort 2.0"
          interest="interest"
          a="Iconic"
          b="Open Source"
          c="App Dev"
          buttons={[
            {
              text: "LinkedIn",
              props: { variant: "contained", color: "primary" },
            },
            {
              text: "Twitter",
              props: { variant: "contained", color: "primary" },
            },
          ]}
        ></CustomCard>
      </div>
    </>
  );
}

const CustomCard = ({ title, description, interest, a, b, c, buttons }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" type="text" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body 2" component="div">
          {description}
        </Typography>
        <Typography variant="h4" type="text">
          {interest}
        </Typography>
        <Typography variant="body 2" component="div">
          {a}
        </Typography>
        <Typography variant="body 2" component="div">
          {b}
        </Typography>
        <Typography variant="body 2" component="div">
          {c}
        </Typography>
        {/* <Button variant="contained" color="primary">
          {buttons}
        </Button> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          {buttons &&
            buttons.map((button, index) => (
              <Button
                key={index}
                onClick={() => onButtonClick(index)}
                {...button.props}
              >
                {button.text || "Button"}
              </Button>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};
// const App = () => {
//   return (
//     <div>
//       <CustomCard
//         title="Example Card"
//         content="This is some example content for the card."
//         fname="edho okati"
//       />
//     </div>
//   );
// };

// const CustomCard = ({ title, fname, content, imageUrl }) => {
//   return (
//     <Card>
//       {imageUrl && <CardMedia component="img" height="140" alt="Card Image" />}
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {title}
//         </Typography>
//         <Button variant="contained">{fname}</Button>
//         <Typography variant="body1" color="text.secondary">
//           {content}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };
export default App;
