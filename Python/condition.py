# # # age = int(input("Enter your age: "))
# # # if( age >18):
# # #     print("Yes, you can drive!")
# # # elif(age <=10):
# # #     print("get out")
# # # else:
# # #     print("You can`t go")


# #     # match
# # a = int(input("Enter your num: "))

# # match a:
# #     case 1:
# #         print("Matching" , a)

# #     case 3:
# #         print("Matching" , a)
# #     case 12:
# #         print("Matching" , a)
# #     case _:
# #         print("No found")

# # print("End program!")




# # loops

# for i in range(10):
#     print(i)
# print("ended!")

num = int(input("Enter the num btwn 0 to 10 : "))

# for i in range(3):
#     if( num ==0):
#         break
#     else:
#         print(num)

# print("end")

i =0
while (i < 10):
    print(i)
    if( i ==num):
        print("matched")
        break
    i += 1