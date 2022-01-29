def flatten(list):
	copyList = []
	for char in list:
		if isinstance(char,int) or isinstance(char,str):
			copyList.append(char)
		else:
			char_pos = aList.index(char) + 1
			return copyList + flatten(char) + flatten(list[char_pos:len(list)])
	return copyList
