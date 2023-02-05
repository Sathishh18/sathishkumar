import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        protein, carbohydrate, fat, and other nutrients used in the body of 
        an organism to sustain growth and vital processes and to furnish energy.
         The absorption and utilization of food by the body is fundamental to nutrition 
         and is facilitated by digestion. Plants, which convert solar energy to food by photosynthesis, 
         are the primary food source. Animals that feed on plants often serve as sources of food for other animals.
          To learn more about the sequence of transfers of matter and energy in the form of food from organism to 
          organism, see food chainHunting and gathering, horticulture, pastoralism, and the development of agriculture 
          are the primary means by which humans have adapted to their environments to feed themselves. 
          Food has long served as a carrier of culture in human societies and has been a driving force for globalization. This was especially the case during the early phases of European trade and colonial expansion, when foods such as the hot red pepper, corn (maize), and sweet potatoes spread throughout Europe to Africa and Asia
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt libero reprehenderit cum sint fugit cumque temporibus modi
          facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
          tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
          ullam impedit velit quo, corporis ducimus numquam dignissimos
          inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
          aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
          ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
          nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
          tempore voluptatibus perferendis esse eaque temporibus porro?
          Aspernatur beatae deleniti illo autem!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
