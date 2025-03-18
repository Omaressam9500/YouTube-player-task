import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

interface YouTubePlayerProps {
  isEditing: boolean;
  videoUrl: string;
  videoId: string;
  lastPosition: number;
  isPlaying: boolean;
  onUrlChange: (url: string) => void;
  onSave: () => void;
  onEdit: () => void;
  onStateChange: (state: string) => void;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  isEditing,
  videoUrl,
  videoId,
  lastPosition,
  isPlaying,
  onUrlChange,
  onSave,
  onEdit,
  onStateChange,
}) => {
  return (
    <View style={styles.container}>
      {isEditing ? (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter YouTube Video URL"
            value={videoUrl}
            onChangeText={onUrlChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.buttonContainer}>
            <Button title="Save" onPress={onSave} />
          </View>
        </View>
      ) : (
        <View style={styles.playerContainer}>
          {videoId && (
            <>
              <YoutubeIframe
                height={220}
                width="100%"
                videoId={videoId}
                play={isPlaying}
                onChangeState={onStateChange}
                initialPlayerParams={{
                  preventFullScreen: false,
                  startTime: lastPosition,
                  controls: true,
                }}
              />
              <View style={styles.buttonContainer}>
                <Button title="Edit" onPress={onEdit} />
              </View>
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  form: {
    flex: 1,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  playerContainer: {
    flex: 1,
    gap: 16,
  },
  buttonContainer: {
    marginTop: 8,
  },
});

export default YouTubePlayer;