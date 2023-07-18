import React from "react";
import { createBottomTabNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "navigation/BottomTabNavigator";
import ReminderPage from "../screens/ReminderPage"
import CreateReminder from "../screens/CreateReminder"
import HomeScreen from "../screens/HomeScreen"

//export default class BottomTabNavigator extends Component{
  <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "TaskBoard") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "AddTask") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }
          }
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
      >
        <Tab.Screen
          name="Add Task"
          //component={this.renderFeed}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name="Task Board"
          //component={this.renderStory}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
//}