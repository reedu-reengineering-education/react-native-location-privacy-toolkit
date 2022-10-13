# Location Privacy Toolkit by SIMPORT for React Native

</br>

[![](https://github.com/schrooom/location-privacy-toolkit/blob/main/resources/simport_bmbf_logo.png)](https://simport.net/)

---

Location Privacy Toolkit, that can be included into React Native and Expo based mobile apps. This toolkit is aimed to be used as a replacement for usual location APIs. The goal of this toolkit is to allow users to actively control and monitor, which data is used by an app. Furthermore users can set preferences to the usage of location data using fine-grained control mechanisms. This is part of the [SIMPORT][simport] project.

> **Status**: WIP 🚧

## Contents

- ### [Library Usage](#library-usage)
- ### [Library Development](#library-development)

  - [Architecture](#architecture)

## Library Usage

## Library Development

- Clone Repo
- `yarn`
- `cd packages/location-privacy-toolkit`
- `yarn` to build the plugin

In a new terminal window

- `cd apps/openSenseMap-App`
- `yarn ios` or `yarn android`

Developing

- After making changes of the plugin, generate a new build by running
- `yarn`
- Use your changes in the App

### Architecture

<p align="center">
  <img src="https://github.com/reedu-reengineering-education/react-native-location-privacy-toolkit/blob/main/resources/architecture.png" width="85%">
</p>

The architecture used in this `Location Privacy Toolkit` is inspired by the following work of Mehrnaz Ataei: [_Location Data Privacy : Principles to Practice_](https://doi.org/10.6035/14123.2018.783210).

<p align="center">
  <img src="https://github.com/reedu-reengineering-education/react-native-location-privacy-toolkit/blob/main/resources/architecture-draft.png" width="60%">
</p>

### Example

In course of the project a sample app will be created: [The openSenseMap App][opensensemap-app]

## License

```
SIMPORT Location Privacy Toolkit
Copyright (c) 2022 Sitcom Lab
```

[Further information](LICENSE)

[simport]: https://simport.net/
[opensensemap-app]: https://github.com/sensebox/openSenseMap-App
