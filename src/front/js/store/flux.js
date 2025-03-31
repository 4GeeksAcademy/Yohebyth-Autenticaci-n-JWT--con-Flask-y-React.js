const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,			
		},
		actions: {

			signup: async (email, password) => {
				try {
					const create = await fetch(`${process.env.BACKEND_URL}api/signup`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								email,
								password
							})
					});

					if(!create.ok)
						throw('Error')
					console.log("usuario creado");
					
					
				}
				catch {
					console.log("Error");					
				}
			},

			login: async (email, password) => {
				try {
					const token = await fetch(`${process.env.BACKEND_URL}api/login`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								email,
								password
							})
					});

					if(!token.ok)
						throw('Error')
					const tokenJson = await token.json();
					localStorage.setItem('token', tokenJson.access_token)
					
				}
				catch {
					console.log("Error");					
				}
			},

			getUser: async () => {
				const token = localStorage.getItem('token');				

				try {
					const user = await fetch (`${process.env.BACKEND_URL}api/user`,
						{
							method: 'GET',
							headers: {
								'Content-Type': 'Application-json',
								'Authorization': `Bearer ${token}`
							}
						}
					)

					if (!user.ok) return Throw('Error Get User')
					const userData = await user.json();				
					return (userData);
									
				}
				catch {
					console.log('Error');					
				}
			},	
			
			closeSession: () => {
				localStorage.setItem('token', null)
			}
		}
	};
};

export default getState;
