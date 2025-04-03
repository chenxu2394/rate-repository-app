import useRepository from "../hooks/useRepository";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import { StyleSheet, View, FlatList } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { format } from "date-fns";

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
  },
  container: {
    alignItems: "flex-start",
    gap: 10,
    flex: 1,
  },
  separator: {
    height: 10,
  },
  headerStyle: {
    marginBottom: 10,
  },
  rating: {
    fontWeight: "bold",
    borderWidth: 2,
    fontSize: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.primary,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.rating}>
        <Text color={"primary"}>{review.rating}</Text>
      </View>
      <View style={styles.container}>
        <Text fontWeight={"bold"}>{review.user.username}</Text>
        <Text color="textSecondary">
          {format(review.createdAt, "dd.MM.yyyy")}
        </Text>
        <View>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const SingleRepoPage = () => {
  const { id } = useParams();
  const { item } = useRepository({ id }, true);

  if (!item) {
    return null;
  }

  const reviews = item.reviews?.edges?.map((edge) => edge.node) ?? [];

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={() => <RepositoryItem item={item} ghBtn={true} />}
      ListHeaderComponentStyle={styles.headerStyle}
      keyExtractor={({ id }) => id}
    />
  );
};

export default SingleRepoPage;
