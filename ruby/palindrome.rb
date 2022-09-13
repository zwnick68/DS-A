def is_palindrome(s)
    s = s.gsub(/[^a-zA-Z\d]/, "").downcase
    return s == s.reverse
end

 p is_palindrome("A man, a plan, a canal: Panama")