const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
breakfastMenu.unshift("Pancakes- $12", "Eggs Benedict -$22.99", "Oatmeal -$21.99", "Frittata -$15");
breakfastMenu.length = 4 
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
mainCourseMenu.unshift("Steak- $22", "Pasta -$12.99", "Burger -$21.99", "Salmomn -$18");
mainCourseMenu.length = 4 
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
dessertMenu.unshift("Cake - $3", "Ice cream -$4", "Pudding -$6", "Fruit Salad -$4");
dessertMenu.length = 4 

 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

 let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

console.log(breakfastMenu.length);