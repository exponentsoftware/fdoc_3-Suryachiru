
const randomId = () => {
    const numbersLetters = '0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
      ''
    );
    let randId = '';
    let randIndex;
    for (let i = 0; i < 6; i++) {
      randIndex = Math.floor(Math.random() * numbersLetters.length);
      randId += numbersLetters[randIndex];
    }
    return randId;
  };
  const newUser = {
    _id: randomId(),
    username: 'Surya',
    email: 'suryachiru91@gmail.com',
    password: '123123123',
    createdAt: new Date(),
    isLoggedIn: false
  };
  const signUp = () => {
    const { email } = newUser;
    for (const user of users) {
      if (user['email'] == email) {
        return 'An email has already exist. Please log in!';
      }
    }
    users.push(newUser);
    return 'You have successfully signed up!';
  };
  console.log(users);
  console.log(signUp(newUser));
  console.log(signUp(newUser));
  console.log(users);
  const currentUser = {
    email: 'suryachiru91@gmail.com',
    password: '123123123'
  };
  
const signIn = user => {
    let found = false;
    const { email, password } = user;
    for (let i = 0; i < users.length; i++) {
      if (users[i]['email'] === email && users[i]['password'] === password) {
        users[i].isLoggedIn = true;
        return 'Successfully logged in';
      }
    }
    if (!found) {
      return 'Use does not exist';
    }
  };
  console.log(signIn(currentUser));
  console.log(users);
  console.log(signIn({ email: 'suryachiru91@gmail.com', password: '123456' }));