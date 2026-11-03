const sites = [
    { id :"abcauto" , name : "ABC Auto" , categories : ["Accessories", "Oil, Fluids & Chemicals"] },
    { id :"eapw" , name :"shop.eapw", categories : ["Vehicle, Equipment, Tools and Supplies"]}
];

console.log(`Total sites: ${sites.length}`);

for(const site of sites){
    console.log(`${site.name} has ${site.categories.length} categories.`);

    for(const category of site.categories){
        console.log(`-${category}`);
    }
}

sites.push( { id :"baxter" , name :"Baxter Auto Parts", categories : []});

console.log(`Total sites after adding one more site : ${sites.length}`);

console.log(sites[5]);

console.log(sites[0].phone);

console.log(sites[5].phone);
