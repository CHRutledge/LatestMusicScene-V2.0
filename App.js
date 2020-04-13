import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, TouchableOpacity, View, SafeAreaView, Text, Alert, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <View style={styles.block}>
    <Image
      style={styles.logo}
      source={{
        uri: 'https://static.billboard.com/files/media/pink-ellen-show-2019-billboard-1548-1024x677.jpg?1'}}
    />
      <Text style={styles.title}>
        P!nk Tests Positive for Coronavirus
      </Text>
      <TouchableOpacity onPress = {() => navigation.navigate('Details - P!nk')}>
        <View style = {styles.button}
        >
          <Text style = {{color: 'white', fontSize: 20, fontWeight: "bold"}}>Learn More</Text>
        </View>
      </TouchableOpacity>
    </View>
    <Separator />
    <View style={styles.block}>
    <Image
      style={styles.logo}
      source={{
        uri: 'https://static.billboard.com/files/2020/04/bill-withers-1972-feature-billboard-1500-1585946742-compressed.jpg?1'}}
    />
      <Text style={styles.title}>
        Forever No. 1: Bill Withers' 'Lean on Me'
      </Text>
      <TouchableOpacity onPress = {() => navigation.navigate('Details - Bill Withers')}>
        <View style = {styles.button}
        >
          <Text style = {{color: 'white', fontSize: 20, fontWeight: "bold"}}>Learn More</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
  );
}

function DetailsOne() {
  return (
    <ScrollView style={styles.block}>
    <Image
      style={styles.logo}
      source={{
        uri: 'https://static.billboard.com/files/media/pink-ellen-show-2019-billboard-1548-1024x677.jpg?1'}}
    />
      <Text style={styles.title}>
      P!nk Tests Positive for Coronavirus
      </Text>
      <Text style={styles.desc}>
      Superstar singer P!nk revealed that she has tested positive for COVID-19, becoming the latest celebrity to face a battle with coronavirus amid the global pandemic.

      {'\n'}{'\n'}"Two weeks ago my three-year-old son, Jameson, and I were showing symptoms of COVID-19. Fortunately, our primary care physician had access to tests and I tested positive," she wrote in a post that went up on both Twitter and Instagram on Friday night (April 3). "My family was already sheltering at home and continued to do so for the last two weeks following the instruction of our doctor. Just a few days ago, we were re-tested and are now thankfully negative."
      
      {'\n'}{'\n'}She then shared her thoughts on coronavirus testing, something that has become a hot button issue during the crisis. In Los Angeles, where Pink, husband Carey Hart and their two children maintain a home on the Westside of the city near the beach, health officials have expressed frustration over the limited testing capacity. Today, L.A. County Public Health Director Barbara Ferrer said the goal next week is to get 10,000 residents tested per day but thus far, slightly more than 20,000 have been tested.

      {'\n'}{'\n'}Pink called testing an "absolute travesty," adding that it is a "failure of our government to not make testing more widely accessible. This illness is serious and real. People need to know that the illness affects the young and old, healthy and unhealthy, rich and poor, and we must make testing free and more widely accessible to protect our children, our families, our friends and our communities."

      {'\n'}{'\n'}To help the process, the 40-year-old announced that she is making a sizable donation of $1 million to support health care workers on the frontlines.

      {'\n'}{'\n'}"I am donating $500,000 to the Temple University Hospital Emergency Fund in Philadelphia in honor of my mother, Judy Moore, who worked there for 18 years in the Cardiomyopathy and Heart Transplant Center. Additionally, I am donating $500,000 to the City of Los Angeles Mayor’s Emergency COVID-19 Crisis Fund. THANK YOU to all of our healthcare professionals and everyone in the world who are working so hard to protect our loved ones. You are our heroes! These next two weeks are crucial: please stay home. Please. Stay. Home."
      </Text>
      <Text></Text>
    </ScrollView>
  );
}

function DetailsTwo() {
  return (
    <ScrollView style={styles.block}>
    <Image
      style={styles.logo}
      source={{
        uri: 'https://static.billboard.com/files/2020/04/bill-withers-1972-feature-billboard-1500-1585946742-compressed.jpg?1'}}
    />
      <Text style={styles.title}>
      Forever No. 1: Bill Withers' 'Lean on Me'
      </Text>
      <Text style={styles.desc}>
      On Bill Withers’ groundbreaking debut album Just as I Am, there’s a short whimsical track called “Do It Good.” Halfway through, Withers recalls—in melodic spoken word -- the advice that producer Booker T. Jones gave the factory man-turned-recording artist. “When I came in here to try and/ Do this, something/ I've never done before/ Mr. Jones looked at me, said to me/ Don't worry about it/ Just do what you do/ And do it good.”

      {'\n'}{'\n'}Withers did just that for the next 14 years. And in those years -- too short of a span for his legion of fans -- the singer-songwriter born in the coal-mining town of Slab Fork, West Virginia reeled off a string of unforgettable hits and deep album cuts that continue to endure 45 years later. Love, betrayal, human nature, society’s ills and more provided the creative fodder for gems such as “Ain’t No Sunshine,” “Grandma’s Hands,” “Harlem,” “Lovely Day,” “Use Me,” “Just the Two of Us” and “I Can’t Write Left-Handed.”

      {'\n'}{'\n'}He scored his first and only No. 1 hit on both the R&B and pop charts with the 1972 anthem “Lean on Me.” The inspirational anthem was the first single from Withers’ second studio album, Still Bill. And its chart-topping ascent delivered on the promise hinted at the year before on the ex-Navy man’s aforementioned debut album. That album showcased his refreshing, folksy vocals and simply yet lyrics by way of “Ain’s No Sunshine” (No. 3 on the Hot 100) and “Grandma’s Hands.”

“My favorite Bill Withers song is ‘Grandma’s Hands,’ says music industry pioneer Clarence Avant, who signed the newcomer to his Los Angeles-based label Sussex Records. “When Bill came to me, he said, ‘I guess you’ll be like everybody else, and turn me down.’ I said, ‘You’ll have to wait and see. I haven’t heard your music yet.’ But when I heard ‘Grandma’s Hands,’ I figured if anybody could write about their grandmother like that, he was worth a shot.”

After signing Withers, Avant called Stax chief Al Bell to arrange for Booker T. Jones to produce the neophyte recording artist’s first album. “After that,” says Avant, “Bill did everything himself: writing, singing and producing. He was one of the most talented artists I’ve ever met period. Just a brilliant writer.” (Fellow all-time great Stevie Wonder agrees about Withers' writing gifts, telling Billboard that he "was a great writer who painted pictures with lyrics, the same way that a great artist would do a painting or drawing.”)
      </Text>
      <Text></Text>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details - P!nk" component={DetailsOne} />
        <Stack.Screen name="Details - Bill Withers" component={DetailsTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    margin: 5
  },
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20
  },
  desc: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 16
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#00B3E3',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 55,
    height: 40,
    width: 225
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: {
    marginTop: 10,
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 10
  }
});
