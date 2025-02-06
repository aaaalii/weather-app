import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar({setDarkMode, isDarkMode}){

  const handleDarkModeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`my-navbar d-flex justify-content-around align-items-center`}>
        <Link to='/' className="p-2">Home</Link>
        <Link to='/favourites' className="p-2">Favourites</Link>
        <Form className="text-white">
          <Form.Switch
            label="Dark mode"
            checked={isDarkMode}
            onChange={handleDarkModeToggle}
          />
        </Form>
      </div>
    </>
  );
}