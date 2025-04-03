import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import { GET_ME } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import Text from "./Text";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "grey",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  scrollView: {
    gap: 10,
  },
});

const AppBarTab = ({ children, to, ...props }) => {
  const content = (
    <Text fontWeight={"bold"} fontSize={"subheading"} color={"textPrimary"}>
      {children}
    </Text>
  );

  return to ? (
    <Link to={to}>{content}</Link>
  ) : (
    <Pressable {...props}>{content}</Pressable>
  );
};

const AppBar = () => {
  const { data } = useQuery(GET_ME, {
    fetchPolicy: "network-only",
  });
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/signin", { replace: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        <AppBarTab to="/">Repositories</AppBarTab>
        {data?.me ? (
          <AppBarTab onPress={onSignOut}>Sign Out</AppBarTab>
        ) : (
          <AppBarTab to="/signin">Sign In</AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
