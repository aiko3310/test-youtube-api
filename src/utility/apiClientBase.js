export const fetchGet = url => {
  return fetch(url)
    .then(async res => {
      // console.log('response status', res.status);
      const response = await res.json();
      if (res.ok) {
        return {
          response,
          status: res.status
        };
      }
      return {
        status: res.status
      };
    })
    .catch(err => {
      console.log(err);
      return {
        status: false
      };
    });
};
