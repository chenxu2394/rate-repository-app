import { TextInput, View, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import Text from "./Text";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    flexGrow: 0, // default value
    padding: 20,
    gap: 10,
    backgroundColor: theme.colors.white,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.textSecondary,
  },
  textInputError: {
    borderColor: theme.colors.red,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  error: {
    color: theme.colors.red,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        style={[
          styles.textInput,
          formik.touched.username &&
            formik.errors.username &&
            styles.textInputError,
        ]}
      />
      {formik.touched.username && formik.errors.username ? (
        <Text style={styles.error}>{formik.errors.username}</Text>
      ) : (
        <Text></Text>
      )}
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
        style={[
          styles.textInput,
          formik.touched.password &&
            formik.errors.password &&
            styles.textInputError,
        ]}
      />
      {formik.touched.password && formik.errors.password ? (
        <Text style={styles.error}>{formik.errors.password}</Text>
      ) : (
        <Text></Text>
      )}
      <Button onPress={formik.handleSubmit} style={styles.submitButton}>
        <Text>Sign in</Text>
      </Button>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
