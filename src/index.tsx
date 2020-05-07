import * as React from "react";
import { useImperativeHandle, forwardRef, useState } from "react";
import {
  View,
  Modal,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const successIcon = require("../assets/images/icons/success.png");
const errorIcon = require("../assets/images/icons/error.png");

const StatusAlert = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");

  useImperativeHandle(ref, () => ({
    getAlert(status: string, title: string) {
      console.log(props);
      setVisible(true);
      setStatus(status);
      setTitle(title);
    },
  }));

  return (
    <Modal transparent animationType={"none"} visible={visible}>
      <View style={styles.overlay}>
        <Image
          source={status === "success" ? successIcon : errorIcon}
          style={styles.icon}
        />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>{"OK"}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {},
  icon: {
    width: 54,
    height: 54,
  },
  title: {
    paddingTop: 18,
    paddingHorizontal: 80,
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 24,
    lineHeight: 34,
    textAlign: "center",
    letterSpacing: 0.7,
    color: "white",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 34,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    minWidth: 150,
  },
  buttonTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "center",
    color: "white",
  },
  buttonArrow: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    tintColor: "white",
  },
});
export default StatusAlert;
