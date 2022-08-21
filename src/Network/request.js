import network from "./network";

export const fetchList = async () => {
  return await network.get();
};
