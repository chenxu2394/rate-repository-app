import { render, screen, within } from "@testing-library/react-native";

import { RepositoryListContainer } from "../components/RepositoryList";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} />);

      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepositoryItem, secondeRepositoryItem] = repositoryItems;

      const firstRepository = within(firstRepositoryItem);
      expect(firstRepository.getByText("jaredpalmer/formik")).toBeDefined();
      expect(
        firstRepository.getByText("Build forms in React, without the tears")
      ).toBeDefined();
      expect(firstRepository.getByText("TypeScript")).toBeDefined();
      expect(firstRepository.getByText("1.62k")).toBeDefined();
      expect(firstRepository.getByText("21.86k")).toBeDefined();
      expect(firstRepository.getByText("88")).toBeDefined();
      expect(firstRepository.getByText("3")).toBeDefined();

      const secondRepository = within(secondeRepositoryItem);
      expect(
        secondRepository.getByText("async-library/react-async")
      ).toBeDefined();
      expect(
        secondRepository.getByText("Flexible promise-based React data loader")
      ).toBeDefined();
      expect(secondRepository.getByText("JavaScript")).toBeDefined();
      expect(secondRepository.getByText("69")).toBeDefined();
      expect(secondRepository.getByText("1.76k")).toBeDefined();
      expect(secondRepository.getByText("72")).toBeDefined();
      expect(secondRepository.getByText("3")).toBeDefined;
    });
  });
});
