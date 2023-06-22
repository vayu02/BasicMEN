// const express = require('express')
// const fs = require('fs')
// const path = require('path')

// const app = express()
// app.use(express.json())

// app.get('/files', (req, res) => {
//   const rootPath = path.parse(process.cwd()).root // Get the root directory dynamically

//   retrieveItems(rootPath)
//     .then((items) => res.json({ items }))
//     .catch((error) => {
//       console.error(error)
//       res.status(500).json({ error: 'Failed to retrieve files.' })
//     })
// })

// app.post('/files', (req, res) => {
//   const directoryPath = req.body.directory

//   if (!directoryPath) {
//     return res.status(400).json({ error: 'Directory path is required.' })
//   }

//   retrieveItems(directoryPath)
//     .then((items) => res.json({ items }))
//     .catch((error) => {
//       console.error(error)
//       res.status(500).json({ error: 'Failed to retrieve files.' })
//     })
// })

// function retrieveItems(directoryPath) {
//   return new Promise((resolve, reject) => {
//     fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
//       if (err) {
//         return reject(err)
//       }

//       const items = files.map((file) => {
//         const itemPath = path.join(directoryPath, file.name)
//         return {
//           type: file.isDirectory() ? 'folder' : 'file',
//           path: itemPath,
//         }
//       })

//       resolve(items)
//     })
//   })
// }

// const port = 3000 // Replace with your desired port number
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })

//upar wala works

// neeche wala tooo

// const express = require('express')
// const fs = require('fs')
// const path = require('path')

// const app = express()
// app.use(express.json())

// app.get('/files', (req, res) => {
//   const rootPath = path.parse(process.cwd()).root // Get the root directory dynamically

//   retrieveItems(rootPath)
//     .then((items) => res.json({ items }))
//     .catch((error) => {
//       console.error(error)
//       res.status(500).json({ error: 'Failed to retrieve files.' })
//     })
// })

// app.post('/files', (req, res) => {
//   const directoryPath = req.body.directory

//   if (!directoryPath) {
//     return res.status(400).json({ error: 'Directory path is required.' })
//   }

//   retrieveItems(directoryPath)
//     .then((items) => res.json({ items }))
//     .catch((error) => {
//       console.error(error)
//       res.status(500).json({ error: 'Failed to retrieve files.' })
//     })
// })

// function retrieveItems(directoryPath) {
//   return new Promise((resolve, reject) => {
//     fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
//       if (err) {
//         return reject(err)
//       }

//       const items = files.map((file) => {
//         const itemPath = path.join(directoryPath, file.name)
//         try {
//           const stats = fs.statSync(itemPath)
//           return {
//             type: file.isDirectory() ? 'folder' : 'file',
//             path: itemPath,
//             size: stats.size,
//             lastModified: stats.mtime,
//           }
//         } catch (error) {
//           console.error(`Error accessing file: ${itemPath}`)
//           return null
//         }
//       })

//       resolve(items.filter((item) => item !== null))
//     })
//   })
// }

// const port = 3000 // Replace with your desired port number
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })

// const express = require('express')
// const fs = require('fs')
// const path = require('path')

// const app = express()
// app.use(express.json())

// app.get('/files', (req, res) => {
//   const rootPath = path.parse(process.cwd()).root // Get the root directory dynamically

//   retrieveItems(rootPath)
//     .then((items) => res.json({ items }))
//     .catch((error) => {
//       console.error(error)
//       res.status(500).json({ error: 'Failed to retrieve files.' })
//     })
// })

// app.post('/files', (req, res) => {
//   const directoryPath = req.body.directory

//   if (!directoryPath) {
//     return res.status(400).json({ error: 'Directory path is required.' })
//   }

//   retrieveItems(directoryPath)
//     .then((items) => {
//       if (items.length === 0) {
//         res.status(404).json({ error: 'Directory or file not found.' })
//       } else {
//         res.json({ items })
//       }
//     })
//     .catch((error) => {
//       console.error(error)
//       res.status(500).json({ error: 'Failed to retrieve files.' })
//     })
// })

// function retrieveItems(directoryPath) {
//   return new Promise((resolve, reject) => {
//     fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
//       if (err) {
//         return reject(err)
//       }

//       const items = files.map((file) => {
//         const itemPath = path.join(directoryPath, file.name)
//         try {
//           const stats = fs.statSync(itemPath)
//           return {
//             type: file.isDirectory() ? 'folder' : 'file',
//             path: itemPath,
//             size: stats.size,
//             lastModified: stats.mtime,
//           }
//         } catch (error) {
//           console.error(`Error accessing file: ${itemPath}`)
//           return null
//         }
//       })

//       resolve(items.filter((item) => item !== null))
//     })
//   })
// }

// const port = 3000 // Replace with your desired port number
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })

// const express = require('express')
// const fs = require('fs')
// const path = require('path')

// const app = express()
// app.use(express.json())

// app.get('/files', (req, res) => {
//   const drives = getDrives()
//   res.json({ drives })
// })

// app.post('/files', (req, res) => {
//   const drivePath = req.body.drive

//   if (!drivePath) {
//     return res.status(400).json({ error: 'Drive path is required.' })
//   }

//   retrieveItems(drivePath)
//     .then((items) => {
//       if (items.length === 0) {
//         res.status(404).json({ error: 'Drive or directory not found.' })
//       } else {
//         res.json({ items })
//       }
//     })
//     .catch((error) => {
//       console.error(error)
//       res.status(500).json({ error: 'Failed to retrieve files.' })
//     })
// })

