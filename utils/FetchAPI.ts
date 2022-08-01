const fetchAPI = async <T>(url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    
    const data = await response.json()
    return data as T
    
  } catch (error) {
    const message = `An error has occured: ${error}`;
    throw new Error(message);
  }
}

export default fetchAPI

