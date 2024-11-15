import tyRequest from "..";


export function getEntireRoomListData(offset = 0, size = 20) {
  return tyRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  });
}