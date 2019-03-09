
import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

class SideBar extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

  state = {
    openKeys: [],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
        <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            className="dashboard-nav"
        >
            <Menu.Item key="1" className="navigation-item">
                <Link href='/dashboard'>
                    <a>
                        <i className="la la-home"></i>Dashboard
                    </a>
                </Link>
            </Menu.Item>
            <SubMenu  className="navigation-item dropdown"  key="sub1" title={<p><i className="la la-fire"></i><span>My Listing</span></p>}>
                <Menu.Item key="2">
                    <Link href='/mylisting'>
                        <a>
                            All Listings
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link href='/mylisting'>
                        <a>
                            Add New Listings
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link href='/mylisting'>
                        <a>
                            Active Listings
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link href='/mylisting'>
                        <a>
                            Expired Listings
                        </a>
                    </Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="6" className="navigation-item">
                <Link href='/favourite'>
                    <a>
                        <i className="la la-heart-o"></i>My Favorites
                    </a>
                </Link>
            </Menu.Item>
            <SubMenu  className="navigation-item dropdown"  key="sub2" title={<p><i className="la la-envelope"></i><span>Messages</span></p>}>
                <Menu.Item key="7">
                    <Link href='/message'>
                        <a>
                            All Messages
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="8">
                    <Link href='/message'>
                        <a>
                            Unread Messages
                        </a>
                    </Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" className="navigation-item">
                <Link href='/claim'>
                    <a>
                        <i className="la la-bullhorn"></i>Claim
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item key="10" className="navigation-item">
                <Link href='/invoice'>
                    <a>
                        <i className="la la-file-text"></i>Invoice
                    </a>
                </Link>
            </Menu.Item>
            <SubMenu  className="navigation-item dropdown"  key="sub3" title={<p><i className="la la-plus-square-o"></i><span>Ad Campaigns</span></p>}>
                <Menu.Item key="11">
                    <Link href='/promotion'>
                        <a>
                            Ad Campaigns 1
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="12">
                    <Link href='/promotion'>
                        <a>
                            Ad Campaigns 2
                        </a>
                    </Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="13" className="navigation-item">
                <Link href='/packages'>
                    <a>
                        <i className="la la-tags"></i>Package
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item key="14" className="navigation-item">
                <Link href='/dashboard'>
                    <a>
                        <i className="la la-user"></i>My Profile
                    </a>
                </Link>
            </Menu.Item>
        </Menu>
    );
  }
}

export default SideBar;