export type Category = "Starters" | "Main courses" | "Nyama Choma" | "Chicken" | "Seafood" | "Vegetarian" | "Desserts" | "Beverages";
export interface MenuItem {
  id: string; name: string; description: string; price: number; category: Category;
  image: string; dietary?: string; featured?: boolean;
}
export const categories: Category[] = ["Starters", "Main courses", "Nyama Choma", "Chicken", "Seafood", "Vegetarian", "Desserts", "Beverages"];
// Images are placeholders: drop real photos into /public/images/menu/
const img = (n: string) => `/images/menu/${n}.jpg`;
export const menuData: MenuItem[] = [
  { id: "s1", name: "Smoked Samosa Trio", description: "Beef, chicken and spinach samosas with tamarind dip.", price: 650, category: "Starters", image: img("samosa") },
  { id: "s2", name: "Kachumbari Bruschetta", description: "Grilled bread, avocado, fresh kachumbari.", price: 550, category: "Starters", image: img("bruschetta"), dietary: "Vegetarian" },
  { id: "m1", name: "Slow-Braised Beef Short Rib", description: "Eight-hour braise, ugali crisps, sukuma gremolata.", price: 2200, category: "Main courses", image: img("shortrib"), featured: true },
  { id: "n1", name: "Oak-Fired Goat Ribs", description: "Charcoal-grilled goat ribs with pilipili glaze.", price: 1800, category: "Nyama Choma", image: img("goat"), featured: true },
  { id: "n2", name: "Smoky Beef Choma Platter", description: "Half kilo beef choma, kachumbari, roasted maize.", price: 1500, category: "Nyama Choma", image: img("beef") },
  { id: "c1", name: "Coconut Lemongrass Chicken", description: "Half chicken, coconut-lemongrass marinade, coastal rice.", price: 1400, category: "Chicken", image: img("chicken"), featured: true },
  { id: "f1", name: "Lamu-Style Grilled Tilapia", description: "Whole tilapia, coconut tamarind sauce, chapati.", price: 1700, category: "Seafood", image: img("tilapia") },
  { id: "v1", name: "Pumpkin & Chickpea Curry", description: "Slow-cooked curry, coconut cream, fresh coriander.", price: 1100, category: "Vegetarian", image: img("curry"), dietary: "Vegan" },
  { id: "d1", name: "Mandazi Bread Pudding", description: "Spiced mandazi, caramel, vanilla ice cream.", price: 700, category: "Desserts", image: img("pudding"), featured: true },
  { id: "b1", name: "Dawa Cooler", description: "Honey, lime, ginger and fresh mint.", price: 450, category: "Beverages", image: img("dawa"), dietary: "Non-alcoholic" },
];
export const todaysSpecial = menuData.find((m) => m.id === "n1")!;
