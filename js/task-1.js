const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
	premium: true,
	changeKey(newHobby, newPremium){
		this.hobby = newHobby;
		this.premium = newPremium;
	}
};

user.mood = `happy`;
console.log(user);

user.changeKey(`skydiving`, false);
console.log(user);

const keys = Object.keys(user);
console.log(keys);

for (const key of keys) {
  console.log(key,  user[key]);
};

