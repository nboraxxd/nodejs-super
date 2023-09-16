interface User {
  name: string
  age: number
}

const renderUser = (user: User) => {
  console.log(user)
}

const user = { name: 'Duoc', age: 26 }
renderUser(user)
