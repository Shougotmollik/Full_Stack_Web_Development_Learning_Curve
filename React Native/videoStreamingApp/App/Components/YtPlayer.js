import React, { useCallback, useState } from "react";
import { View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

function YtPlayer() {
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      // Alert.alert("video has finished playing!");
    }
  }, []);
  return (
    <View>
      {" "}
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />{" "}
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />{" "}
    </View>
  );
}

export default YtPlayer;
