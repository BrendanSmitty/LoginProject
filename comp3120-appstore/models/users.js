const users = {
    'bob': {
      username: 'bob',
      fullname: 'Bob Boballoba',
      email: 'bob@bob.com',
      password: 'bob'
    },
  };

let sessions = {
    // username : sessionid
};

const validatePassword = (username, password) => {
    return users[username] && users[username].password === password;
}

const generateID = () => {
    return Math.random().toString().substring(2);
}

const logout = (username) => {
    delete sessions[username];
}

const getUser = (request) => {
    if (request.session && request.session.sessionid) {
        const username = getUserForSession(request.session.sessionid);
        return users[username];
    }
}

const getSessionForUser = (username) => {
    return sessions[username];
}

const getUserForSession = (id) => {
    const username = Object.keys(sessions).find(user => sessions[user] === id);
    return username;
}

const createSession = (request, username) => {
    let id = getSessionForUser(username);
    if (!id) {
        id = generateID();
        sessions[username] = id;
    }
    // set the return cookie value
    request.session.sessionid = id;
}

module.exports = {
    createSession,
    getUserForSession,
    getSessionForUser,
    getUser,
    validatePassword,
    logout
};