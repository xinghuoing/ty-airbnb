import tyRequest from "..";


export function getHomeGoodPriceData() {
  return tyRequest.get({
    url: "/home/goodprice"
  })
}
export function getHomeHighScoreData() {
  return tyRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return tyRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return tyRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData() {
  return tyRequest.get({
    url: "/home/longfor",
  });
}
export function getHomePlusData() {
  return tyRequest.get({
    url: "/home/plus",
  });
}