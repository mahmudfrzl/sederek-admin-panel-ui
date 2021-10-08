import React from "react";
import { Menu } from "semantic-ui-react";
import SederekAZ from "../images/SederekAZ.png";
import { Container } from "semantic-ui-react";
const Navi = () => {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item icon="briefcase">
            <img src={SederekAZ} />
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item icon="edit outline" name="Add job posting" />
            <Menu.Item></Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
