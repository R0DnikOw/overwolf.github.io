export default {
  latest: {
    date: 'March 2024',
    path: '2024/march',
    name: '248',
    suffix: '.120',
  },
  deploying: {
    date: 'March 2024',
    path: '2024/march',
    name: '248',
    suffix: '.120',
  },
  dev: {
    date: 'April 2024',
    path: '2024/april',
    name: '250',
  },
  'ow-electron': {
    date: 'March 2024',
    path: 'v28.2.5',
    name: '28.2.5',
  },
  'ow-electron-builder': {
    date: 'April 2024',
    path: 'v24.13.3',
    name: '24.13.4',
  },
  docs: {
    date: 'November 22nd 2023',
    path: '2023/november#november-22nd-2023---discord-rich-presence',
    name: 'Discord Rich Presence',
  },
  console: {
    date: 'March 26th 2024',
    path: '2024/march#march-27th-2024---users-and-permissions-bite-2',
    name: 'Users and Permissions Bite 2',
  },
} as {
  latest: Changelog;
  deploying: Changelog;
  dev: Changelog;
  'ow-electron': Changelog;
  'ow-electron-builder': Changelog;
  docs: Changelog;
  console: Changelog;
};

type Changelog = { date: string; path: string; name: string; suffix?: string };
