const findBestEmployee = function(employees) {
  const values = Object.values(employees);
let max = 0;
for (let i = 0; i < values.length; i+=1) {
     if (values[i] > max) 
      max = values[i];
      }
const entries = Object.entries(employees);
   console.log(entries);
    for (let i = 0; i < entries.length; i+=1){
   if (entries[i][1] === max)
    return entries[i][0] 
}

}





console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);
