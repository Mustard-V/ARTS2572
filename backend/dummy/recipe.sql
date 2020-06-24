-- INSERT INTO Category(id, name) VALUES(1, "Diary");
-- INSERT INTO Category(name) VALUES("Meat");
-- INSERT INTO Category(name) VALUES("Vegetable");

-- INSERT INTO Ingredient(id, name, category_id) VALUES(1, "egg", 1);
-- INSERT INTO Ingredient(name, category_id) VALUES("milk", 1);
-- INSERT INTO Ingredient(name, category_id) VALUES("beef", 2);
-- INSERT INTO Ingredient(name, category_id) VALUES("tomato", 3);




INSERT INTO Recipe(author_id, name, recipeInstructions, searched) VALUES(1, "Garides Saganaki", "Place the prawns in a pot and add enough water to cover. Boil for 5 minutes. Drain, reserving the liquid, and set aside.\r\nHeat 2 tablespoons of oil in a saucepan. Add the onion; cook and stir until soft. Mix in the parsley, wine, tomatoes, garlic and remaining olive oil. Simmer, stirring occasionally, for about 30 minutes, or until the sauce is thickened.\r\nWhile the sauce is simmering, the prawns should become cool enough to handle. First remove the legs by pinching them, and then pull off the shells, leaving the head and tail on.\r\nWhen the sauce has thickened, stir in the prawns. Bring to a simmer again if the sauce has cooled with the prawns, and cook for about 5 minutes. Add the feta and remove from the heat. Let stand until the cheese starts to melt. Serve warm with slices of crusty bread.\r\nThough completely untraditional, you can add a few tablespoons of stock or passata to this recipe to make a delicious pasta sauce. Toss with pasta after adding the feta, and serve.", 3);
INSERT INTO RecipeTag(recipe_id, tag_id) VALUES (1, 25);
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(502, 1, "500g");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(73, 1, "1");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(80, 1, "pinch");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(651, 1, "250ml");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(140, 1, "1 (400g) tin");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(316, 1, "1/2 teaspoon");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(15, 1, "1 (200g) pack");

INSERT INTO Recipe(name, recipeInstructions, searched) VALUES ("Chicken Enchilada Casserole", "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot. Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes. No water is needed, the chicken will cook in the Enchilada sauce. Make sure you stir occasionally so that it doesn't stick to the bottom.\r\nRemove chicken from the pot and shred with two forks.\r\nPreheat oven to 375 F degrees.\r\nStart layering the casserole. Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish. I used a longer baking dish, so that I can put 2 corn tortillas across. Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce. Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese. Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.\r\nBake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.\r\nServe warm.", 1);
INSERT INTO RecipeTag(recipe_id, tag_id) VALUES(2, 40);
INSERT INTO RecipeTag(recipe_id, tag_id) VALUES(2, 18);
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(536, 2, "14 oz jar");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(34, 2, "3 Cups");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(240, 2, "6");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(374, 2, "2");


INSERT INTO Recipe(author_id, name, recipeInstructions, searched) VALUES(1, "Dal fryi", "Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.\r\nCook dal with 2-1/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup.\r\nIn a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. Stir for a few seconds.\r\nAdd tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy.\r\nAdd cilantro and garam masala cook for about one minute.\r\nPour the seasoning over dal mix it well and cook for another minute.\r\nServe with Naan.", 0);
INSERT INTO RecipeTag(recipe_id, tag_id) VALUES (3, 2);
INSERT INTO RecipeTag(recipe_id, tag_id) VALUES (3, 28);
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(599, 3, "2-1/2 cups");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(600, 3, "1 tsp");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(336, 3, "1/4 tsp");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(38, 3, "3 tbs");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(140, 3, "1 cup");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(323, 3, "1/2 tsp");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(353, 3, "1/2 tsp");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(331, 3, "2");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(87, 3, "1 tbs chopped");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(86, 3, "2 tsp shredded");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(97, 3, "2 tbs");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(323, 3, "1/2 tsp");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(307, 3, "1 tsp");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(351, 3, "1/4 tsp");







INSERT INTO Recipe(name, recipeInstructions) VALUES("Apple Frangipan Tart", "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.");
INSERT INTO RecipeTag(recipe_id, tag_id) VALUES(4, 11);
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(243, 4, "175g/6oz");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(1, 4, "75g/3oz");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(167, 4, "200g/7oz");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(307, 4, "75g/3oz");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(2, 4, "2");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(712, 4, "75g/3oz");
INSERT INTO RecipeIngredient(ingredient_id, recipe_id, amount) VALUES(729, 4, "1 tsp");