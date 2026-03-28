# # def nums():
# #     for num in range(1,100):
# #         print(num)

# # nums()

# # # odd number
# # # def odd():
    
# # #     for num in range(10,100):
# # #         if num % 2 ==0:
# # #             print(num)

# # # odd()
# # # Numbers

# # # odd number that are greater than 50

# def great():
    
#     for num in range(10,100):
#         if num >= 50:
#             if num % 2 == 0:
#                 print(num)

# great()


# # greater number in 3

def greater():
    num1 = int(input("Enter the number 1: "))
    num2 = int(input("Enter the number 2: "))
    num3 = int(input("Enter the number 3 :"))

    if num1 > num2:
        if num1 > num3:
            print("Number 1:",num1)
        else:
            print("Number 3:",num3)
    elif num2 > num3:
        if num2 > num1:
            print("Number 2: ",num2)
        else:
            print("Number 1: ",num1)

    else:
        print("Number 3: ",num3)
greater()