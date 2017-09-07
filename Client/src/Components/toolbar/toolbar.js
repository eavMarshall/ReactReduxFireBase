import React, { Component } from 'react';
import SideBarMenu from './menus/sidebarmenu.js';
import MenuItem from './menus/groupmenuitem/menuitem/menuitem.js';
import './toolbar.css';
import ic_menu_white from './ic_menu_white_24px.svg';

class ToolBar extends Component {
  constructor() {
    super();
  }

  setToolBarName(value) {
      this.setState({toolBarName: value});
  }

  handleMenuToggle() {
    let sidebar = this.refs.sidebarmenu;
    let toolbar = this.refs.toolbarPageContainer;
    sidebar.classList.toggle("sideMenuClosed");
    toolbar.classList.toggle("toolbarPageContainerNoMenu");
  }

  render() {
    return (
      <div>
        <div ref="sidebarmenu" className="sidenav">
          {this.props.children}
        </div>
        <div className="sidenavmain">
          <div id="bar" className="toolBarContainer toolbar">
            <div>
              <input type="image" src={ic_menu_white} className="menuButton" onClick={this.handleMenuToggle.bind(this)}/>
              <div className="tooltiptext">Tooltip text</div>
            </div>
            <div className="toolBarLabel">
              <span className="toolBarLabelText">{this.props.toolBarName}</span>
            </div>
            <div></div>
          </div>
          <div>
            {this.props.selectedPage}
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;