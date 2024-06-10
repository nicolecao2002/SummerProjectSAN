import requests
import json

#getting all of the jackets first 



brands = ["Under Armour", "Nike", "Adidas", "Puma"]
colors = ["Black", "Blue", "Red", "White"]
colors2 = {color: [] for color in colors}
clothing_types = ["Jacket", "Jeans", "Sweater", "T-shirt"]

jackets = {brand: colors2.copy() for brand in brands}
jeans = {brand: colors2.copy() for brand in brands}
sweatshirt = {brand: colors2.copy() for brand in brands}
shirts = {brand: colors2.copy() for brand in brands}
dresses = {brand: colors2.copy() for brand in brands}

categories = {
    "Jacket": jackets,
    "Jeans": jeans,
    "Sweater": sweatshirt,
    "T-shirt": shirts,
    "Dress": dresses
}

json_file_path = "./cats.json"
querystring = {"page":"1",}

headers = {
	"X-RapidAPI-Key": "7c363c8772msh1e2e0311103c993p12ce6ajsn731c5191d610",
	"X-RapidAPI-Host": "ebay32.p.rapidapi.com"
}

#jacket seacrhing 
for brand in brands:
    for clothing in clothing_types:
        for color in colors:
           url = "https://ebay32.p.rapidapi.com/search/"+brand+" "+clothing+" "+color
           response = requests.get(url, headers=headers, params=querystring)

           if response.status_code == 200:
                response_data = response.json()
                #loop through all of the brands jackets
                for item in response_data["products"]:
                    # metadat for each jacket
                    instance_template = {
                        "Price":"",
                        "Image":"",
                        "URL":""
                    }

                    title = item["title"]
                    image = item["thumbnail"]
                    price = item["price"]["value"]
                    url = item["url"]

                    instance_template["Image"]=image
                    instance_template["Price"]=price
                    instance_template["URL"] = url

                     # Ensure that the nested keys exist in categories
                    # if clothing not in categories:
                    #     categories[clothing] = {}
                    # if brand not in categories[clothing]:
                    #     categories[clothing][brand] = {}
                    # if color not in categories[clothing][brand]:
                    #     categories[clothing][brand][color] = []

                    categories[clothing][brand][color].append(instance_template)
          
        # for material in materials:
        #     url = "https://ebay32.p.rapidapi.com/search/"+brand+" "+clothing+" "+material
        #     response = requests.get(url, headers=headers, params=querystring)

        #     if response.status_code == 200:
        #         response_data = response.json()
        #         #loop through all of the brands jackets
        #         for item in response_data["products"]:
        #              # metadat for each jacket
        #             instance_template = {
        #                 "Title":"",
        #                 "Price":"",
        #                 "Image":""
        #             }

        #             title = item["title"]
        #             image = item["thumbnail"]
        #             price = item["price"]["value"]

        #             instance_template["Image"]=image
        #             instance_template["Price"]=price
        #             instance_template["Title"]=title

                    


# #looping through each brands jacket
# for brand in brands:


   
#     url = "https://ebay32.p.rapidapi.com/search/"+brand+" jacket"
#     response = requests.get(url, headers=headers, params=querystring)

#     if response.status_code == 200:
#         response_data = response.json()

#         #loop through all of the brands jackets
#         for NBjacket in response_data["products"]:
#             # metadat for each jacket
#             instance_template = {
#                 "Title":"",
#                 "Price":"",
#                 "Image":""
#             }

#             title = NBjacket["title"]
#             image = NBjacket["thumbnail"]
#             price = NBjacket["price"]["value"]

#             instance_template["Image"]=image
#             instance_template["Price"]=price
#             instance_template["Title"]=title

#             jackets[brand].append(instance_template)

# categories["jackets"] = jackets

# #Jeans

# for brand in brands:
   
#     url = "https://ebay32.p.rapidapi.com/search/"+brand+" jeans"
#     response = requests.get(url, headers=headers, params=querystring)

#     if response.status_code == 200:
#         response_data = response.json()

#         #loop through all of the brands jackets
#         for NBjacket in response_data["products"]:
#             instance_template = {
#                 "Title":"",
#                 "Price":"",
#                 "Image":""
#             }

