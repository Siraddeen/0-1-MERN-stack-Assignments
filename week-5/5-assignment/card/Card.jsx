// import React from "react";
// import { Card } from "@mui/material";
// import CardContent from "@mui/material";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

// const CustomCard = ({ firstName, description, interest, socialMedia }) => {
//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h1" component="div">
//           {firstName}
//         </Typography>
//         <Typography variant="h2" type="text">
//           {description}
//         </Typography>
//         <Typography variant="body2" component="div">
//           {firstName}
//         </Typography>
//         <Typography variant="h1" component="div">
//           {firstName}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CustomCard = ({ title, content, imageUrl }) => {
  return (
    <Card>
      {imageUrl && <CardMedia component="img" height="140" alt="Card Image" />}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
