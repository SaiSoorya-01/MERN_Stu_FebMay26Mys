const items = {
    items1: "Laptop",
    items2: "Server",
    items3: "cloudAPI"
};

for(const[item,itemName] of Object.entries(items)){
    console.log(`${item}:${itemName}`);
}