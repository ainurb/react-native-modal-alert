import * as React from "react";
import { useImperativeHandle, forwardRef, useState } from "react";
import { View, Modal, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
var successIcon = require("../assets/success.png");
var errorIcon = require("../assets/error.png");
var StatusAlert = forwardRef(function (props, ref) {
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    var _b = useState(""), status = _b[0], setStatus = _b[1];
    var _c = useState(""), title = _c[0], setTitle = _c[1];
    useImperativeHandle(ref, function () { return ({
        getAlert: function (status, title) {
            console.log(props);
            setVisible(true);
            setStatus(status);
            setTitle(title);
        },
    }); });
    return (React.createElement(Modal, { transparent: true, animationType: "none", visible: visible },
        React.createElement(View, { style: styles.overlay },
            React.createElement(Image, { source: status === "success" ? successIcon : errorIcon, style: styles.icon }),
            React.createElement(Text, { style: styles.title }, title),
            React.createElement(TouchableOpacity, { onPress: function () { return setVisible(false); }, style: styles.button },
                React.createElement(Text, { style: styles.buttonTitle }, "OK")))));
});
var styles = StyleSheet.create({
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
//# sourceMappingURL=index.js.map