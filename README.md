@youngjuning/cli
================

CLI for youngjuning

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@youngjuning/cli.svg)](https://npmjs.org/package/@youngjuning/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@youngjuning/cli.svg)](https://npmjs.org/package/@youngjuning/cli)
[![License](https://img.shields.io/npm/l/@youngjuning/cli.svg)](https://github.com/youngjuning/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @youngjuning/cli
$ youngjuning COMMAND
running command...
$ youngjuning (-v|--version|version)
@youngjuning/cli/0.0.0 darwin-x64 node-v12.18.4
$ youngjuning --help [COMMAND]
USAGE
  $ youngjuning COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`youngjuning hello [FILE]`](#youngjuning-hello-file)
* [`youngjuning help [COMMAND]`](#youngjuning-help-command)

## `youngjuning hello [FILE]`

describe the command here

```
USAGE
  $ youngjuning hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ youngjuning hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/youngjuning/cli/blob/v0.0.0/src/commands/hello.ts)_

## `youngjuning help [COMMAND]`

display help for youngjuning

```
USAGE
  $ youngjuning help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
