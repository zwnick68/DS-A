def remove_duplicates(nums)
    j = 0
    i = 0
    while i < nums.length 
        if nums[i] != nums[j]
            nums[++j] = nums[i] 
            i += 1
        else 
            i += 1
        end 
    end
    j += 1
end    
puts remove_duplicates([1,1,2]) 

