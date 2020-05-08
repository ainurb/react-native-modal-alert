# react-native-modal-alert
Functional component for blocking UI and displaying status 

[![Platform](https://img.shields.io/badge/platform-react--native-lightgrey.svg)](http://facebook.github.io/react-native/)
[![npm version](http://img.shields.io/npm/v/rn-modal-alert.svg)](https://www.npmjs.com/package/rn-modal-alert)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.github.com/testshallpass/rn-modal-alert/master/LICENSE)

## Demo
<img src="https://github.com/ainurb/react-native-modal-alert/blob/master/example.gif" width="30%" />

## Installation

```
$ npm install rn-modal-alert --save
```

## Usage

(1) Import component.   
(2) Create ref for component with `useRef` hook.   
(3) Place component anywhere in your JSX.  
(4) Call `getAlert(status, message)`. 

```JSX
import React, {useRef} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import ModalAlert from 'rn-modal-alert'; // (1)

const App = () => {
  const modalAlertRef = useRef(); // (2)

  const onSuccess = () => {
    // (4)
    modalAlertRef.current.getAlert(
      'success',
      'Your changes have been successfully saved!',
    );
  };

  const onError = () => { 
    // (4)
    modalAlertRef.current.getAlert(
      'error',
      'Something went wrong :('
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Button title="Show success message" onPress={onSuccess} />
        <Button title="Show error message" onPress={onError} />
      </View>
      <ModalAlert ref={modalAlertRef} /> // (3)
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;
```
