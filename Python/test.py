'''
print("Hello python is running!")


# variable

greet = 12
print(greet)


#checking the varialbe type
print(type(greet))


#Changing the variable type
a= "3"
print(int(a))

#Arithmetic Operators:
num1 =21
num2 = 20

print("num1 + num2 = " , num1 + num2)
print("num1 - num2 = " , num1 - num2)
print("num1 * num2 = " , num1 * num2)
print("num1 / num2 = " , num1 / num2)
print("num1 // num2 = " , num1 // num2)
print("num1 ** num2 = " , num1 ** num2)
print("num1 % num2 = " , num1 % num2)
'''

# Assignment Operators

num1 = 21
# num1 += 4
# num1 -= 4
# num1 /= 4
# num1 *= 4
# num1 //= 4
num1 **= 4
# print(num1)



# Read a doc.
'''
import pandas as pd

df = pd.read_csv("data.csv")
print(df)
'''
# String methods

a ="vraj"
print(a[0:3])
print(a.capitalize())
print(a.upper())
print(a.count("a"))
print(a.isalnum())
print(a.isnumeric())
print(a.isalpha())