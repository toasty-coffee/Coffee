## Coffee

Keeps display on

### Prerequisites

- [yarn](https://classic.yarnpkg.com/en/docs/install)
- [node >=v10.6](https://nodejs.org/dist/latest-v10.x)
- [nvm](https://github.com/nvm-sh/nvm) (optional)

### How To Use

If the only version of `node` on your machine is `v10.x`, you can skip to [Running The App](#running-the-app).

_Check `node` version by running:_

```sh
$ node -v
```

#### nvm

If you need to manage multiple versions of node on your machine, use `nvm`.

To install the necessary `node` version using `nvm`:

```sh
$ nvm install 10.6.0
```

If you already have `node v10.6.0` installed via `nvm`, set the node environment to the version specified in the `.nvmrc` file:

```sh
$ nvm use
```

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
