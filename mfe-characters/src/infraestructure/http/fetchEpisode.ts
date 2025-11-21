export const fetchEpisodeName = async (url: string): Promise<string> => {
  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch episode");

  const data = await res.json();
  return data.name;
};