// function getDrives() {
//   const drives = []

//   const rootPaths = getRootPaths()

//   for (const rootPath of rootPaths) {
//     try {
//       const stats = fs.statSync(rootPath)

//       if (stats.isDirectory()) {
//         const drive = {
//           type: 'drive',
//           path: rootPath,
//           size: stats.size,
//           lastModified: stats.mtime.toISOString(),
//         }
//         drives.push(drive)
//       }
//     } catch (error) {
//       console.error(`Error accessing drive: ${rootPath}`)
//     }
//   }

//   return drives
// }

// function getRootPaths() {
//   const rootPaths = []
//   const root = path.parse(process.cwd()).root
//   rootPaths.push(root)

//   return rootPaths
// }

// function retrieveItems(directoryPath) {
//   return new Promise((resolve, reject) => {
//     fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
//       if (err) {
//         return reject(err)
//       }

//       const items = files.map((file) => {
//         const itemPath = path.join(directoryPath, file.name)
//         try {
//           const stats = fs.statSync(itemPath)
//           return {
//             type: file.isDirectory() ? 'folder' : 'file',
//             name: file.name,
//             size: stats.size,
//             lastModified: stats.mtime,
//           }
//         } catch (error) {
//           console.error(`Error accessing file: ${itemPath}`)
//           if (error.code === 'EBUSY') {
//             console.error(`File is busy or locked: ${itemPath}`)
//           }
//           return null
//         }
//       })

//       resolve(items.filter((item) => item !== null))
//     })
//   })
// }

// const port = 3000
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })

// const express = require('express')
// const fs = require('fs')
// const path = require('path')

// const app = express()
// app.use(express.json())

// app.get('/files', (req, res) => {
//   const drives = getDrives()
//   res.json({ drives })
// })

// app.post('/files', (req, res) => {
//   const drivePath = req.body.drive
//   const directoryPath = req.body.directory || ''

//   if (!drivePath) {
//     return res.status(400).json({ error: 'Drive path is required.' })
//   }

//   retrieveItems(drivePath, directoryPath)
//     .then((items) => {
//       if (items.length === 0) {
//         res.status(404).json({ error: 'Drive or directory not found.' })
//       } else {
//         res.json({ items })
//       }
//     })
//     .catch((error) => {
//       console.error(error)
//       res.status(500).json({ error: 'Failed to retrieve files.' })
//     })
// })

// function getDrives() {
//   const rootPath = path.parse(process.cwd()).root
//   const stats = fs.statSync(rootPath)

//   if (stats.isDirectory()) {
//     return [
//       {
//         type: 'drive',
//         path: rootPath,
//         size: stats.size,
//         lastModified: stats.mtime.toISOString(),
//       },
//     ]
//   }

//   return []
// }

// function retrieveItems(directoryPath) {
//   return new Promise((resolve, reject) => {
//     fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
//       if (err) {
//         return reject(err)
//       }

//       const items = files.map((file) => {
//         const itemPath = path.join(directoryPath, file.name)
//         try {
//           const stats = fs.statSync(itemPath)
//           return {
//             type: file.isDirectory() ? 'folder' : 'file',
//             name: file.name,
//             path: itemPath,
//             size: stats.size,
//             lastModified: stats.mtime,
//           }
//         } catch (error) {
//           console.error(`Error accessing file: ${itemPath}`)
//           if (error.code === 'EBUSY') {
//             console.error(`File is busy or locked: ${itemPath}`)
//           }
//           return null
//         }
//       })

//       resolve(items.filter((item) => item !== null))
//     })
//   })
// }

// const port = 3000
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })

const express = require('express')
const fs = require('fs').promises
const path = require('path')

const app = express()
app.use(express.json())

app.get('/files', async (req, res) => {
  try {
    const drives = await getDrives()
    res.json({ drives })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to retrieve drives.' })
  }
})

app.post('/files', async (req, res) => {
  const drivePath = req.body.drive
  const directoryPath = req.body.directory || ''

  if (!drivePath) {
    return res.status(400).json({ error: 'Drive path is required.' })
  }

  try {
    const items = await retrieveItems(drivePath, directoryPath)
    if (items.length === 0) {
      res.status(404).json({ error: 'Drive or directory not found.' })
    } else {
      res.json({ items })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to retrieve files.' })
  }
})

async function getDrives() {
  const rootPath = path.parse(process.cwd()).root
  const stats = await fs.stat(rootPath)

  if (stats.isDirectory()) {
    const driveName = path.parse(rootPath).root.replace(/\\/g, '')
    return [
      {
        type: 'drive',
        name: driveName,
        path: rootPath,
        size: stats.size,
        lastModified: stats.mtime.toISOString(),
      },
    ]
  }

  return []
}

async function retrieveItems(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath, { withFileTypes: true })
    const items = []

    for (const file of files) {
      const itemPath = path.join(directoryPath, file.name)
      try {
        const stats = await fs.stat(itemPath)
        const item = {
          type: file.isDirectory() ? 'folder' : 'file',
          name: file.name,
          path: itemPath,
          size: stats.size,
          lastModified: stats.mtime,
        }
        items.push(item)
      } catch (error) {
        console.error(`Error accessing file: ${itemPath}`)
        if (error.code === 'EBUSY') {
          console.error(`File is busy or locked: ${itemPath}`)
        }
      }
    }

    return items
  } catch (error) {
    throw error
  }
}

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
