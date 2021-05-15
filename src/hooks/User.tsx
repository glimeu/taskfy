import React, { createContext, useContext, useEffect, useState } from 'react';

const defaultUser: User = {
  id: '007',
  name: 'Padrão',
  avatar_url: 'https://github.com/miguel5g.png',
};

const userContext = createContext<User>(defaultUser);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    if (window) {
      const localUser = window.localStorage.getItem('user');
      if (localUser) setUser(JSON.parse(localUser));
    }
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export const useUser = (): User => useContext(userContext);

export default UserProvider;
