
class BinarySearch:

    def __init__(self):
        self.index_tracker = 0

    def binary_search(self, target_num, arr):
        self.target_num = target_num
        self.arr = arr
        self.arr.sort()
        self.halfway_index = len(arr) // 2
        self.referance_num = self.arr[self.halfway_index]
        self.index_tracker += self.halfway_index
        return self.search()
    

    def search(self):
        if len(self.arr) == 1 and self.target_num != self.referance_num:
            self.index_tracker = 0
            return -1
        elif self.target_num == self.referance_num:
            answer = self.index_tracker
            self.index_tracker = 0
            return answer
        elif self.target_num < self.referance_num:
            self.index_tracker -= self.halfway_index
            del self.arr[self.halfway_index:len(self.arr)]
            return self.binary_search(self.target_num, self.arr)
        elif self.target_num > self.referance_num:
            del self.arr[0:self.halfway_index]
            return self.binary_search(self.target_num, self.arr)
        else: 
            self.index_tracker = 0
            return -1

        


new_search = BinarySearch()
print (new_search.binary_search(1, [1,2,3,4,5]), 'should be 0')
print (new_search.binary_search(2, [1,2,3,4,5]), 'should be 1')
print (new_search.binary_search(3, [1,2,3,4,5]), 'should be 2')
print (new_search.binary_search(4, [1,2,3,4,5]), 'should be 3')
print (new_search.binary_search(5, [1,2,3,4,5]), 'should be 4')
print (new_search.binary_search(7, [1,5,7,2,3,8,4,9]), 'should be 5')
print (new_search.binary_search(7, [1,5,0,2,3,8,4,9]), 'should be -1')

