heckPossibility = function (nums) {
	let isChanged = false;
	for (let i = 1; i < nums.length - 1; i++) {
		let pre = nums[i - 1];
		let cur = nums[i];
		let nxt = nums[i + 1];
		if (!(pre <= cur && cur <= nxt)) {
			if (isChanged) return false;
			if (pre > cur && cur <= nxt) {
				nums[i - 1] = cur;
			} else if (pre <= cur && cur > nxt) {
				if (pre < nxt) {
					nums[i] = nxt;
				} else {
					nums[i + 1] = cur;
				}
			} else if (pre > cur && cur > nxt) {
				return false;
			}
			isChanged = true;
		}
	}
	return true;
};
