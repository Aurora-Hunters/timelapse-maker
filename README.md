[mac]: https://github.com/Aurora-Hunters/timelapse-maker/releases/latest/download/Time-Lapse-Maker.dmg
[win]: https://github.com/Aurora-Hunters/timelapse-maker/releases/latest/download/Time-Lapse-Maker.exe
[linux]: https://github.com/Aurora-Hunters/timelapse-maker/releases/latest/download/Time-Lapse-Maker.AppImage

# Time Lapse Maker

Simple application for assembling time lapses. Choose a directory with photos, set FPS and resolution and get a video.  

[<img src="docs/assets/mac.png" height="40px">][mac] <img src="docs/assets/space"> [<img src="docs/assets/win.png" height="40px">][win] <img src="docs/assets/space"> [<img src="docs/assets/linux.png" height="40px">][linux]

![](./docs/assets/demo.png)

Releases and changes [page](https://github.com/Aurora-Hunters/timelapse-maker/releases/latest).

## Demo

![](./docs/assets/demo.gif)

## Issues and improvements

Feel free to report bugs with reproduction steps or requests any features on the issues page.

## Development

To run your own application locally you need to have installed Node.js and Yarn.

### Prepare

Clone the repository with sources.

Install required Node.js packages:

`yarn`

### Build and watch frontend files

Build frontend static files:

`yarn front:build`

If you want to rebuild these files automatically then run:

`yarn front:build:watch`

### Run the app

Start the electron app.

`yarn start`

Electron icon will be used while app is running in development mode.

Also a Chrome's development tools console will be opened.  

### Build the app

To build the distros for the app just use:

`yarn build`

It will run the following steps:

- `electron:icons-gen` — build icons for the app 
- `electron:icons-gen:postrun` — remove unused icons
- `front:prebuild` — delete old frontend public files 
- `front:build` — rebuild public files  
- `electron:build` — create the app distro

### Release a new version

Update the app version in `package.json` file and push a new git tag. 
