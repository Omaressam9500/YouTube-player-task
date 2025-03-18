import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import YouTubePlayer from '../components/YouTubePlayer';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Alert } from 'react-native';
import { NavigationService } from '../navigation/NavigationService';
import { ROUTES } from '../navigation/Routes';
import { useAppDispatch } from '../hooks/redux';
import { setVideoData } from '../redux/slices/videoSlice';


const HomeScreen: React.FC = () => {
    const [videoUrl, setVideoUrl] = useState<string>('');
    const dispatch = useAppDispatch();
    const extractVideoId = (url: string): string | null => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const handleSave = () => {
        const videoId = extractVideoId(videoUrl);
        console.log('videoId', videoId);

        if (videoId) {
            dispatch(setVideoData({ videoId, videoUrl }));
            NavigationService.navigate(ROUTES.VIDEO, { videoId, videoUrl });
        } else {
            Alert.alert('Invalid YouTube URL');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <YouTubePlayer
                isEditing={true}
                videoUrl={videoUrl}
                videoId=""
                lastPosition={0}
                onUrlChange={setVideoUrl}
                onSave={handleSave}
                onEdit={() => { }}
                onStateChange={() => { }}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;