export const packages = async () => {
  const url = 'https://api.ziyuno.com/api/package/packages/en';

  const response = await fetch(url, {
    method: 'GET',
    //   credentials: 'same-origin',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  const res = await response.json();

  return res;
};
