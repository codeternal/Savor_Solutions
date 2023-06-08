const btns = document.querySelectorAll(".recipe_button, .vid_button, .togglebtn");

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    btn.classList.toggle('active');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

var togglebtn = document.getElementById("togglebtn");
var sidebar = document.getElementById("sidebar");
var profileInfo = document.querySelector(".profile-info");

togglebtn.addEventListener("click", function() {
  if (sidebar.classList.contains("showing")) {
    sidebar.classList.remove("showing");
    sidebar.classList.add("hiding");
    profileInfo.classList.remove("show");
  } else {
    sidebar.classList.remove("hiding");
    sidebar.classList.add("showing");
    profileInfo.classList.add("show");
  }
});




// Vue.js code for recipe search
new Vue({
  el: '#recipe-search',
  data() {
    return {
      searchTerm: '',
      searchResults: [],
      recipes: [
  {
    title: 'Adobo',
    image: 'food/adobo.jfif',
    ingredients: ['Chicken', 'Soy Sauce', 'Vinegar', 'Garlic', 'Bay Leaves', 'Peppercorns'],
    instructions: '1. In a pot, combine chicken, soy sauce, vinegar, garlic, bay leaves, and peppercorns.\n2. Bring to a boil, then reduce heat and simmer until chicken is tender and sauce is reduced.\n3. Serve hot with steamed rice.',
    video: 'sample.mp4'
  },
  {
    title: 'Sinigang',
    image: 'img/sinigang.jfif',
    ingredients: ['Pork', 'Tamarind', 'Vegetables (e.g., Kangkong, Radish, Eggplant)', 'Onion', 'Tomato'],
    instructions: '1. Boil pork in a pot with tamarind, onion, and tomato until tender.\n2. Add vegetables and simmer until cooked.\n3. Season with fish sauce or salt to taste.\n4. Serve hot with steamed rice.',
    video: 'https://www.youtube.com/embed/t-beBtUZz3E'
  },
  {
    title: 'Lechon',
    image: 'img/lechon.jfif',
    ingredients: ['Whole Pig', 'Salt', 'Pepper', 'Garlic', 'Lemongrass'],
    instructions: '1. Prepare a whole pig by cleaning and marinating it with salt, pepper, garlic, and lemongrass.\n2. Roast the pig on a spit over charcoal or in an oven until the skin is crispy and the meat is tender.\n3. Serve hot with lechon sauce and steamed rice.',
    video: 'https://www.youtube.com/embed/IidRPF1RU5c'
  },
  {
    title: 'Pancit',
    image: 'img/fishball.jfif',
    ingredients: ['Rice Noodles', 'Chicken', 'Shrimp', 'Mixed Vegetables', 'Soy Sauce'],
    instructions: '1. Cook rice noodles according to package instructions.\n2. In a pan, sauté chicken, shrimp, and mixed vegetables.\n3. Add cooked rice noodles and soy sauce.\n4. Stir-fry until well combined and heated through.\n5. Serve hot.',
    video: 'https://www.youtube.com/embed/9UEv8VlLDOc'
  },
  {
    title: 'Kare-Kare',
    image: 'img/karekare.jfif',
    ingredients: ['Oxtail', 'Tripe', 'Peanut Butter', 'Annatto Seeds', 'Eggplant', 'Bok Choy'],
    instructions: '1. Boil oxtail and tripe until tender.\n2. In a separate pan, toast and grind annatto seeds to extract the color.\n3. Mix peanut butter with water to make a thick sauce.\n4. Add the annatto extract and peanut butter sauce to the pot with the oxtail and tripe.\n5. Add eggplant and bok choy and simmer until cooked.\n6. Serve hot with bagoong (shrimp paste) and steamed rice.',
    video: 'https://www.youtube.com/embed/YvTs4on5aVM'
  },
  {
    title: 'Sisig',
    image: 'img/sisig.jfif',
    ingredients: ['Pork Face', 'Onion', 'Chili Peppers', 'Calamansi', 'Mayonnaise'],
    instructions: '1. Boil pork face until tender, then grill or broil until crispy.\n2. Chop the pork into small pieces.\n3. Sauté onion and chili peppers in a pan.\n4. Add the chopped pork and squeeze calamansi juice.\n5. Stir in mayonnaise.\n6. Serve hot with steamed rice.',
    video: 'https://www.youtube.com/embed/kapD-91ZUH8'
  },
  {
    title: 'Halo-Halo',
    image: 'img/halohalo.jfif',
    ingredients: ['Shaved Ice', 'Sweetened Fruits (e.g., Banana, Jackfruit)', 'Jellies', 'Sweet Beans', 'Leche Flan', 'Ube Halaya'],
    instructions: '1. Fill a glass with shaved ice.\n2. Layer sweetened fruits, jellies, sweet beans, leche flan, and ube halaya on top of the ice.\n3. Drizzle with evaporated milk.\n4. Top with a scoop of ice cream.\n5. Serve chilled.',
    video: 'https://www.youtube.com/embed/kby-TtBv2Vs'
  },
  {
    title: 'Lumpia',
    image: 'img/lumpia.jfif',
    ingredients: ['Ground Pork', 'Carrots', 'Cabbage', 'Onion', 'Garlic', 'Spring Roll Wrappers'],
    instructions: '1. In a pan, sauté ground pork, carrots, cabbage, onion, and garlic.\n2. Wrap the filling in spring roll wrappers.\n3. Fry the lumpia rolls until golden brown.\n4. Serve hot with sweet and sour sauce.',
    video: 'https://www.youtube.com/embed/BIarUjm4U-0'
  },
  {
    title: 'Chicken Inasal',
    image: 'food/chickeninasal.jfif',
    ingredients: ['Chicken Thighs', 'Lemongrass', 'Garlic', 'Ginger', 'Calamansi', 'Fish Sauce'],
    instructions: '1. Marinate chicken thighs in a mixture of lemongrass, garlic, ginger, calamansi juice, and fish sauce.\n2. Grill the chicken until cooked through and charred.\n3. Baste with the marinade while grilling.\n4. Serve hot with steamed rice.',
    video: 'https://www.youtube.com/embed/Y6Ixbef7iRc'
  },
  {
    title: 'Chicharon',
    image: 'food/chicharon.jfif',
    ingredients: ['Pork Rinds', 'Salt', 'Oil'],
    instructions: '1. Deep-fry pork rinds in hot oil until crispy.\n2. Drain excess oil and sprinkle with salt.\n3. Serve as a snack or as a topping for dishes.',
    video: 'https://www.youtube.com/embed/qRwfXynYrgY'
  },
  {
    title: 'Tapsilog',
    image: 'food/tapsilog.jfif',
    ingredients: ['Beef Tapa', 'Garlic Fried Rice', 'Fried Egg'],
    instructions: '1. Marinate beef tapa in a mixture of soy sauce, vinegar, garlic, and spices.\n2. Pan-fry the marinated beef until cooked.\n3. Serve with garlic fried rice and a fried egg.\n4. Optional: Serve with atchara (pickled papaya) and vinegar dipping sauce.',
    video: 'https://www.youtube.com/embed/UWgJuCL_NU4'
  },
  {
    title: 'Bulalo',
    image: 'food/bulalo.jfif',
    ingredients: ['Beef Shank', 'Bone Marrow', 'Corn', 'Cabbage', 'Potato', 'Onion', 'Garlic'],
    instructions: '1. Boil beef shank and bone marrow in a pot until tender.\n2. Add corn, cabbage, potato, onion, and garlic.\n3. Simmer until vegetables are cooked.\n4. Season with salt and pepper to taste.\n5. Serve hot with steamed rice.',
    video: 'https://www.youtube.com/embed/rmOQDLc0pFk'
  },
  {
    title: 'Bibingka',
    image: 'food/bibingka.jfif',
    ingredients: ['Rice Flour', 'Coconut Milk', 'Eggs', 'Sugar', 'Salt', 'Grated Cheese'],
    instructions: '1. In a bowl, mix rice flour, coconut milk, eggs, sugar, and salt to make a batter.\n2. Pour the batter into banana leaf-lined molds.\n3. Sprinkle grated cheese on top.\n4. Bake in a preheated oven until cooked and slightly browned.\n5. Serve hot.',
    video: 'https://www.youtube.com/embed/qFy7WGaDo_8'
  },
  {
    title: 'Puto',
    image: 'food/puto.jfif',
    ingredients: ['Rice Flour', 'Sugar', 'Baking Powder', 'Coconut Milk', 'Water'],
    instructions: '1. In a bowl, mix rice flour, sugar, and baking powder.\n2. Gradually add coconut milk and water to make a smooth batter.\n3. Pour the batter into small molds.\n4. Steam the puto for about 15-20 minutes or until cooked.\n5. Serve hot.',
    video: 'https://www.youtube.com/embed/dBEnJXg6yzQ'
  },
  {
    title: 'Balut',
    image: 'food/balut.jfif',
    ingredients: ['Fertilized Duck Egg', 'Salt'],
    instructions: '1. Boil the fertilized duck egg in water.\n2. Sprinkle with salt.\n3. Crack the shell and eat the balut, including the partially developed duck embryo inside.\n4. Serve as a popular street food snack.',
    video: 'https://www.youtube.com/shorts/HWLnwYycN0U'
  },
  {
    title: 'Tinola',
    image: 'food/tinola.jfif',
    ingredients: ['Chicken', 'Papaya', 'Chili Leaves', 'Ginger', 'Garlic', 'Onion'],
    instructions: '1. Sauté ginger, garlic, and onion in a pot.\n2. Add chicken pieces and cook until browned.\n3. Pour in water and bring to a boil.\n4. Add papaya and simmer until tender.\n5. Stir in chili leaves.\n6. Season with fish sauce or salt to taste.\n7. Serve hot with steamed rice.',
    video: 'https://www.youtube.com/embed/pEMMBceYyMw'
  },
  {
    title: 'Longganisa',
    image: 'food/longganisa.jfif',
    ingredients: ['Ground Pork', 'Garlic', 'Soy Sauce', 'Vinegar', 'Brown Sugar', 'Black Pepper'],
    instructions: '1. Mix ground pork with garlic, soy sauce, vinegar, brown sugar, and black pepper.\n2. Shape the mixture into sausage links.\n3. Fry the longganisa until cooked and browned.\n4. Serve hot with garlic fried rice and a fried egg.',
    video: 'https://www.youtube.com/embed/jNP5AwCUcns'
  },
  {
    title: 'Champorado',
    image: 'food/champorado.jfif',
    ingredients: ['Glutinous Rice', 'Cocoa Powder', 'Sugar', 'Evaporated Milk'],
    instructions: '1. Cook glutinous rice in water until tender.\n2. Stir in cocoa powder and sugar.\n3. Continue cooking until the mixture thickens.\n4. Serve hot with a drizzle of evaporated milk.',
    video: 'https://youtube.com/embed/7jXv9YZ8pPA'
  },
  {
    title: 'Turon',
    image: 'food/turon.jfif',
    ingredients: ['Saba Banana', 'Brown Sugar', 'Spring Roll Wrappers', 'Jackfruit (optional)', 'Oil'],
    instructions: '1. Roll saba banana (and jackfruit if desired) in brown sugar.\n2. Wrap the banana in a spring roll wrapper.\n3. Fry the turon until golden brown.\n4. Serve hot as a snack or dessert.',
    video: 'https://www.youtube.com/embed/4QeQ4O6WHkc'
  },
  {
    title: 'Dinuguan',
    image: 'food/dinuguan.jfif',
    ingredients: ['Pork Meat and Offal', 'Pork Blood', 'Vinegar', 'Garlic', 'Onion', 'Chili Peppers'],
    instructions: '1. Boil pork meat and offal until tender.\n2. In a separate pan, sauté garlic, onion, and chili peppers.\n3. Add the boiled pork meat and offal to the pan.\n4. Pour in vinegar and simmer for a few minutes.\n5. Stir in pork blood and continue cooking until the sauce thickens.\n6. Serve hot with steamed rice.',
    video: 'https://www.youtube.com/embed/a0101E0EuEk'
  },
  {
    title: 'Pasta Carbonara',
    image: 'food/pastacarbo.jfif',
    ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan Cheese', 'Black Pepper'],
    instructions: '1. Cook spaghetti according to package instructions. \n2. In a skillet, cook bacon until crispy. \n3. In a bowl, whisk eggs and mix in grated Parmesan cheese. \n4. Drain cooked spaghetti and mix with the bacon. \n5. Remove from heat and quickly stir in the egg mixture. \n6. Season with black pepper and serve immediately.',
    video: 'https://www.youtube.com/embed/78nzrhpRg1g'
  },
  {
    title: 'Chicken Stir-Fry',
    image: 'food/chickenstir.jfif',
    ingredients: ['Chicken Breast', 'Mixed Vegetables', 'Soy Sauce', 'Garlic', 'Ginger', 'Vegetable Oil'],
    instructions: '1. Cut chicken breast into bite-sized pieces\n2. Heat vegetable oil in a wok or skillet.\n3. Add minced garlic and grated ginger, and stir-fry for a minute.\n4. Add chicken and cook until no longer pink.\n5. Add mixed vegetables and stir-fry until tender-crisp.\n6. Season with soy sauce and continue to cook for another minute.\n7. Serve hot with steamed rice.',
    video: 'https://www.youtube.com/embed/5dybdeTylz0'
  },
  {
    title: 'Tomato Soup',
    image: 'food/tomato.jfif',
    ingredients: ['Tomatoes', 'Onion', 'Garlic', 'Vegetable Stock', 'Salt', 'Black Pepper', 'Basil', 'Olive Oil'],
    instructions: '1. Heat olive oil in a large pot.\n2. Add chopped onion and minced garlic, and sauté until fragrant.\n3. Add diced tomatoes and cook for a few minutes.\n4. Pour in vegetable stock and bring to a boil.\n5. Reduce heat and simmer for 20 minutes.\n6. Season with salt, black pepper, and chopped basil.\n7. Blend the soup until smooth using an immersion blender.\n8. Serve hot with a drizzle of olive oil and garnish with basil leaves.',
    video: 'https://www.youtube.com/embed/szjZ3vqwyXE'
  },
  {
    title: 'Chocolate Chip Cookies',
    image: 'food/choco.jfif',
    ingredients: ['Butter', 'Granulated Sugar', 'Brown Sugar', 'Eggs', 'Vanilla Extract', 'All-Purpose Flour', 'Baking Soda', 'Salt', 'Chocolate Chips'],
    instructions: '1. Preheat oven to 375°F (190°C).\n2. In a bowl, cream together softened butter, granulated sugar, and brown sugar.\n3. Beat in eggs one at a time, then stir in vanilla extract.\n4. In a separate bowl, whisk together all-purpose flour, baking soda, and salt.\n5. Gradually add the dry ingredients to the wet mixture, mixing well.\n6. Stir in chocolate chips.\n7. Drop rounded spoonfuls of dough onto a greased baking sheet.\n8. Bake for 9-11 minutes or until golden brown.\n9. Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.',
    video: 'https://www.youtube.com/embed/PFJAuAWxuvI'
  }
],
      noResultsMessage: ''
    };
  },
  methods: {
    search() {
      this.searchResults = this.searchTerm
        ? this.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase())
          )
        : [];

      if (this.searchResults.length > 0) {
        this.noResultsMessage = '';
      } else {
        this.noResultsMessage = 'No recipes found.';
      }

      this.searchTerm = '';
    },
    formatInstructions(instructions) {
      return instructions.split('\n').join('<br/>');
    },

  }
});

