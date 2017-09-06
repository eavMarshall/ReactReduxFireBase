const defaultState = {
  selectedPage: null,
  sideBarMenu: [
      { id: "home", icon: "home", value: "Home"},
      { id: "client", icon: "user", value: "Client"},
      { id: "dashboard", icon: "dashboard", value: "Dashboards",  data:[
          { id: "dashboard1", value: "Dashboard 1"},
          { id: "dashboard2", value: "Dashboard 2"}
      ]},
      { id: "layouts", icon: "columns", value:"Layouts", data:[
          { id: "accordions", value: "Accordions"},
          { id: "portlets", value: "Portlets"}
      ]},
      { id: "tables", icon: "table", value:"Data Tables", data:[
          { id: "tables1", value: "Datatable"},
          { id: "tables2", value: "TreeTable"},
          { id: "tables3", value: "Pivot"}
      ]}
  ]
}

export default function(state = defaultState, action) {
  var newState = state;
  switch (action.type) {
    case '@MainPage.MenuSelectChange':
      newState = Object.assign({}, state);
      return newState;
  }
  return state;
}