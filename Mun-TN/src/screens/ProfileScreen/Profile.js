import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import React, { useContext, useState, useEffect, createContext } from "react";
import { firebase } from "../../../firebase/config";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "../../../firebase/Authprovider";
import styles from "./styles";
import {
  FontAwesome,
  AntDesign,
  Feather,
  Octicons,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";
import * as PhotoPicker from "expo-image-picker";
import { EvilIcons } from "react-native-vector-icons";
import LoginScreen from "../LoginScreen/LoginScreen";
import ImagePicker from "react-native-image-picker";
export default Profile = ({ navigation }) => {
  const COLORS = { primary: "#ecfeff", cyan: "#14b8a6" };
  const { user, logout } = createContext(AuthContext);
  const [showpopup, setshowpopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUser] = useState({});
  const [page, setPage] = useState("profile");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [image, setImage] = useState(null);
  const [document, setdocument] = useState(null);
  const [complains, setcomplains] = useState([]);
  const complainsref = firebase.firestore().collection("Complains");
  const [popupinput, setpopupinput] = useState("");
  const [hasnocontent, sethascontent] = useState(false);
  const convertDate = (seconds) => {
    /*  var numyears = Math.floor(seconds / 31536000);
  var nummonths = Math.floor((seconds % 31536000) / 2628000);
  var numdays = Math.floor(((seconds % 31536000) % 2628000) / 86400);
  var numhours = Math.floor((((seconds % 31536000) % 2628000) % 86400)/3600);
  var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
return(`${numyears}/${nummonths}/${numdays}:${numhours}:${numminutes}`) */
    var months = Math.floor(seconds / 2592000);
    var days = Math.floor((seconds % 604800) / 86400);
    var hours = Math.floor((seconds % 86400) / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
  };
  const handlecomplaintupdate = (id) => {
    complainsref
      .doc(id)
      .update({
        description: popupinput,
        image: image,
      })
      .then(() => {
        setImage(null);
        setpopupinput("");
      })
      .catch((e) => console.log(e));
  };
  const chooseImg = async () => {
    let result = await PhotoPicker.launchImageLibraryAsync({
      mediaTypes: PhotoPicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const takePhoto = () => {
    const options = {};
    ImagePicker.launchCamera(options, (response) => {
      console.log(response);
    });
  };
  const getComplaints = () => {
    return complainsref.onSnapshot((documentsnapshot) => {
      const list = [];
      documentsnapshot.forEach((doc) => {
        console.log(doc.data());
        list.push({
          id: doc.id,
          description: doc.data().description,
          image: doc.data().image,
          type: doc.data().type,
          iduser: doc.data().iduser,
          createdAt: doc.data().createdAt,
          username: doc.data().username,
          userimage: doc.data().userimage,
        });
      });

      setcomplains(list);
      fileredcomplaints = complains.filter(
        (element) => element.id == userData.id
      );
    });
  };
  const handledelete = (id) => {
    complainsref
      .doc(id)
      .delete()
      .then(() => {})
      .catch((e) => console.log(e));
    fileredcomplaints = fileredcomplaints.splice(
      fileredcomplaints.find((element) => element.id == id)
    );
    console.log(fileredcomplaints);
  };
  const getUser = () => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged(async (user) => {
      {
        if (user) {
          await usersRef
            .doc(user.uid)
            .get()
            .then((document) => {
              setLoading(false);
              setUser({
                id: document.id,
                email: document.data().email,
                fullName: document.data().fullName,
                image: document.data().image,
                phoneNumber: document.data().phoneNumber,
                Municipality: document.data().Municipality,
                city:document.data().city
              });
            })

            .catch((error) => {
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      }
    });
  };

  {
    /* const getUser = async() => {
      await firebase.firestore()
      .collection('users')
      .doc(user.id)
      .get()
      .then((documentSnapshot) => {
        if( documentSnapshot.exists ) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })
    }
  */
  }
  const handleupdate = (id) => {
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .update({
        email: email,
        fullName: name,
        image: image,
      })
      .then(() => {
        alert("mis à jour avec succès");
        setPage("profile");
        setImage(null);
        setemail("");
        setname("");
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getComplaints();
  }, []);
  var fileredcomplaints = complains.filter(
    (item) => item.iduser == userData.id
  );
  return (
    <ScrollView style={{backgroundColor: "#F5F5F5"}}>
      {page === "profile" ? (
        <View>
          <View style={{ alignContent: "center", alignItems: "center" }}>
            <View style={styles.profilecontainer}>
              <View style={styles.minicontainer}>
                <View style={styles.namecontainer}>
                  <TouchableOpacity
                    style={{ marginLeft: "90%" }}
                    onPress={() => setPage("updateprofile")}
                  >
                    <FontAwesome name="pencil" size={20} color="#00B2FF" />
                  </TouchableOpacity>
                  {userData.image ? (
                    <Image
                      source={{ uri: userData.image }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        overflow: "hidden",
                        marginTop: 20,
                      }}
                    />
                  ) : (
                    <Image
                      source={{ uri: userData.image }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 70,
                        overflow: "hidden",
                        marginLeft: 150,
                      }}
                    />
                  )}
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: 15,
                      marginTop: 20,
                      marginBottom: 10,
                    }}
                  >
                    {userData.fullName}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "grey",
                      fontSize: 15,
                      marginBottom: 10,
                    }}
                  >
                    {userData.email}
                  </Text>
                </View>
              </View>
              <View style={styles.infocontainer}>
                {/* <View style={{ marginLeft: 20, flexDirection: "row" }}>
                  <AntDesign name="phone" size={30} color={"#00B2FF"} />
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 15,
                      marginLeft: 20,
                      marginTop: 10,
                    }}
                  >
                    Numéro de téléphone : {userData.phoneNumber}
                  </Text>
                </View> */}
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: "row",
                    marginTop:-5,
                  }}
                >
                  <AntDesign name="home" size={30} color={"#00B2FF"} />
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 15,
                      marginLeft: 20,
                      marginTop: 10,
                    }}
                  >
                    Address: {userData.city},{userData.Municipality}
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: "row",
                    marginTop: 20,
                  }}
                >
                  <FontAwesome
                    name="commenting-o"
                    size={30}
                    color={"#00B2FF"}
                    onPress={() => {
                      setPage("complains");
                    }}
                  />
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 15,
                      marginLeft: 20,
                      marginTop: 10,
                    }}
                    onPress={() => {
                      setPage("complains");
                    }}
                  >
                    Réclamations({fileredcomplaints.length} Réclamations)
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: "row",
                    marginTop: 20,
                  }}
                >
                  <AntDesign
                    name="logout"
                    size={30}
                    color={"#00B2FF"}
                    onPress={async () => {
                      try {
                        await firebase.auth().signOut();

                        console.log("logged out");
                        setPage("Login");
                      } catch (e) {
                        console.log(e);
                      }
                    }}
                  />
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 15,
                      marginLeft: 20,
                      marginTop: 10,
                    }}
                  >
                    déconnexion
                  </Text>
                </View>
              </View>
            </View>
          </View> 
          <View>
            <TouchableOpacity

          onPress={() => {
            setPage("profile");
          }}
        >
        <Image style={styles.images} source={require("../../../assets/images/back.png")}/>
        </TouchableOpacity>
            </View>
        </View>
      ) : page == "updateprofile" ? (
        <View>
        <View >
            <TouchableOpacity
        
          onPress={() => {
            setPage("profile");
          }}
        >
        <Image style={{width:30,height:30}} source={require("../../../assets/images/back.png")}/>
        </TouchableOpacity>
            </View>
            <View >
              <View style={{ flexDirection: "row", borderBottomWidth :1 }}>
                <Text style={{fontSize:17, fontWeight: "bold", marginLeft: 5, marginTop: 5}}>Photo de profil</Text>
                <TouchableOpacity onPress={chooseImg}>
                <Feather  name="camera" 
              style={{ marginTop: -5, marginLeft: 190}}
              color="#00B2FF" 
              size={30} />
              </TouchableOpacity>
              </View>
              <View style={{borderBottomWidth :0}}>
           {image?<Image
                      source={{ uri: image }}
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: 70,
                        overflow: "hidden",
                        marginLeft: 115,
                        marginTop: 20,
                        
                      }}
                      />:<Image
                      source={{ uri: userData.image }}
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: 70,
                        overflow: "hidden",
                        marginLeft: 115,
                        marginTop: 20,
                        
                      }}
                      />}
                      </View>
                </View>
                <Text style={{fontSize:17, fontWeight: "bold", marginLeft: 5, marginTop: 25}}>Mettre à jour votre profil </Text>
                <View style={{borderBottomWidth :1, marginTop: 8}}></View>
          <View style={{marginTop: 30}}>
            <View ><Feather name="mail"  size={30} color="#00B2FF" style={{marginLeft:15,marginBottom:-48}} />
            <TextInput 
              icon="mail"
              style={styles.emailinput}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setemail(text)}
              />
              </View>
              <View><Feather name="user"  size={30} color="#00B2FF" style={{marginLeft:15,marginBottom:-48}} />
            <TextInput
             
              placeholder="Nom et Prénom"
              style={styles.nameinput}
              value={name}
              onChangeText={(text) => setname(text)}
              />
             </View>
            <View style={styles.button}>
              {/* <TouchableOpacity onPress={chooseImg}>
                <AntDesign  name="camera"
              style={{ marginTop: 28, marginLeft: 45}}
              color="#00B2FF" 
              size={30} />
              </TouchableOpacity> */}
              <TouchableOpacity
                style={styles.but}
                onPress={() => handleupdate(userData.id)}
                >
                <Text style={styles.buttontext}>Envoyer</Text>
              </TouchableOpacity>
            </View>  
            </View>
          </View>
      ) : page == "complains" ? (
        <View>
          <TouchableOpacity
            
            onPress={() => {
              setPage("profile");
            }}
          >
            <Image style={styles.images} source={require('../../../assets/images/back.png')} />
          </TouchableOpacity>
          {/* <Image
                      source={{ uri: userData.image }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 70,
                        overflow: "hidden",
                        marginLeft: 130,
                      }}
                    />
                    <Text
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: 15,
                      marginTop: 20,
                      marginBottom: 10,
                      marginLeft : 120
                    }}
                  >
                    {userData.fullName}
                  </Text> */}
          <View>

            {fileredcomplaints.length == 0 ? (
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 30,
                  // backgroundColor: "white",
                  borderRadius: 5,
                  marginRight: 20
                  
                }}
              >
                <Text style={{marginRight: 0}}>Il n'y a aucune réclamation, vous pouvez ajouter votre réclamation ici</Text>
                <Text style={{marginTop: 15}}> </Text>
                <View style={styles.button}>
                <TouchableOpacity
                  style={styles.but}
                  onPress={() => navigation.navigate("Complain")}
                  >
                  <Text style={styles.buttontext}>Ajouter</Text>
                </TouchableOpacity>
                  </View>
                {/* <TouchableOpacity
                  style={styles.nothanks}
                  onPress={() => setPage("profile")}
                >
                  <Text>No thanks</Text>
                </TouchableOpacity> */}
              </View>
            ) : null}
            <FlatList
            
              data={fileredcomplaints}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.container}>
                    <View
                      style={{ flexDirection: "row", alignSelf: "flex-start" }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={{ uri: item.userimage }}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius:50,
                            marginTop: 5,
                            marginLeft: 5
                          }}
                        />
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "#006AFF",
                            marginTop: 9,
                            marginLeft: 5,
                          }}
                        >
                          {item.username} 
                        </Text>
                      </View>
                      <View
                        style={{
                          marginBottom: 20,
                          flexDirection: "row",
                          alignSelf: "flex-end",
                          marginLeft: "55%",
                        }}
                      >
                        <TouchableOpacity
                          style={{ marginTop: 8 }}
                          onPress={() =>  navigation.navigate("Complain")}
                        >
                          <FontAwesome name="edit" size={30} color="#00B2FF" />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handledelete(item.id)}
                          style={{ marginTop: 8, marginLeft: 20 }}
                        >
                          <AntDesign name="delete" size={30} color="#00B2FF" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        // alignSelf: "flex-end",
                        marginLeft: 5,
                      }}
                    >
                      {item.type}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        marginTop: 10,
                        // alignSelf: "flex-start",
                        fontWeight: "400",
                        marginLeft: 5,

                      }}
                    >
                      {item.description}
                    </Text>
                    {item.image.uri ? (
                      <Image
                        source={{ uri: item.image.uri }}
                        style={{
                          height: 280,
                          borderRadius: 5,
                          marginTop: 10  
                          // marginVertical: 10,
                        }}
                      />
                    ) : (
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: "70%", borderRadius: 40, height: 300 }}
                      />
                    )}

                    {showpopup == true ? (
                      <View style={{ marginBottom: -30 }}>
                        <TouchableOpacity onPress={() => setshowpopup(false)}>
                          <FontAwesome name="close" size={20} />
                        </TouchableOpacity>
                        <TextInput
                          style={styles.popupinput}
                          numberOfLines={4}
                          multiline={true}
                          placeholder="enter your description here"
                          value={popupinput}
                          onChangeText={(text) => setpopupinput(text)}
                        />
                        <TouchableOpacity
                          style={styles.imageinput}
                          onPress={chooseImg}
                        >
                          <AntDesign name="camera" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.submitpopup}
                          onPress={() => handlecomplaintupdate(item.id)}
                        >
                          <Text>submit</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      ) : page == "Login" ? (
        <LoginScreen />
      ) : page=="Updatecmplaint"?(<View></View>):null}
    </ScrollView>
  );
};
