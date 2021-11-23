    import axios from "axios";

    export default {
        namespaced: true,

        state: {
        token: null,
        user: null
        },

        getters:{
            authenticate(state){
                return state.token && state.user
            },
            user(state){
                return state.user
            }
        },
        mutations:{
            SET_TOKEN(state,token){
                state.token = token
            },
            SET_USER(state,user){
                state.user = user
            }
        },
        actions:{
            async signIn({ dispatch }, credentials) {
                console.log('signIn')
                let response = await axios.post("/login", credentials);
          
                dispatch("attempt", response.data.token);
              },
              async attempt({commit,state},token){
                  if(token){
                      console.log(token)
                      commit("SET_TOKEN",token)
                  }
                  if(!state.token){
                      return;
                  }
                  try {
                    let response = await axios.get("/user");
                    console.log(responde);
                    commit("SET_USER", response.data);
                  } catch (e) {
                    commit("SET_TOKEN", null);
                    commit("SET_USER", null);
                  }
              }
        }
    }