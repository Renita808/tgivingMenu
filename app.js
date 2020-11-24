const menu = [
  {
    id: 1,
    title: "jumbo roast turkey",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpg",
    desc: `A handsome grass-fed, free range 19-pound tom turkery lightly salted and roasted to perfection! Nah, it's just a regular bird.`,
  },
  {
    id: 2,
    title: "classic stuffing",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpg",
    desc: `Everyone's favorite classic StoveTop stuffing complemented by the addition of the lovely pre-packaged spice mixture.`,
  },
  {
    id: 3,
    title: "creamy gravy",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpg",
    desc: `Lump-free, turkey flavored sauce with just the right amount of artificial flavoring. Bottled in 2020.`,
  },
  {
    id: 4,
    title: "cranberry sauce variety",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpg",
    desc: `We're offering both the traditional cranberry "gel" along with the more realistic whole berry sauce. `,
  },
  {
    id: 5,
    title: "green beans",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpg",
    desc: `Fresh (not canned!) Haricots Verts-like beans - Publix's best! - lightly seasoned with bacon bits.`,
  },
  {
    id: 6,
    title: "sweet potato casserole",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpg",
    desc: `Everyone's favorite vitamin-b packed sweet potatoes topped with brown sugar, nuts and mini Jet-Puffed delights.`,
  },
  {
    id: 7,
    title: "dinner rolls",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpg",
    desc: `Adding additional starch to the meal, these lightly-browned, butter-topped yeast rolls will take you from full to stuffed.`,
  },
  {
    id: 8,
    title: "mashed potatoes",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpg",
    desc: `Because stuffing, rolls, and sweet potatoes are just not enough starch, homemade mashed potatoes will give you the carb high you need.`,
  },
  {
    id: 9,
    title: "Icebox Cake",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpg",
    desc: `To round off the meal - a delightful mix of cake, eggs, milk and pudding - what's not to love!`,
  },
  {
    id: 10,
    title: "The finest coffee",
    category: "dinner",
    price: 23.99,
    img: "./images/item-10.jpg",
    desc: `A wide variety of flavored and non-flavored caffine-packed elixers to ward off the Thanksgiving tryptophan coma.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')


//load items
window.addEventListener('DOMContentLoaded', function() {
 displayMenuItems(menu);
// displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function(item) {

    return ` <article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join('')
  sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons () {
  const categories = menu.reduce(function(values,item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
   return values
  }, ['all']
  );
  const categoryBtns = categories.map(function(category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  }).join('');
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');

 //filter items
 filterBtns.forEach(function(btn) {
   btn.addEventListener('click', function(e) {
     const category = e.currentTarget.dataset.id;
     const menuCategory = menu.filter(function(menuItem) {
      if(menuItem.category === category) {
       return menuItem;
      }
   
     });
     console.log(menuCategory);
     if(category === 'all'){
       displayMenuItems(menu)
     }
     else {
       displayMenuItems(menuCategory)
     }
   })
 })
}