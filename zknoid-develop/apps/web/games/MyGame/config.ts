import { createZkNoidGameConfig } from '@/lib/createConfig';
import { ZkNoidGameType } from '@/lib/platform/game_types';
import { MyGame } from 'zknoid-chain-dev';
import { ZkNoidGameFeature, ZkNoidGameGenre } from '@/lib/platform/game_tags';

import { LogoMode } from '@/app/constants/games';
import mygame from './mygame';

export const mynumberGuessingConfig = createZkNoidGameConfig({
  id: 'number-guessing',
  type: ZkNoidGameType.PVP,
  name: 'Number guessing [MY_GAME]',
  description: 'Player hides a number. Other player tries to guess it',
  image: '/image/games/soon.svg',
  logoMode: LogoMode.CENTER,
  genre: ZkNoidGameGenre.BoardGames,
  features: [ZkNoidGameFeature.Multiplayer],
  isReleased: true,
  releaseDate: new Date(2024, 0, 1),
  popularity: 50,
  author: 'MX',
  rules:
    'Number guessing is a game where a player hides a number and gives the PC to another player. Other player tries to guess the number',
  runtimeModules: {
    MyGame,
  },
  page: mygame,
});