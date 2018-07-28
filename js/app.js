var app = new Vue({
	el: '#app',
	data: {
		newUser : {},
		editUser : {},
		users : [
			{
				id: 5,
				name: "Leanne Graham",
				email: "Sincere@april.biz",
				avatar : "https://randomuser.me/api/portraits/lego/2.jpg"			
			},
			{
				id: 6,
				name: "Ervin Howell",
				email: "Shanna@melissa.tv",	
				avatar : "https://randomuser.me/api/portraits/lego/3.jpg"
			}
		]
	},
	methods: {
		add() {
			this.users.push({
                id: this.users[this.users.length - 1]['id'] + 1,
                name: this.newUser.name,
                email: this.newUser.email,
                avatar: this.newUser.avatar
            });
			this.newUser = {};
		},
		showEditModal(user, index) {
			this.editUser = {
				index: index,
				name: user.name,
				email: user.email,
				avatar: user.avatar,
			};
		},
  		update() {
  			index = this.editUser.index;

  			this.users[index].name = this.editUser.name;
  			this.users[index].email = this.editUser.email;
  			this.users[index].avatar = this.editUser.avatar;

  			this.editUser = {};
    	},
  		remove(index) {
  			this.users.splice(index, 1);
    	}
  	}
});