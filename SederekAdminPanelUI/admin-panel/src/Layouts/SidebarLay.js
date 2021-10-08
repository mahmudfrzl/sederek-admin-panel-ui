import React from "react";
import {
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
const SidebarLay = () => {
  return (
    <Container className="sidebar">
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width=" thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="building outline" />
          Shopping Mall
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="shopping cart" />
          Shops
        </Menu.Item>
      </Sidebar>
    </Container>
  );
};
export default SidebarLay;
