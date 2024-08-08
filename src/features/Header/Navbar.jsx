import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import Nav from "../../ui/Nav";
import Input from "../../ui/Input";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const isLoggedIn=useSelector(state=>state.user.user)

  function handleClick() {
    setIsMenu((isMenu) => !isMenu);
  }


  return (
    <div className="relative">
      <div className="border-b border-borderColor">
        <div className=" hidden bg-black text-center text-sm leading-10 text-textWhite sm:block">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <button className="ml-1 underline">ShopNow</button>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pb-4 pt-5">
          <Link to="/" className="text-2xl font-semibold">
            Exclusive
          </Link>

          <ul className="hidden sm:items-center sm:gap-x-6   md:gap-x-12 ml:flex">
            <Nav to="/" end={true} type="headernav">
              Home
            </Nav>
            <Nav to="/contact" type="headernav">Contact</Nav>
            <Nav to="/about" type="headernav">About</Nav>
            {!isLoggedIn && <Nav to="/auth/signIn" type="headernav">Sign Up</Nav>}
          </ul>

          <IoMenu className="block text-3xl ml:hidden" onClick={handleClick} />

          <div className="hidden gap-x-2 sm:items-center ml:flex">
            <form className="relative inline-block">
              <Input
                classname="search"
                placeholder="What are you looking for?"
              />
              <CiSearch className="absolute right-3 top-2.5 text-xl " />
            </form>

            <FaRegHeart className="cursor-pointer text-xl " />
           <Nav to="/products" type="headernav"> <SlBasket className="cursor-pointer text-2xl" /></Nav>
           {1 && <Nav to="/account" type="headernav" ><CgProfile className="cursor-pointer text-2xl transition-all duration-300 hover:text-red-500"/></Nav>}
          </div>
        </div>
      </div>

      <ul
        className={`absolute flex w-full flex-col border-b bg-stone-50 border-stone-100  shadow-sm transition-all duration-300  ml:hidden ${isMenu ? "clip-path-custom-active" : "clip-path-custom-passiv"}`}
      >
        <Nav type="mobil" to="/" end={true}>
          Home
        </Nav>
        <Nav type="mobil" to="/contact">
          Contact
        </Nav>
        <Nav type="mobil" to="/about">
          About
        </Nav>
        <Nav type="mobil" to="/singup">
          Sign Up
        </Nav>
      </ul>
    </div>
  );
}

export default Navbar;
