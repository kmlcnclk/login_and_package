import React, { useEffect, useState } from 'react';
import { getUserFromLocal } from '../LocalStorage/userLocalStorage';

function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const u = getUserFromLocal()[0];
    if (u) {
      setUser(u);
    }
  }, [setUser]);
  return (
    <div>
      {user ? (
        <div className=" sm:flex-row flex-col  w-full flex items-center h-auto p-3 sm:p-5 justify-around bg-red-500 rounded-md mt-yarım shadow-lg hover:shadow-xl bg-opacity-90 text-white font-semibold text-base">
          <p className="my-1"> {user.name}</p>
          <p className="my-1"> {user.mail}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
