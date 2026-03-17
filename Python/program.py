
# Calculator
'''
num1 = float(input("Enter the first number: "))
operator = input("Enter the operator: ")
num2 = float(input("Enter the second number: "))


if operator == "+":
    print("Answer: ", num1 + num2)
elif operator == "-":
    print("Answer : ", num1 - num2)
elif operator == "*":
    print("Answer : ", num1 * num2)
elif operator == "/":
    print("Answer : ", num1 / num2)

else:
    print("invalid operator")

print("Done!")
'''


# Random number

import random as rd

secert = rd.randint(1,10)
attemps =0

while True:
    user = int(input("Enter any number btw 1 to 10: "))
    attemps += 1
    if user < secert:
            print("Too low")
    elif user > secert:
            print("Too high")
    else:
            print(f"Congrats found the number {attemps} attempts!")
            break