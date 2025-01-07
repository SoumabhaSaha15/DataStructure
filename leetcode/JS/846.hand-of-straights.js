/*
 * @lc app=leetcode id=846 lang=javascript
 *
 * [846] Hand of Straights
 */

// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;
  const countMap = new Map();
  for (const card of hand) countMap.set(card, (countMap.get(card) || 0) + 1);
  const sortedCards = Array.from(countMap.keys()).sort((a, b) => a - b);
  for (const card of sortedCards) {
    const count = countMap.get(card);
    if (count > 0) {
      for (let i = 0; i < groupSize; i++) {
        const currentCard = card + i;
        if ((countMap.get(currentCard) || 0) < count) return false;
        countMap.set(currentCard, countMap.get(currentCard) - count);
      }
    }
  }
  return true;
};
// @lc code=end

