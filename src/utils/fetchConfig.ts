export const fetchConfig = async () => {
  console.log('Fetching config', process.env.NEXT_PUBLIC_URL);
  try {
    const data = await fetch(
      'https://utfs.io/f/nTbi8t7br8oGiIN1uygZy6hGHOkMBCITxe345UPsuwqtjfmd',
    ).then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    });
    return data;
  } catch {
    console.log('Error has occurred');
  }
};
