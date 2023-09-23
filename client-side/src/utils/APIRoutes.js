const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBlOWE0MWNlYzBiYzRlNTYxMjM4MGIiLCJ1c2VybmFtZSI6InNwZWVkeSIsImlhdCI6MTY5NTQ4NTUxOX0.bL5_wYR_a2G_P3qlLp8XSUcXdDw0wyHMOb6wVhOa3tA'

export const host = "http://localhost:5000";
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const header = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
}
