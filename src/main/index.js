'use strict'

import { app, BrowserWindow, Menu, ipcMain, shell } from 'electron'
import { fs } from 'fs'
import { os } from 'os'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080/`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({})
  mainWindow.minimize()
  mainWindow.maximize()
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

function mainmenu () {
  let winURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:9080/#/welcome'
    : `file://${__dirname}/index.html`
  mainWindow.loadURL(winURL)
  const mainWindowMenuBar = Menu.buildFromTemplate(mainMenuTemplate)
  mainWindow.setMenu(mainWindowMenuBar)
}
var mainMenuTemplate = [
  {
    label: 'MASTER',
    submenu: [ {
      label: 'ITEM_MASTER',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/master/item`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }, {
      label: 'CUSTOMER_MASTER',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/master/customer`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }, {
      label: 'TARGET_MASTER',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/master/target`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }, {
      label: 'FSM/PSR MASTER',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/master/fsm`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }]
  }, {
    label: 'TRANSCATION',
    submenu: [ {
      label: 'STOCK_ENTRY_FROM_GATE_PASS',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/transaction/gatepass`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }, {
      label: 'SAMPLE_INVOICE',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/transaction/invoice`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }, {
      label: 'GR|GI',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/transaction/grorgi`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }]
  }, {
    label: 'MASTER REPORT',
    submenu: [ {
      label: 'ITEM DETAILS',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/master_report/item`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }, {
      label: 'CUSTOMER DETAILS',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/master_report/customer`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }, {
      label: 'TARGET REPORT',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/master/target`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }, {
      label: 'COMPANY DETAILS',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/abc`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }]
  }, {
    label: 'TRANSCATION REPORT',
    submenu: [ {
      label: 'SAMPLE INVOICE_WITH INVOICE_NO',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/transaction_report/invoiceno`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }, {
      label: 'SAMPLE INVOICE WITH RANGE OF INVOICE',
      click () {
        let winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080/#/abc`
          : `file://${__dirname}/index.html`
        mainWindow.loadURL(winURL)
      }
    }, {
      label: 'SAMPLE DETAILS',
      submenu: [ {
        label: 'SAMPLE FLASH',
        click () {
          let winURL = process.env.NODE_ENV === 'development'
            ? `http://localhost:9080/#/transaction_report/flash`
            : `file://${__dirname}/index.html`
          mainWindow.loadURL(winURL)
        }
      }, {
        label: 'PRODUCT WISE DETAILS',
        click () {
          let winURL = process.env.NODE_ENV === 'development'
            ? `http://localhost:9080/#/transaction_report/sampleproduct`
            : `file://${__dirname}/index.html`
          mainWindow.loadURL(winURL)
        }
      }, {
        label: 'FSM|PSR WISE DETAILS',
        click () {
          let winURL = process.env.NODE_ENV === 'development'
            ? 'http://localhost:9080/'
            : `file://${__dirname}/index.html`
          mainWindow.loadURL(winURL)
        }
      }
      ]
    }]
  }, {
    label: 'SELECT COMPANY',
    click () {
      let winURL = process.env.NODE_ENV === 'development'
        ? 'http://localhost:9080/'
        : `file://${__dirname}/index.html`
      mainWindow.loadURL(winURL)
      const mainWindowMenuBar = Menu.buildFromTemplate(one)
      mainWindow.setMenu(mainWindowMenuBar)
    }
  }, {
    label: ' TOOLS',
    submenu: [ {
      label: 'pdf',
      click () {
        const pdfpath = require('path').join(os.tmpdir(), 'some.pdf')
        console.log('the pdf path ' + pdfpath)
        mainWindow.webContents.printToPDF({}, (error, data) => {
          if (error) return console.log(error.message)
          fs.writeFile(pdfpath, data, err => {
            if (err) return console.log(error.message)
            fs.writeFile(pdfpath, data, err => {
              if (err) return console.log(err.message)
              shell.openExternal('file://' + pdfpath)
              //  event.sender.send('wrote-pdf',pdfpath);
            })
          })
        })
      }
    }, {
      label: 'save html/file',
      click () {
        mainWindow.webContents.savePage('H:/application/sample/project1/dist/test1.html', 'HTMLComplete', function (error) {
          if (!error) console.log('Didnt save the page')
        })
      }
    }]
  }
]
ipcMain.on('create', mainmenu)

var one = [
  {
    label: 'file'
  },
  {
    label: 'edit'
  }
]
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
