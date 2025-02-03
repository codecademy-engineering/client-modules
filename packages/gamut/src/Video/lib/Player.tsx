/* eslint-disable gamut/no-css-standalone */
import '../styles/vds_base_theme.scss';

import { styledOptions } from '@codecademy/gamut-styles';
import styled, { CSSObject } from '@emotion/styled';
import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
  Poster,
  Track,
} from '@vidstack/react';
import React, { useRef } from 'react';

import { Box } from '../../Box';
import { VideoProps } from '..';
import { keyboardShortcuts } from './utils/keyboardShortcuts';
import { vdsVariables } from './utils/variables';
import { VideoLayout } from './VideoLayout';

const VariableProvider = styled(Box, styledOptions(['variables']))<{
  variables?: CSSObject;
}>(({ variables }) => variables, {
  width: '100%',
  height: '100%',
  position: 'relative',
});

type VidstackPlayerProps = VideoProps & {
  onLoad: () => void;
};
export const VidstackPlayer: React.FC<VidstackPlayerProps> = ({
  autoplay,
  controls,
  loop,
  muted,
  onPlay,
  onReady,
  onLoad,
  placeholderImage,
  videoTitle,
  videoUrl,
  textTracks,
  thumbnails,
  translations,
  width,
  height,
  className,
}) => {
  const player = useRef<MediaPlayerInstance>(null);

  return (
    <VariableProvider
      variables={vdsVariables}
      className={className}
      style={{ width, height }}
    >
      <MediaPlayer
        ref={player}
        title={videoTitle}
        src={videoUrl}
        playsInline
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        onLoad={onLoad}
        onPlay={onPlay}
        onCanPlay={() => {
          onReady?.();
        }}
        keyShortcuts={keyboardShortcuts}
      >
        <MediaProvider>
          {placeholderImage && (
            <Poster
              className="vds-poster"
              alt={videoTitle}
              src={placeholderImage as string}
            />
          )}
          {textTracks?.map((track) => (
            <Track {...track} key={track.src} />
          ))}
        </MediaProvider>
        <VideoLayout
          controls={controls}
          thumbnails={thumbnails}
          translations={translations}
        />
      </MediaPlayer>
    </VariableProvider>
  );
};
