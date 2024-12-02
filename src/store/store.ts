import React from "react";
// Import External Libraries
import {create} from "zustand"
import {produce} from "immer"
import {persist, createJSONStorage} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Import Local Data
import CoffeeData from "../data/CoffeeData";
import BeansData from "../data/BeansData";

export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeanList: BeansData,
            CartPrice:  0,
            FavoritesList: [],
            CartList: [],
            OrderHistoryList: []
        }), 
        {
            name: "coffee-app",
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)


