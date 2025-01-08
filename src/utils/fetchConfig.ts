export const fetchConfig = async () => {
  try {
    const data = await fetch('http://localhost:3000/config.json').then(res => {
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
