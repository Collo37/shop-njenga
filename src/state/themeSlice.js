import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../Constants/colors";

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    theme: "light",
    backgroundColor: colors.neutralColor[5],
    secondaryColor: colors.secondaryColor[0],
    accentColor: colors.accentColors[0],
  },
  reducers: {
    setDarkTheme(state) {
      state = {
        theme: "dark",
        backgroundColor: colors.neutralColor[1],
        secondaryColor: colors.secondaryColor[1],
        accentColor: colors.accentColors[0],
      };
    },
    setLightTheme(state) {
      state = {
        theme: "light",
        backgroundColor: colors.neutralColor[5],
        secondaryColor: colors.secondaryColor[0],
        accentColor: colors.accentColors[0],
      };
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;
