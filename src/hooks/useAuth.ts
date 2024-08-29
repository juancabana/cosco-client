/* Authentication hook
  This hook will contain the logic to manage the authentication state of the user.
 */

interface PayloadSetToken {
  key: string;
  token: string;
}

interface PayloadToken {
  key: string;
}

interface UseAuthReturn {
  setToken: (payload: PayloadSetToken) => void;
  getToken: (payload: PayloadToken) => string | null;
  removeToken: (payload: PayloadToken) => void;
}

const useAuth = (): UseAuthReturn => {
  const setToken = ({ key, token }: PayloadSetToken) =>
    localStorage.setItem(key, token);

  const getToken = ({ key }: PayloadToken) => localStorage.getItem(key);

  const removeToken = ({ key }: PayloadToken) => localStorage.removeItem(key);

  return { setToken, getToken, removeToken };
};

export default useAuth;
