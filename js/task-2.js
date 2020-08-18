const countProps = function(obj) {
  const keys = Object.keys(obj);
  return (keys.length);
};




console.log(countProps({ name: 'Mango', age: 2 })); 

