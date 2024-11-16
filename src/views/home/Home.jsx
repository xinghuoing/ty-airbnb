import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner/HomeBanner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1/HomeSectionV1";
import HomeSectionV2 from "./c-cpns/home-section-v2/HomeSectionV2";
import HomeLongfor from "./c-cpns/home-longfor/HomeLongfor";
import HomeSectionV3 from "./c-cpns/home-section-v3/HomeSectionV3";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    disCountInfo,
    hotRecommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      disCountInfo: state.home.disCountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {!!Object.keys(disCountInfo).length && (
          <HomeSectionV2 roomData={disCountInfo} />
        )}
        {!!Object.keys(hotRecommendInfo).length && (
          <HomeSectionV2 roomData={hotRecommendInfo} />
        )}

        <HomeLongfor roomData={longforInfo} />
        <HomeSectionV1 roomData={goodPriceInfo} />
        <HomeSectionV1 roomData={highScoreInfo} />
        <HomeSectionV3 roomData={plusInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
