import app from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

let firebaseConfig = {
    apiKey: "AIzaSyCmaGTM5rM4VHPG_XnRldlfUiG1g5Wi_io",
    authDomain: "easyaddlist.firebaseapp.com",
    databaseURL: "https://easyaddlist.firebaseio.com",
    projectId: "easyaddlist",
    storageBucket: "easyaddlist.appspot.com",
    messagingSenderId: "904554151404",
    appId: "1:904554151404:web:d5e90977461e520b9314c9"
  };

class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
  
      //Referenciando a database para acessar em outros locais
      this.app = app.database();
  
      this.storage = app.storage();
    }
  
    //Metodo para fazer o login no Firebase, usando dois parametros que vai vir do usuario
    login(email, password) {
      return app.auth().signInWithEmailAndPassword(email, password);
    }
  
    //Metodo padrao para logout da autenticacao do Firebase
    logout() {
      return app.auth().signOut();
    }
  
    //Metodo para registrar novo usuario com esses parametros, agindo na autenticacao do Firebase
    async register(nome, email, password) {
      await app.auth().createUserWithEmailAndPassword(email, password);
  
      //autentica pegando o uid do usuario criado
      const uid = app.auth().currentUser.uid;
  
      //retorna um novo parametro 'nome' no database do Firebase atraves da autenticacao
      return app.database().ref("users").child(uid).set({
        nome: nome,
      });
    }
  
    //Verifica se foi inicializado, usando a Promisse com o parametro 'resolve'
    isInitialized() {
      return new Promise((resolve) => {
        app.auth().onAuthStateChanged(resolve);
      });
    }
  
    //Retorna usuario atual e email atual
    getCurrent() {
      return app.auth().currentUser && app.auth().currentUser.email;
    }
  
    //Retorna usuario atual e uid atual
    getCurrentUid() {
      return app.auth().currentUser && app.auth().currentUser.uid;
    }
  
    async getUserName(callback) {
      if (!app.auth().currentUser) { //Se nao existe usuario logado retorne null
        return null;
      }
  
      //senao pegue da tabela 'users' o nome do usuario atual
      const uid = app.auth().currentUser.uid;
      await app.database().ref("users").child(uid).once("value").then(callback);
    }
  }
  
  export default new Firebase();
  