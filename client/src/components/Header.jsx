import Auth from "../utils/auth";

const Header = ({ onToggleModal, onToggleNav, onToggleCart }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="flex justify-between px-10 py-10 bg-emerald-100">
      <div className="">
        <button onClick={onToggleNav} className="lg:hidden">
          <i className="fa-solid fa-bars text-3xl text-white hover:text-cyan-800 duration-200"></i>
        </button>
        <h1 className="flex text-7xl text-zinc-950 font-bold ">Remedys</h1>
        <h1 className="text-3xl text-zinc-950 font-bold">Skincare</h1>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <button onClick={logout} className="mr-5">
              <i className="fa-solid fa-right-from-bracket text-3xl text-white hover:text-cyan-800 duration-200"></i>
            </button>
          </>
        ) : (
          <>
            <button onClick={onToggleModal} className="mr-5">
              <i className="fa-solid fa-user text-3xl text-white hover:text-cyan-800 duration-200"></i>
            </button>
          </>
        )}

        <button onClick={Auth.loggedIn() ? onToggleCart : onToggleModal}>
          {/* if user is logged in, show cart, if not then open login modal */}
          <i className="fa-solid fa-cart-shopping text-3xl text-white hover:text-cyan-800 duration-200"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;