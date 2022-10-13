import {
  requestForegroundPermissionsAsync,
  LocationObject,
  getCurrentPositionAsync,
  reverseGeocodeAsync,
  LocationGeocodedAddress,
} from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [geocodedLocation, setGeocodedLocation] =
    useState<LocationGeocodedAddress[]>();

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await getCurrentPositionAsync({});
      setLocation(location);
      const reverseGeocodingResult = await reverseGeocodeAsync(location.coords);
      setGeocodedLocation(reverseGeocodingResult);
    })();
  }, []);

  return { location, geocodedLocation };
};

export default useLocation;
