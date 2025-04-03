import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import SignIn from "./SignIn";
import RepositoryList from "./RepositoryList";
import SingleRepoPage from "./SingleRepoPage";
import AppBar from "./AppBar";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/repositories/:id" element={<SingleRepoPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </View>
  );
};

export default Main;
