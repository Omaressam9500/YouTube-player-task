import React, { useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, View, StyleSheet } from 'react-native';
import YouTubePlayer from '../components/YouTubePlayer';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { resetVideo, setPlaying, updatePosition } from '../redux/slices/videoSlice';
import { NavigationService } from '../navigation/NavigationService';
import { ROUTES } from '../navigation/Routes';


const VideoScreen: React.FC = () => {
    const dispatch = useAppDispatch();
    const { videoId, videoUrl, position, timestamp, isPlaying } = useAppSelector(state => state.video);

    useFocusEffect(
        useCallback(() => {
            dispatch(setPlaying(true));
            return () => {
                dispatch(setPlaying(false));
            };
        }, [dispatch])
    );

    useEffect(() => {
        if (!videoId) {
            NavigationService.replace('Home');
        }
    }, [videoId]);
    const handleStateChange = useCallback((state: string) => {
        if (state === 'playing' && timestamp) {
            const currentTime = Date.now();
            const timeDiff = (currentTime - timestamp) / 1000;
            if (timeDiff > 0) {
                const newPosition = position + timeDiff;
                dispatch(updatePosition(newPosition));
            }
        }
    }, [position, timestamp, dispatch]);

    const handleEdit = () => {
        dispatch(resetVideo());
        NavigationService.replace(ROUTES.HOME);
    };

    if (!videoId) {
        NavigationService.replace(ROUTES.HOME);;
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <YouTubePlayer
                isEditing={false}
                videoUrl={videoUrl}
                videoId={videoId}
                lastPosition={position}
                isPlaying={isPlaying}
                onUrlChange={() => { }}
                onSave={() => { }}
                onEdit={handleEdit}
                onStateChange={handleStateChange}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to GIF"
                    onPress={() => NavigationService.navigate('Gif')}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 16,
    },
});

export default VideoScreen;