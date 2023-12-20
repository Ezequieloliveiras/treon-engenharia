import Dropdown from 'react-bootstrap/Dropdown';

function Submenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        Serviços
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Submenu;