import axios from "axios";

export const getList = async (id: number) => {
  const res = await axios.get(
    `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${id}`
  );
  return await res.data;
};
