import React from 'react';
import { Affix, Menu, Anchor } from 'antd';
import Typing from 'react-typing-animation';

// const { Link } = Anchor;
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
import './Header.less';

const { Link } = Anchor;
const Header = () => (
  <div className="Header" id="home">
    <Affix>
      <Anchor>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link href="#home" title="Home" />
          </Menu.Item>
          <Menu.Item key="about">
            <Link href="#about" title="About" />
          </Menu.Item>
          <Menu.Item key="resume">
            <Link href="#resume" title="Resume" />
          </Menu.Item>
          <Menu.Item key="portfolio">
            <Link href="#portfolio" title="Portfolio" />
          </Menu.Item>
          <Menu.Item key="contact">
            <Link href="#contact" title="Contact" />
          </Menu.Item>
        </Menu>
      </Anchor>
    </Affix>
    <div className="vertical-align-middle">
      <Typing speed={100}>
        <h1 className="white-text header-text">Hi, My name is Hanming Zeng</h1>
        <p className="white-text description">This site is under construction.</p>
      </Typing>
    </div>

  </div>
);

export default Header;
