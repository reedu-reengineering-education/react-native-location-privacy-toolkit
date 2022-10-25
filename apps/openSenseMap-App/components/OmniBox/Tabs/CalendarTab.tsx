import React from "react";
import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarTab = () => {
  return (
    <View>
      <Text className="font-bold">Kalender</Text>
      <Calendar
        markingType={"period"}
        markedDates={{
          "2022-10-22": { startingDay: true, color: "grey" },
          "2022-10-23": {
            selected: true,
            color: "grey",
          },
          "2022-10-24": {
            color: "grey",
            endingDay: true,
          },
        }}
        theme={{
          textDayFontSize: 14,
          textMonthFontSize: 14,
          textDayHeaderFontSize: 14,
          weekVerticalMargin: 4,
        }}
      />
    </View>
  );
};

export default CalendarTab;
