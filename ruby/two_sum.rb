def two_sum(nums, target)
    dict = {}
  nums.each_with_index do |n, i|
    if dict[target - n]
      return [dict[target - n], i]
    end
        dict[n] = i
    end
end
p two_sum([2,3,4], 6)