import React from "react";
import { Grid } from "semantic-ui-react";
import SidebarLay from "./SidebarLay.js";
import Categories from "./Categories";
const Dashboard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="3">
            <SidebarLay />
          </Grid.Column>
          <Grid.Column width="13">
            <Categories />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
