const Navbar = () => {
  return (
    <div className="navBar lg:flex justify-between items-center p-[3rem] min-[360px] ">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueIs">
          <strong>Job</strong> Search
        </h1>
      </div>
      <div className="menu lg:flex   sm:flex text-[#6f6f6f]   md:flex  gap-8 ">
        <li href="#" className="menuList  hover:text-blueIs">
          Jobs
        </li>
        <li className="menuList  hover:text-blueIs">Companies</li>
        <li className="menuList  hover:text-blueIs">About</li>
        <li className="menuList  hover:text-blueIs">Contact</li>
        <li className="menuList  hover:text-blueIs">Blog</li>
        <li className="menuList  hover:text-blueIs">Login</li>
        <li className="menuList  hover:text-blueIs">Register</li>
      </div>
    </div>
  );
};

export default Navbar;
