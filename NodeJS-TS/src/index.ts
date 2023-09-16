type Handle = () => Promise<string>

const fullName = 'Dư Thanh Được'

const person: { name: string } = { name: fullName }
console.log(person)

const handle: Handle = () => Promise.resolve(fullName)
handle().then((res) => console.log('Hello', res))
handle().then(console.log)
