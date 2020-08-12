## Coffee

Keeps display on

### Prerequisites

- [yarn](https://classic.yarnpkg.com/en/docs/install)
- [node](https://nodejs.org/en/download/)

#### Running the App

##### Clone

```sh
$ git clone git@github.com:lexabu/Coffee.git
```

##### Change directory

```sh
cd Coffee
```

##### Install dependencies

```sh
$ yarn
```

##### Run script in production mode

```sh
$ yarn start
```

##### Run script in development mode

```sh
$ yarn dev
```

#### Automate opening the app in Windows 10

If you prefer to have the app open at startup you can use the following method.

Create a batch file to automatically open the command prompt, change directories, and start the application. Save the below code as a .bat file and update the file address.

##### movemouse.bat

```sh
start /MIN
cd C:\Users\%USERPROFILE%\Coffee && yarn start
exit
```

Create and add a visual basic script to the startup folder to run your batch file at startup. The default folder for start up files is `C:\Users\%USERPROFILE%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`

##### autostartcoffee.vbs

```sh
Set WshShell = CreateObject("WScript.Shell")
WshShell.Run chr(34) & "C:\Users\%USERPROFILE%\BatchFiles\movemouse.bat" & Chr(34), 0
Set WshShell = Nothing
```
