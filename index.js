import { Navigation } from "react-native-navigation";
import App from "./App";

Navigation.registerComponent('com.ReactNativeTestExamples.MainApp', () => App);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.ReactNativeTestExamples.MainApp'
             }
           }
         ]
       }
     }
  });
});