import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { numify } from "numify";
import Button from "./Button";
import * as Linking from "expo-linking";

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    gap: 10,
  },
  containerRow: {
    flexDirection: "row",
  },
  statsContainer: {
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  tagStyle: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    color: theme.colors.white,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

const RepositoryItem = ({ item, ghBtn }) => {
  const openLink = () => {
    Linking.openURL(item.url);
  };

  return (
    <View
      testID="repositoryItem"
      style={{ ...styles.container, paddingVertical: 15 }}
    >
      <View
        style={{
          ...styles.containerRow,
        }}
      >
        <Image
          style={{
            ...styles.tinyLogo,
          }}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View
          style={{
            ...styles.container,
            alignItems: "flex-start",
          }}
        >
          <Text fontWeight={"bold"}>{item.fullName}</Text>
          <Text color={"textSecondary"}>{item.description}</Text>
          <Text style={[styles.tagStyle]}>{item.language}</Text>
        </View>
      </View>
      <View style={[styles.containerRow, styles.statsContainer]}>
        <View style={styles.statItem}>
          <Text fontWeight={"bold"}>{numify(item.stargazersCount)}</Text>
          <Text color={"textSecondary"}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight={"bold"}>{numify(item.forksCount)}</Text>
          <Text color={"textSecondary"}>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight={"bold"}>{numify(item.reviewCount)}</Text>
          <Text color={"textSecondary"}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight={"bold"}>{numify(item.ratingAverage)}</Text>
          <Text color={"textSecondary"}>Rating</Text>
        </View>
      </View>
      {ghBtn && (
        <Button onPress={openLink}>
          <Text>Open in GitHub</Text>
        </Button>
      )}
    </View>
  );
};

export default RepositoryItem;