// JavaScript code for product search
const products = [
  {
    photo: 'food/kaldereta.jpg',
    name: 'Kaldereta',
    recipe: ['2 lbs beef cubed', '3 pieces garlic cloves crushed and chopped', '1 piece onion finely chopped', '2 cups beef broth', '1 piece red bell pepper sliced', '1 piece green bell pepper sliced', '1 cup tomato sauce', '1/2 cup liver spread processed using blender', '1 teaspoon chili flakes', '3 pieces dried bay leaves', '2 cups potatoes sliced', '2 cups carrots sliced', '1/4 cup cooking oil', ' 2/3 cup green olives', 'salt and pepper to taste'],
    category: ['Heat the cooking oil in the cooking pot or pressure cooker.', 'Saute the onion and garlic.', 'Add the beef. Cook for 5 minutes or until the color turns light brown.', 'Add the dried bay leaves and crushed pepper. Stir.', 'Add the liver spread. Stir.', 'Pour-in the tomato sauce and beef broth.', 'Cook the beef until it becomes tender (about 30 mins if using a pressure cooker, or 1 to 2 hours if using an ordinary pot).', 'Add potato and carrots. Cook for 8 to 10 minutes.', 'Put the green olives and bell peppers in the cooking pot. Stir and continue to cook for 5 minutes more.', 'Add salt and pepper to taste.', 'Serve Hot. Enjoy!']
  },
  {
    photo: 'img/karekare.jfif',
    name: 'Kare Kare',
    recipe: ['3 lbs oxtail cut in 2-inch slices (you can also use tripe or beef slices)', '1 piece small banana flower bud sliced', '1 bundle pechay or bok choy', '1 bundle string beans cut into 2-inch slices', '4 pieces eggplants sliced', '1 cup ground peanuts', '1/2 cup peanut butter', '1/2 cup shrimp paste', '34 Ounces water (about 1 Liter)', '1/2 cup annatto seeds soaked in a cup of water', '1/2 cup toasted ground rice', '1 tbsp garlic minced', '1 piece onion chopped', 'salt and pepper'],
    category: ['In a large pot, bring the water to a boil.', 'Put in the oxtail followed by the onions and simmer for 2.5 to 3 hrs or until tender (35 minutes if using a pressure cooker).', 'Once the meat is tender, add the ground peanuts, peanut butter, and coloring (water from the annatto seed mixture) and simmer for 5 to 7 minutes.', 'Add the toasted ground rice and simmer for 5 minutes.', 'On a separate pan, saute the garlic then add the banana flower, eggplant, and string beans and cook for 5 minutes.', 'Transfer the cooked vegetables to the large pot (where the rest of the ingredients are).', 'Add salt and pepper to taste.', 'Serve hot with shrimp paste. Enjoy!']
  },
  {
    photo: 'img/sinigang.jfif',
    name: 'Sinigang',
    recipe: ['2 lbs pork ribs or pork belly cut into serving pieces', '1 piece onion, quartered', '2 pieces tomatoes, quartered', '1 piece radish (labanos), sliced', '2 pieces eggplant, sliced', '1 bundle kangkong (water spinach)', '1 bunch sitaw (string beans), cut into 2-inch lengths', '2 pieces taro (gabi), peeled and halved', '3-4 pieces long green chili peppers (siling pansigang)', '1 pack sinigang sa sampaloc mix', '8 cups water', 'Salt or fish sauce (patis) to taste'],
    category: ['In a pot, bring the water to a boil.', 'Add the onions and tomatoes and cook until softened.', 'Add the pork ribs and simmer until tender.', 'Add the taro, radish, and sinigang sa sampaloc mix. Simmer until the vegetables are cooked.', 'Add the eggplant, long green chili peppers, sitaw, and kangkong. Cook for a few minutes until the vegetables are tender.', 'Season with salt or fish sauce (patis) to taste.', 'Serve hot with steamed rice. Enjoy!']
  },
    {
    photo: 'img/adobo.jfif',
    name: 'Chicken Adobo',
    recipe: [
      '2 lbs chicken, cut into serving pieces',
      '1/2 cup soy sauce',
      '1/2 cup vinegar',
      '1 head garlic, minced',
      '1 teaspoon whole peppercorns',
      '3 pieces dried bay leaves',
      '1 cup water',
      '2 tablespoons cooking oil',
      'Salt to taste'
    ],
    category: [
      'In a pot, combine the soy sauce, vinegar, minced garlic, peppercorns, and bay leaves.',
      'Add the chicken to the pot and marinate for at least 30 minutes.',
      'After marinating, bring the mixture to a boil over medium heat.',
      'Once boiling, lower the heat to a simmer and add water.',
      'Simmer for 30-45 minutes or until the chicken is tender.',
      'Heat the cooking oil in a separate pan and fry the marinated chicken until browned.',
      'Add the fried chicken back to the pot with the sauce and simmer for another 10 minutes.',
      'Season with salt to taste.',
      'Serve hot with steamed rice. Enjoy!'
    ]
  },
  {
    photo: 'img/fishball.jfif',
    name: 'Pancit',
    recipe: ['1/2 lb pancit noodles (bihon or canton)', '1/2 lb meat (chicken, pork, or shrimp), sliced into small pieces', '1 cup vegetables (carrots, cabbage, bell peppers), sliced thinly', '1/2 cup green beans, sliced thinly', '1/4 cup soy sauce', '4 cloves garlic, minced', '1 onion, sliced', '2 cups chicken broth', '2 tablespoons cooking oil', 'Salt and pepper to taste'],
    category: ['In a large pan or wok, heat the cooking oil over medium heat.', 'Saute the garlic and onion until fragrant and slightly browned.', 'Add the meat and cook until browned.', 'Add the vegetables and stir-fry for a few minutes until they start to soften.', 'Push the meat and vegetables to the side of the pan and add the soy sauce to the center.', 'Let the soy sauce cook for a minute, then mix everything together.', 'Add the pancit noodles and chicken broth to the pan.', 'Stir-fry everything together until the noodles are cooked and the broth is absorbed.', 'Season with salt and pepper to taste.', 'Serve hot and enjoy!']
  },
  {
    photo: 'img/lechon.jfif',
    name: 'Lechon',
    recipe: ['1 whole pig (around 50-80 lbs)', 'Rock salt or sea salt', 'Water for basting', 'For the stuffing:', '8 stalks lemongrass, pounded', '10 pieces bay leaves', '10 pieces whole black peppercorns', '4 cups onions, chopped', '2 cups tomatoes, chopped', '2 cups leeks or scallions, chopped', '1 cup garlic, minced', 'Salt and pepper to taste'],
    category: ['Clean the pig thoroughly and make sure the inside cavity is empty.', 'Rub the pig with rock salt or sea salt, making sure to massage the salt into the skin.', 'For the stuffing, mix together the lemongrass, bay leaves, black peppercorns, onions, tomatoes, leeks or scallions, garlic, salt, and pepper.', 'Stuff the mixture into the pig’s cavity.', 'Sew or truss the pig to keep the stuffing intact.', 'Prepare the fire for roasting and make sure it is at a consistent temperature.', 'Place the pig on the roasting spit and secure it tightly.', 'Slowly roast the pig over the fire, basting it with water every 30 minutes to keep it moist.', 'Continue roasting the pig for several hours, until the skin is crispy and the meat is tender.', 'Once done, remove the pig from the spit and let it rest for a few minutes.', 'Carve and serve the lechon with the crispy skin and tender meat.', 'Enjoy the delicious lechon with your favorite sauces and side dishes!']
  }
];

// Rest of the JavaScript code remains the same

const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('products');

function filterProducts(searchTerm) {
  productList.innerHTML = '';

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filteredProducts.forEach(product => {
    const listItem = document.createElement('li');

    const foodName = document.createElement('h3');
    foodName.textContent = product.name;
    foodName.classList.add('food-name'); // name of food
    listItem.appendChild(foodName);

    const photo = document.createElement('img');
    photo.src = product.photo;
    photo.alt = product.name;
    listItem.appendChild(photo); // picture of food

    const recipe = document.createElement('p');
    recipe.classList.add('recipe'); // recipe of food
    product.recipe.forEach(line => {
      const recipeLine = document.createElement('span');
      recipeLine.textContent = line;
      recipe.appendChild(recipeLine);
      recipe.appendChild(document.createElement('br'));
    });
    listItem.appendChild(recipe);

    const category = document.createElement('p');
    category.classList.add('category'); // category of food
    product.category.forEach(line => {
      const categoryLine = document.createElement('span');
      categoryLine.textContent = line;
      category.appendChild(categoryLine);
      category.appendChild(document.createElement('br'));
    });
    listItem.appendChild(category);

    productList.appendChild(listItem);
  });
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value;
  filterProducts(searchTerm);
});

filterProducts('');

