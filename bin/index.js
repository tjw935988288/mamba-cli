#!/usr/bin/env node

const clone = require('git-clone')
const program = require('commander')
const shell = require('shelljs')
const log = require('tracer').colorConsole()

function pushCode(projectName) {
    const pwd = shell.pwd()
    log.info(`正在拉取模板代码，下载位置：${pwd}/${projectName}/...`)
    clone('https://github.com/tjw935988288/mamba-template.git', pwd + `/${projectName}`, null, function() {
        shell.rm('-rf', pwd + `/${projectName}/.git`)
        log.info('模板工程建立完成')
    })
}

program
    .version('1.0.0')
    .description('webpack4.x的简易前端脚手架')
program
    .command('* <projectName>')
    .action(pushCode)

program.parse(process.argv)