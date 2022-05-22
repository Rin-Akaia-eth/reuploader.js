import { Fs, Path } from "../../../../deps.js"

export const Filesystem = {
  createFx: async ({ dirPath, fileName }) => {
    await Fs.mkdir(dirPath, { recursive: true }, console.error)

    return Fs.createWriteStream(Path.join(dirPath, fileName), { autoClose: true }).on(
      "error",
      console.error,
    )
  },
}
