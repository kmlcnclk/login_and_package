export const login = async (mail, password) => {
  const url = 'https://api.ziyuno.com/api/auth/login/en';

  const data = await {
    mail: mail,
    password: password,
  };

  const response = await fetch(url, {
    method: 'POST',
    //   credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    body: JSON.stringify(data),
  });

  const res = await response.json();

  return res;
};
