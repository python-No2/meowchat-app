export const topBarHeight = uni.getSystemInfoSync().statusBarHeight || 0;
const capsuleData = uni.getMenuButtonBoundingClientRect();
export const capsuleBarHeight =
  capsuleData.height + (capsuleData.top - topBarHeight) * 2;
export const navBarHeight = topBarHeight + capsuleBarHeight;
