import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, Dimensions, Linking ,SafeAreaView} from 'react-native';
import * as Progress from 'react-native-progress';
import { Card, Title, Paragraph } from 'react-native-paper';

const Dashboard = () => {

    const { width } = Dimensions.get("window");
    const height = width * 0.6;
    state = {
        active: 0
    }

    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide })
        }
    }

    const DATA = [
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/programming_language_learning_skill-770x2871.jpg?hIZjyRC78GeLU8CYremoz8PY8siWjL.S",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/robot_automation_job_0-770x862.jpg?5i_OG1Yq5S8Nqb6VBnhFjpr7j1n56O7T",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/cloud_computing-770x1522.jpg?VWsz0ASq4E95Ocit.g8keqfAQiXJpEHZ",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/IT_development_data_0-770x720.jpg?bsi.jKrgu_tku2vK1L8tecpy.ztbV_pw"
    ]



    return (
        <>
            <ScrollView style={styles.mainContainer}>
                <Text style={styles.inputContainer}>Excellent Softwares</Text>


                <View style={styles.navbar}>
                    <TouchableOpacity style={styles.home}>
                        <Image source={require('../images/home-button.png')} style={{ width: 25, height: 25 }} />
                        <Text style={styles.item} onPress={() => Linking.openURL('http://www.excellentsoftwares.com/index.html')}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.about}>
                        <Image source={require('../images/information.png')} style={{ width: 25, height: 25 }} />
                        <Text style={styles.item} onPress={() => Linking.openURL('http://www.excellentsoftwares.com/aboutus.html')}>About</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.features}>
                        <Image source={require('../images/apps.png')} style={{ width: 25, height: 25 }} />
                        <Text style={styles.item} onPress={() => Linking.openURL('http://www.excellentsoftwares.com/services.html')}>Services</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gallery}>
                        <Image source={require('../images/gallery2.png')} style={{ width: 25, height: 25 }} />
                        <Text style={styles.item} onPress={() => Linking.openURL('http://www.excellentsoftwares.com/product.html')}>Products</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contact}>
                        <Image source={require('../images/contact3.png')} style={{ width: 25, height: 25 }} />
                        <Text style={styles.item} onPress={() => Linking.openURL('http://www.excellentsoftwares.com/contactus.html')}>Contact</Text>
                    </TouchableOpacity>
                </View>

                <SafeAreaView>
                    <FlatList
                    horizontal
                        data={DATA}
                        renderItem={({ item }) => {
                            return(
                                <Image source={{ uri: item}} style={{ height: 250, width: 400 }} />
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>



                <View style={styles.main}>
                    <View style={styles.side1}>
                        <Image source={require('../images/handmobile.jpg')} style={{ width: 220, height: 155 }} />
                    </View>
                    <View style={styles.side2}>
                        <Text style={styles.matter}>  App Development</Text>
                        <Text style={styles.bar}>  <Progress.Bar progress={0.2} width={220} color='red' /></Text>
                        <Text style={styles.matter}>  ios Development</Text>
                        <Text style={styles.bar}>  <Progress.Bar progress={0.3} width={220} color="yellow" /></Text>
                        <Text style={styles.matter}>  Web Development</Text>
                        <Text style={styles.bar}>  <Progress.Bar progress={0.5} width={220} color="green" /></Text>
                        <Text style={styles.matter}>  Mobile Development</Text>
                        <Text style={styles.bar}>  <Progress.Bar progress={0.8} width={220} color="blue" /></Text>
                    </View>
                </View>

                <View style={styles.cardcontainer}>
                    <Card>
                        <Card.Cover source={require("../images/ballon.jpg")} style={{ width: 80, height: 90 }} />
                    </Card>
                    <Card>
                        <Card.Cover source={require("../images/ballon.jpg")} style={{ width: 80, height: 90 }} />
                    </Card>
                    <Card>
                        <Card.Cover source={require("../images/ballon.jpg")} style={{ width: 80, height: 90 }} />
                    </Card>
                    <Card>
                        <Card.Cover source={require("../images/ballon.jpg")} style={{ width: 80, height: 90 }} />
                    </Card>
                </View>


                <View>
                    <View style={styles.footer}>
                        <Text style={styles.excellent}>info@excellentsoftwares.com</Text>
                        <Text style={styles.kamal}>Raj Kamal</Text>
                    </View>
                </View>

            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        fontSize: 34,
        color: "blue",
        textAlign: "center",
        fontWeight: 600,
        marginBottom: 30,
        backgroundColor: "lightblue",
        padding: 18
    },
    mainContainer: {
        backgroundColor: "white"
    },
    navbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        fontWeight: 400,
    },
    item: {
        fontSize: 17,
        color: "red",
        marginBottom: 30,
        marginTop: 15,
        fontWeight: 900,
        wordSpacing: 2
    },

    excellent: {
        textAlign: "center",
        fontSize: 22,
        color: "blue",
        fontWeight: 600
    },
    scroll: {
        width: 400, height: 200
    },

    image: {
        width: 400, height: 200,
    },
    pagination: {
        flexDirection: "row", position: "absolute", bottom: 0, alignSelf: "center"
    },
    pagingText: {
        color: "red", margin: 3, flexDirection: "row"
    },
    main: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    side1: {
        backgroundColor: "white",
        marginRight: 6
    },
    side2: {
        backgroundColor: "white"
    },
    p1: {
        textAlign: "center"
    },
    bar: {

    },
    matter: {
        color: "black",
        fontWeight: 800
    },
    cardcontainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        backgroundColor: "pink",
        padding: 20
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center"
    },
    label: {
        margin: 8,
    },
    footer: {
        backgroundColor: "lightblue",
        padding: 15,
        marginTop: 18
    },
    cards: {
        backgroundColor: "pink"
    },
    kamal:{
        fontSize:20,
        color:"red",
        textAlign:"center",
        fontWeight:800,
        marginBottom:1
    }
})
export default Dashboard;