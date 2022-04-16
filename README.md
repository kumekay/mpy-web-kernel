# mpy_web_kernel

[![Github Actions Status](https://github.com/kumekay/mpy-web-kernel/workflows/Build/badge.svg)](https://github.com/kumekay/mpy-web-kernel/actions/workflows/build.yml)

Micropython kernel with WebSerial

## Requirements

- JupyterLite >= 0.1.0a10

## Install

To install the extension, execute:

```bash
pip install mpy_web_kernel
```

Then build your JupyterLite site:

```bash
jupyter lite build
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall mpy_web_kernel
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the mpy_web_kernel directory
# Install package in development mode
python -m pip install -e .

# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite

# Rebuild extension Typescript source after making changes
jlpm run build
```

Run WS test server

```bash
cd test_wsserver
pipenv install
pipenv run ws_server
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm run watch


# Run JupyterLite in another terminal
jupyter lite serve
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

### Development uninstall

```bash
pip uninstall mpy_web_kernel
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `mpy-web-kernel` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
