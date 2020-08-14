import React from "react";
import { Container, Button, Link } from "react-floating-action-button";

const MenuButton = () => {
  return (
    <Container className='menu_button'>
      <Link
        href='/services'
        tooltip='Create note link'
        icon='far fa-sticky-note'
      />
      <Link href='#' tooltip='Add user link' icon='fas fa-user-plus' />
      <Button tooltip='Navigation' icon='fas fa-bars' rotate={true} />
    </Container>
  );
};

export default MenuButton;
