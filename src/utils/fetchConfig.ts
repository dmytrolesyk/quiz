export const fetchConfig = async () => {
  try {
    const data = await fetch(process.env.NEXT_PUBLIC_CONFIG_URL ?? '').then(res => {
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
