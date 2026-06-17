import GalaxyIcon from '@shared/assets/icons/galaxy.svg?react';
import SpaceSignalIcon from '@shared/assets/icons/space-signal.svg?react';
import StarsIcon from '@shared/assets/icons/stars.svg?react';

export const queryPlaceholderTypes = {
  empty: {
    title: "Oh, it's empty here",
    message: 'The data is empty, please check its relevance.',
    IconStub: GalaxyIcon,
  },
  error: {
    title: 'Unknown error',
    message: 'An unknown error occurred while retrieving data. Please try again!',
    buttonText: 'Retry',
    IconStub: SpaceSignalIcon,
  },
  invalidPath: {
    title: 'Invalid path',
    message: 'There is no such path, please check the URL again.',
    buttonText: 'Return Home',
    IconStub: StarsIcon,
  },
};
