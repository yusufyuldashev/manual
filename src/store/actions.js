 export default {
     async forgotPassword(context, payload) {
         const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDkiMRrQzEH4Qg8vKhJJiV4TRx1_OmZvGw', {
             method: 'POST',
             body: JSON.stringify({
                 email: payload.email,
                 returnSecureToken: true
             })
         })
         const responseData = await response.json()
         if (!response.ok) {
             console.log(responseData)
             const error = new Error(responseData.message || 'Failed to authendicate.check again')
             throw error
         }

     },
     async login(context, payload) {
         const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkiMRrQzEH4Qg8vKhJJiV4TRx1_OmZvGw', {
             method: 'POST',
             body: JSON.stringify({
                 email: payload.email,
                 password: payload.password,
                 returnSecureToken: true
             })
         })
         const responseData = await response.json()
         if (!response.ok) {
             console.log(responseData)
             const error = new Error(responseData.message || 'Failed to authendicate.check again')
             throw error
         }
         localStorage.setItem('token', responseData.idToken),
             localStorage.setItem('userId', responseData.localId),
             console.log(responseData)
         context.commit('setUser', {
             token: responseData.idToken,
             userId: responseData.localId,
             tokenExpiration: responseData.expiresIn
         })

     },
     tryLogin(context) {
         const token = localStorage.getItem('token');
         const userId = localStorage.getItem('userId');
         if (token && userId) {
             context.commit('setUser', {
                 token: token,
                 userId: userId,
                 tokenExpiration: null
             })
         }
     },
     async signup(context, payload) {
         const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkiMRrQzEH4Qg8vKhJJiV4TRx1_OmZvGw', {
             method: 'POST',
             body: JSON.stringify({
                 email: payload.email,
                 password: payload.password,
                 returnSecureToken: true
             })
         })
         const responseData = await response.json()
         if (!response.ok) {
             console.log(responseData)
             const error = new Error(responseData.message || 'Failed to  authendicate.')
             throw error
         }
         console.log(responseData)


         localStorage.setItem('token', responseData.idToken)
         localStorage.setItem('userId', responseData.localId)
         context.commit('setUser', {
             token: responseData.idToken,
             userId: responseData.localId,
             tokenExpiration: responseData.expiresIn
         })
     },
     logout(context) {
         localStorage.removeItem('token')
         localStorage.removeItem('userId')
         context.commit('setUser', {
             token: null,
             userId: null,
             tokenExpiration: null
         })
     }
 }