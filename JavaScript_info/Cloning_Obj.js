// DEEP CLONING / StructuredCloning()

const rainbow = {
    color : [ "blue", "yellow"],
    address : {
        country : "India",
    },
};

const rainbow2 = structuredClone(rainbow);
// const rainbow2 = JSON.parse(JSON.stringify(rainbow));

// rainbow2.address = { country : "India",  city : "Pune" };
 rainbow.address.city = "Mumbai";

console.log(rainbow);
console.log(rainbow2);