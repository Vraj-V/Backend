
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


'''
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
'''


# Todo list
'''
todoList =[]

while True:
        print("select of your choice:: 1 Create a task, 2nd View the task, 3rd Delete task , 4 Quit ")
        choice = int(input("Enter the number: "))

        if choice ==1:
            task = input("Task: ")
            todoList.append(task)
            print(todoList)
            
        elif choice == 2:
            print(todoList)
        elif choice == 3:
            deleteTsk = int(input("Give task number to delete: "))
            for i in todoList:
                tskdelete = deleteTsk + 1
                todoList.pop(deleteTsk)
                print(f"Removed : ", deleteTsk)
                print(todoList)
        elif choice == 4:
            print( "Task ended!!")
            break
        else:
            print("Please enter the valid output from options!")
            '''


# Temperature converter!\

def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

print("Temperature Converter")
print("1. Celsius → Fahrenheit")
print("2. Fahrenheit → Celsius")

choice = input("Choose (1 or 2): ")

if choice == "1":
    c = float(input("Enter Celsius: "))
    print(f"{c}°C = {celsius_to_fahrenheit(c):.2f}°F")
elif choice == "2":
    f = float(input("Enter Fahrenheit: "))
    print(f"{f}°F = {fahrenheit_to_celsius(f):.2f}°C")
else:
    print("end")

print("end program!")