#             title = NBjacket["title"]
#             image = NBjacket["thumbnail"]
#             price = NBjacket["price"]["value"]

#             instance_template["Image"]=image
#             instance_template["Price"]=price
#             instance_template["Title"]=title

#             jeans[brand].append(instance_template)

# categories["jeans"] = jeans

# #pants

# for brand in brands:
   
#     url = "https://ebay32.p.rapidapi.com/search/"+brand+" pants"
#     response = requests.get(url, headers=headers, params=querystring)

#     if response.status_code == 200:
#         response_data = response.json()

#         #loop through all of the brands jackets
#         for NBjacket in response_data["products"]:
#             instance_template = {
#                 "Title":"",
#                 "Price":"",
#                 "Image":""
#             }

#             title = NBjacket["title"]
#             image = NBjacket["thumbnail"]
#             price = NBjacket["price"]["value"]

#             instance_template["Image"]=image
#             instance_template["Price"]=price
#             instance_template["Title"]=title

#             pants[brand].append(instance_template)

# categories["pants"] = pants


# #sweatshirts

# for brand in brands:
   
#     url = "https://ebay32.p.rapidapi.com/search/"+brand+" sweatshirt"
#     response = requests.get(url, headers=headers, params=querystring)

#     if response.status_code == 200:
#         response_data = response.json()

#         #loop through all of the brands jackets
#         for NBjacket in response_data["products"]:
#             instance_template = {
#                 "Title":"",
#                 "Price":"",
#                 "Image":""
#             }

#             title = NBjacket["title"]
#             image = NBjacket["thumbnail"]
#             price = NBjacket["price"]["value"]

#             instance_template["Image"]=image
#             instance_template["Price"]=price
#             instance_template["Title"]=title

#             sweatshirt[brand].append(instance_template)

# categories["sweatshirt"] = sweatshirt

# #shorts


# for brand in brands:
   
#     url = "https://ebay32.p.rapidapi.com/search/"+brand+" shorts"
#     response = requests.get(url, headers=headers, params=querystring)

#     if response.status_code == 200:
#         response_data = response.json()

#         #loop through all of the brands jackets
#         for NBjacket in response_data["products"]:
#             instance_template = {
#                 "Title":"",
#                 "Price":"",
#                 "Image":""
#             }

#             title = NBjacket["title"]
#             image = NBjacket["thumbnail"]
#             price = NBjacket["price"]["value"]

#             instance_template["Image"]=image
#             instance_template["Price"]=price
#             instance_template["Title"]=title

#             shorts[brand].append(instance_template)

# categories["shorts"] = shorts


# #shirt

# for brand in brands:
   
#     url = "https://ebay32.p.rapidapi.com/search/"+brand+" shirt"
#     response = requests.get(url, headers=headers, params=querystring)

#     if response.status_code == 200:
#         response_data = response.json()

#         #loop through all of the brands jackets
#         for NBjacket in response_data["products"]:
#             instance_template = {
#                 "Title":"",
#                 "Price":"",
#                 "Image":""
#             }

#             title = NBjacket["title"]
#             image = NBjacket["thumbnail"]
#             price = NBjacket["price"]["value"]

#             instance_template["Image"]=image
#             instance_template["Price"]=price
#             instance_template["Title"]=title

#             shirt[brand].append(instance_template)

# categories["shirt"] = shirt


# #dress


# for brand in brands:
   
#     url = "https://ebay32.p.rapidapi.com/search/"+brand+" jacket"
#     response = requests.get(url, headers=headers, params=querystring)

#     if response.status_code == 200:
#         response_data = response.json()

#         #loop through all of the brands jackets
#         for NBjacket in response_data["products"]:
#             instance_template = {
#                 "Title":"",
#                 "Price":"",
#                 "Image":""
#             }

#             title = NBjacket["title"]
#             image = NBjacket["thumbnail"]
#             price = NBjacket["price"]["value"]

#             instance_template["Image"]=image
#             instance_template["Price"]=price
#             instance_template["Title"]=title

#             dress[brand].append(instance_template)

# categories["dress"] = dress

    

with open(json_file_path, "w") as json_file:
  json.dump(categories, json_file, indent=2)
